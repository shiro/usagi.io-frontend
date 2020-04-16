import * as fs from "fs";
import {serverConfig} from "config/server.config";


const galleryUrl = "http://localhost:3000/gallery"

export interface Picture {
    source: string,
}

export const loadImages = () => {
    const sourcePath = serverConfig.path.gallery;

    const files = fs.readdirSync(sourcePath);

    const pictures: Picture[] = files.map(file => {
        return {source: `${galleryUrl}/${file}`};
    });

    return pictures;
}
