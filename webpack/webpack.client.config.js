const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const Dotenv = require('dotenv-webpack');

const { webpackPaths, webpackFiles } = require("../config/webpack.config");
const webpackBase = require("./webpack.client.prod.config");

module.exports = {
    ...webpackBase,
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: webpackPaths.clientDest,
        hot: true,
        compress: true,
        historyApiFallback: true,
        disableHostCheck: true,
        inline: true,
        proxy: [{
            context: ["**"],
            target: "http://localhost:3001",
        }],
        host: "0.0.0.0",
        stats: webpackBase.stats,
        port: 3000,
        // contentBase: path.join(appRoot, "assets") // proxy stuff url,
        publicPath: "/", // wds resources url
    },
    optimization: { // override production optimizations
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "initial",
                    name: "vendor",
                    priority: 10,
                    enforce: true,
                }
            },
        },
    },
    plugins: [
        new Dotenv({defaults: true, systemvars: true}),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            { from: webpackPaths.assetSrc, to: "assets" },
            { from: webpackPaths.publicSrc, ignore: [webpackFiles.htmlTemplateDest] }
        ]),
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[id].[hash].css",
        }),
        new HtmlWebpackPlugin({
            template: path.join(webpackPaths.templateSrc, webpackFiles.htmlTemplateSrc),
            filename: webpackFiles.htmlTemplateDest,
            inject: "body",
            alwaysWriteToDisk: true, // dev only
        }),
        // new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true }),
        new HtmlWebpackHarddiskPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.DefinePlugin({
        //     "process.env.NODE_ENV": JSON.stringify("development"),
            // "process.env.TARGET": JSON.stringify("client"),
        // }),
    ],
};
