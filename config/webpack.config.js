const path = require("path");


module.exports = {};

const appRoot = path.join(__dirname, "..");

module.exports.appRoot = appRoot;


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
    warnings: true,
};

module.exports.webpackPaths = {
    appRoot,
    serverDest: path.join(appRoot, "build_server"),
    clientDest: path.join(appRoot, "build"),
    assetSrc: path.join(appRoot, "assets"),
    resourcesSrc: path.join(appRoot, "assets/resources"),
    publicSrc: path.join(appRoot, "public"), // things like favicons, robots.txt and other static non-assets
    templateSrc: path.join(appRoot, "public"), // html template directory
};

module.exports.webpackFiles = {
    serverDest: "server.js",
    htmlTemplateSrc: "index.html", // html template file
    htmlTemplateDest: "index.html",
};
