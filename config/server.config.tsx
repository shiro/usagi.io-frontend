import objectAssignDeep from "object-assign-deep";

import {webpackPaths} from "config/webpack.config.js";
import path from "path";


const prod = {};

const dev = {};

const envConfig = process.env.NODE_ENV === "production" ? prod : dev;

const {GALLERY_PATH, CACHE_PATH} = process.env;

const config = {
    path: (() => {

        return {};
    })()
};

export const serverConfig = objectAssignDeep(
    {
        path: (() => {
            const cache = path.isAbsolute(CACHE_PATH) ? CACHE_PATH :
                    path.join(webpackPaths.appRoot, CACHE_PATH);

            return {
                root: webpackPaths.appRoot,
                // dist: webpackPaths.serverDest,
                assets: webpackPaths.clientDest,
                gallery: path.isAbsolute(GALLERY_PATH) ? GALLERY_PATH :
                    path.join(webpackPaths.appRoot, GALLERY_PATH),
                pictureCache: path.join(cache, "pictures"),
                thumbnailCache: path.join(cache, "thumbnails"),
            };
        })(),
        files: {
            //     htmlTemplate: webpackFiles.htmlTemplateDest,
        },
    },
    envConfig
);
