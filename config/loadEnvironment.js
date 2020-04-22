const path = require("path");
const { webpackPaths } = require("./webpack.config");

const dotenvExtended = require("dotenv-extended");
const dotenvParseVariables = require("dotenv-parse-variables");

let parsedEnv = dotenvExtended.load({
    path: path.join(webpackPaths.appRoot, "/.env"),
    defaults: path.join(webpackPaths.appRoot, "/.env.defaults"),
    includeProcessEnv: true,
    assignToProcessEnv: false,
    // silent: true,
    // errorOnMissing: true,
    // errorOnExtra: true,
});
parsedEnv = dotenvParseVariables(parsedEnv);

process.env = { ...process.env, ...parsedEnv };

