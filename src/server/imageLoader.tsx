import * as fsSync from 'fs';
import {serverConfig} from "config/server.config";
import path from "path";
import imageMagick from "imagemagick";
import * as util from "util";
import * as ImageMagick from "imagemagick";
import {exec} from "child_process";

const fs = fsSync.promises;

export interface IPicture {
    source: string,
    thumb: string,
}

const pictureCache = {
    pictureFileNames: [] as string[],
}

export const returnPictures = (baseUrl?: string) => {
    return pictureCache.pictureFileNames.map(file => {
        return {
            source: `${baseUrl}/gallery/${file}`,
            thumb: `${baseUrl}/gallery/thumb/${file}`,
        };
    });
}

export const initImages = async (baseUrl?: string) => {
    if (pictureCache.pictureFileNames.length) {
        return returnPictures(baseUrl);
    }

    const sourcePath = serverConfig.path.gallery;

    // TODO move
    if (!fsSync.existsSync(serverConfig.path.gallery)) {
        await fs.mkdir(serverConfig.path.gallery, {recursive: true});
        console.warn(`warn: gallery folder did not exist: ${serverConfig.path.gallery}, but was created now`);
    }

    if (!fsSync.existsSync(serverConfig.path.thumbnailCache))
        await fs.mkdir(serverConfig.path.thumbnailCache, {recursive: true});

    if (!fsSync.existsSync(serverConfig.path.pictureCache))
        await fs.mkdir(serverConfig.path.pictureCache, {recursive: true});

    const files = await fs.readdir(sourcePath);

    const processPictures = () => files.map(async file => {
        const identify = util.promisify<string, ImageMagick.Features>(imageMagick.identify);

        const {width, height} = await identify(path.join(serverConfig.path.gallery, file));

        if (width == undefined || height == undefined)
            throw new Error("failed to retrieve image dimensions");

        {
            const watermarkFile = serverConfig.files.watermark;
            const sourceFile = path.join(serverConfig.path.gallery, file);
            const destinationFile = path.join(serverConfig.path.pictureCache, file);
            const command = [
                'composite',
                '-watermark', '40%',
                '-background', 'none',
                '\\(',
                watermarkFile,
                '-geometry', '+50+50',
                '-gravity', 'center',
                '\\)',
                sourceFile,
                destinationFile,
            ];

            await util.promisify(exec)(command.join(' '));
        }

        {
            const sourceFile = path.join(serverConfig.path.pictureCache, file);
            const destinationPath =  path.join(serverConfig.path.thumbnailCache, file);

            const resize = util.promisify(imageMagick.resize);
            await resize({
                srcPath: sourceFile,
                dstPath: destinationPath,
                [width > height ? "width" : "height"]: 500,
            });
        }

        return file;
    });

    pictureCache.pictureFileNames = await Promise.all(processPictures());

    console.log("updated picture cache");

    return returnPictures(baseUrl);
}
