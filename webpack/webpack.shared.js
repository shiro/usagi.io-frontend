require("../config/loadEnvironment");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const sass = require("node-sass");
const sassUtils = require("node-sass-utils")(sass);

const { appRoot } = require("../config/webpack.config");

module.exports.isDevelopment = process.env.NODE_ENV !== "production";

module.exports.pathResolver = {
    extensions: [".tsx", ".ts", ".jsx", ".mjs", ".js", ".json", ".graphql"],
    plugins: [new TsconfigPathsPlugin({ configFile: path.join(appRoot, "tsconfig.json") })]
};

exports.makeStyleLoaders = (type, architecture) => {
    return [
        architecture === "server" || !exports.isDevelopment ?
            MiniCssExtractPlugin.loader :
            "style-loader",
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
        },
        type === "scss" && {
            loader: "sass-loader",
            options: {
                sourceMap: exports.isDevelopment,
                prependData: "@import \"~@/master\";",
                sassOptions: {
                    functions: {
                        "get($keys)": (keys) => {
                            keys = keys.getValue().split(".");
                            let result = require(path.join(appRoot, "config/theme.js"));
                            let i;
                            for(i = 0; i < keys.length; i++){
                                result = result[keys[i]];
                            }
                            result = sassUtils.castToSass(result);
                            return result;
                        }
                    }
                }
            },
        },
    ].filter(Boolean);
};

exports.MiniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: "[name].[hash].css",
    chunkFilename: "[id].[hash].css",
});
