const path = require("path");
const webpack = require("webpack");
const StartServerPlugin = require("start-server-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HappyPack = require("happypack");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const { appRoot, webpackPaths, webpackFiles } = require("../config/webpack.config");

const webpackBase = require("./webpack.server.prod.config");


module.exports = {
    ...webpackBase,
    mode: "development",
    devtool: "inline-source-map",
    entry: [
        "@babel/polyfill",
        "webpack/hot/poll?1000",
        path.join(appRoot, "src/server/server"),
    ],
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
    },
    optimization: {},
    plugins: [
        new HappyPack({
            id: "ts",
            threads: 2,
            loaders: [
                {
                    path: "ts-loader",
                    query: { happyPackMode: true },
                },
            ],
        }),
        new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true }),
        new CleanWebpackPlugin([webpackPaths.serverDest], {
            root: webpackPaths.appRoot,
        }),
        new webpack.HotModuleReplacementPlugin(),
        new StartServerPlugin({
            name: webpackFiles.serverDest,
            nodeArgs: ["--inspect=0.0.0.0:54985"], // allow debugging
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("development"),
            "process.env.TARGET": JSON.stringify("server"),
        }),
    ],
};
