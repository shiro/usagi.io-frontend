import objectAssignDeep from "object-assign-deep";

import {webpackPaths, webpackFiles} from "config/webpack.config.js";
import path from "path";


const prod = {};

const dev = {};

const envConfig = process.env.NODE_ENV === "production" ? prod : dev;


export const serverConfig = objectAssignDeep(
    {
        path: {
            root: webpackPaths.appRoot,
            // dist: webpackPaths.serverDest,
            assets: webpackPaths.clientDest,
            gallery: path.join(webpackPaths.appRoot, "local/gallery"),
        },
        files: {
            //     htmlTemplate: webpackFiles.htmlTemplateDest,
        },
    },
    envConfig
);



