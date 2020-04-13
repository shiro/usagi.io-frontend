const path = require("path");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');


module.exports = {};

const appRoot = path.join(__dirname, "..");

module.exports.appRoot = appRoot;

module.exports.pathResolver = {
    extensions: [".tsx", ".ts", ".jsx", ".mjs", ".js", ".json"],
    // alias: {
        // ["api"]: path.join(appRoot, "src/api"),
        // ["components"]: path.join(appRoot, "src/components"),
        // ["config"]: path.join(appRoot, "config"),
        // ["containers"]: path.join(appRoot, "src/containers"),
        // ["routes"]: path.join(appRoot, "src/routes"),
        // ["server"]: path.join(appRoot, "src/server"),
        // ["state"]: path.join(appRoot, "src/state"),
        // ["style"]: path.join(appRoot, "src/style"),
        // ["typings"]: path.join(appRoot, "src/typings"),
        // ["~"]: path.join(appRoot,"src"),
    // },
    plugins: [new TsconfigPathsPlugin({configFile: path.join(appRoot,"tsconfig.json")})]
};

module.exports.stats = {
    colors: true,
    hash: false,
    version: false,
    cached: false,
    entrypoints: false,
    chunks: false,
    modules: false,
    builtAt: false,
    reasons: false,
    children: false,
    warnings: false,
};

module.exports.webpackPaths = {
    appRoot,
    serverDest: path.join(appRoot, "build_server"),
    clientDest: path.join(appRoot, "build"),
    templateSrc: path.join(appRoot, "src/server/templates"),
    assetSrc: path.join(appRoot, "assets"),
    publicSrc: path.join(appRoot, "public"), // things like favicons, robots.txt and other static non-assets
};

module.exports.webpackFiles = {
    serverDest: "server.js",
    htmlTemplateSrc: "app.html",
    htmlTemplateDest: "app.html",
};

