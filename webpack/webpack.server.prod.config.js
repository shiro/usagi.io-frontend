// const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const { appRoot, stats, webpackPaths, webpackFiles } = require("../config/webpack.config");
const { pathResolver } = require("./webpack.shared");
const Dotenv = require('dotenv-webpack');


module.exports = {
    name: "server",
    mode: "production",
    target: "node",
    devtool: "source-map",
    stats,
    entry: [
        // "@babel/polyfill",
        path.join(appRoot, "src/server/server.tsx"),
    ],
    output: {
        filename: webpackFiles.serverDest,
        path: webpackPaths.serverDest,
    },
    node: { // workaround for webpack bug
        __dirname: false,
    },
    resolve: pathResolver,
    module: {
        rules: [
            {
                test: /\.tsx$/,
                include: appRoot,
                exclude: /node_modules/,
                loader: "ts-loader",
                options: {
                    configFile: path.join(appRoot, "tsconfig.server.json"),
                },
            },
            {
                test: /\.(svg|md|graphql)$/i,
                loader: "raw-loader",
            },
        ],
    },
    // optimization: {
    //     minimizer: [
    //         new UglifyJsPlugin({
    //             cache: true,
    //             parallel: true,
    //             sourceMap: true,
    //         }),
    //     ],
    // },
    plugins: [
        new CleanWebpackPlugin(),
        new Dotenv({defaults: true, systemvars: true}),
        // new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true }),
        // new CleanWebpackPlugin([webpackPaths.serverDest], {
        //     root: webpackPaths.appRoot,
        // }),
        // new webpack.DefinePlugin({
        //     "process.env.NODE_ENV": JSON.stringify("production"),
        //     "process.env.TARGET": JSON.stringify("server"),
        // }),
    ],
};

