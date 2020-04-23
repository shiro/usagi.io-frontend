require("../config/loadEnvironment");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const { appRoot } = require("../config/webpack.config");

module.exports.isDevelopment = process.env.NODE_ENV !== "production";

module.exports.pathResolver = {
    extensions: [".tsx", ".ts", ".jsx", ".mjs", ".js", ".json", ".graphql"],
    plugins: [new TsconfigPathsPlugin({ configFile: path.join(appRoot, "tsconfig.json") })]
};

exports.makeStyleLoaders = (type) => {
    return [
        MiniCssExtractPlugin.loader,
        {
            loader: "css-loader",
            options: {
                modules: type === "css" ? false : {
                    localIdentName: "[local]_[hash:base64:5]",
                },
                sourceMap: exports.isDevelopment,
                importLoaders: type === "css" ? 1 : 2,
            },
        },
        {
            loader: "postcss-loader",
            options: {
                config: { path: path.join(appRoot, "config/postcss.config.js") }
            }
        }
    ];
};

exports.MiniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: "[name].[hash].css",
    chunkFilename: "[id].[hash].css",
});
