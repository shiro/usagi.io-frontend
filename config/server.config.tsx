import objectAssignDeep from "object-assign-deep";

import {webpackPaths} from "config/webpack.config.js";
import path from "path";


const prod = {};

const dev = {};

const envConfig = process.env.NODE_ENV === "production" ? prod : dev;

const config = {
    path: (() => {

        return {};
    })()
};

// use the path if its absolute else construct an absolute path from the app root
const toAbsolutePath = (dest: string) => path.isAbsolute(dest) ? dest : path.join(webpackPaths.appRoot, dest);

export const serverConfig = objectAssignDeep(
    (() => {
        return {
            path: (() => {
                const cache = toAbsolutePath(process.env.CACHE_PATH);

                return {
                    root: webpackPaths.appRoot,
                    assets: webpackPaths.clientDest,
                    gallery: toAbsolutePath(process.env.GALLERY_PATH),
                    blog: toAbsolutePath(process.env.BLOG_PATH),
                    pictureCache: path.join(cache, "pictures"),
                    thumbnailCache: path.join(cache, "thumbnails"),
                };
            })(),
            files: {
                watermark: toAbsolutePath(process.env.WATERMARK_FILE),
            },
        };
    })(),
    envConfig
);
