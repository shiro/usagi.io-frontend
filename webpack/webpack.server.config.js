const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const StartServerPlugin = require("start-server-webpack-plugin");

const { appRoot, stats, webpackPaths, webpackFiles } = require("../config/webpack.config");
const { pathResolver, isDevelopment } = require("./webpack.shared");


module.exports = {
    mode: isDevelopment ? "development" : "production",
    target: "node",
    devtool: isDevelopment ? "inline-source-map" : "source-map",
    stats,
    entry: [
        isDevelopment && "webpack/hot/poll?1000", // poll for newly compiled bundles and load them at runtime
        path.join(appRoot, "src/server/server.tsx"),
    ].filter(Boolean),
    output: {
        filename: webpackFiles.serverDest,
        path: webpackPaths.serverDest,
    },
    watch: isDevelopment,
    node: { // workaround for webpack bug
        __dirname: false,
    },
    resolve: pathResolver,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: appRoot,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-typescript"
                        ],
                        plugins: [
                            "babel-plugin-transform-typescript-metadata",
                            ["@babel/plugin-transform-runtime", { "regenerator": true, }],
                            ["@babel/plugin-proposal-decorators", { "legacy": true }],
                            ["@babel/plugin-proposal-class-properties", { "loose": true }],
                        ],
                        babelrc: false,
                        configFile: false,
                    },
                }],
            },
            {
                test: /\.(svg|md|graphql)$/i,
                loader: "raw-loader",
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        
        isDevelopment && new webpack.HotModuleReplacementPlugin(),
        isDevelopment && new StartServerPlugin({
            name: webpackFiles.serverDest,
            nodeArgs: ["--inspect=0.0.0.0:54985"], // allow debugging
        }),
    ].filter(Boolean),
};

