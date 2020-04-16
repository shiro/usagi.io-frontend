const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require("path");

const { appRoot } = require("../config/webpack.config");

module.exports.pathResolver = {
    extensions: [".tsx", ".ts", ".jsx", ".mjs", ".js", ".json", ".graphql"],
    plugins: [new TsconfigPathsPlugin({configFile: path.join(appRoot,"tsconfig.json")})]
};
