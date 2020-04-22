require("../config/loadEnvironment");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require("path");

const { appRoot } = require("../config/webpack.config");

module.exports.isDevelopment = process.env.NODE_ENV !== "production";

module.exports.pathResolver = {
    extensions: [".tsx", ".ts", ".jsx", ".mjs", ".js", ".json", ".graphql"],
    plugins: [new TsconfigPathsPlugin({ configFile: path.join(appRoot, "tsconfig.json") })]
};
