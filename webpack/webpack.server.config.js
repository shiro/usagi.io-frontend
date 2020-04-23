const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const StartServerPlugin = require("start-server-webpack-plugin");

const { appRoot, stats, webpackPaths, webpackFiles } = require("../config/webpack.config");
const { pathResolver, isDevelopment, makeStyleLoaders, MiniCssExtractPlugin } = require("./webpack.shared");


module.exports = {
    mode: isDevelopment ? "development" : "production",
    target: "node",
    devtool: isDevelopment ? "inline-source-map" : "source-map",
    stats,
    entry: [
        isDevelopment && "webpack/hot/poll?1000", // poll for newly compiled bundles and load them at runtime
        path.join(appRoot, "src/server/serverEntrypoint.tsx"),
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
                            "@babel/preset-react",
                            "@babel/preset-typescript"
                        ],
                        plugins: [
                            "babel-plugin-transform-typescript-metadata",
                            ["@babel/plugin-transform-runtime", { "regenerator": true, }],
                            ["@babel/plugin-proposal-decorators", { "legacy": true }],
                            ["@babel/plugin-proposal-class-properties", { "loose": true }],
                            "@loadable/babel-plugin",
                        ],
                        babelrc: false,
                        configFile: false,
                    },
                }],
            },
            {
                test: /\.svg$/,
                use: ["@svgr/webpack", "url-loader"],
            },
            {
                test: /\.(md|graphql)$/i,
                loader: "raw-loader",
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    ...makeStyleLoaders("scss", "server"),
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: isDevelopment,
                            prependData: "@import \"~@/master\";",
                        },
                    },
                ],
            },
            {
                test: /\.(css)$/,
                use: makeStyleLoaders("css", "server"),
            },
        ],
    },
    plugins: [
        MiniCssExtractPlugin,
        new CleanWebpackPlugin(),
        new webpack.EnvironmentPlugin([process.env.NODE_ENV]),
        isDevelopment && new webpack.HotModuleReplacementPlugin(),
        isDevelopment && new StartServerPlugin({
            name: webpackFiles.serverDest,
            nodeArgs: ["--inspect=0.0.0.0:54985"], // allow debugging
        }),
    ].filter(Boolean),
};

