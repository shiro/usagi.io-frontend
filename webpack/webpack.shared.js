const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require("path");

const { appRoot } = require("../config/webpack.config");

// make env variables accessible in the webpack config
require("dotenv-defaults").config({ path: path.join(appRoot, "/.env"), defaults: path.join(appRoot, "/.env.defaults") });


module.exports.isDevelopment = process.env.NODE_ENV !== "production";

module.exports.pathResolver = {
    extensions: [".tsx", ".ts", ".jsx", ".mjs", ".js", ".json", ".graphql"],
    plugins: [new TsconfigPathsPlugin({ configFile: path.join(appRoot, "tsconfig.json") })]
};
