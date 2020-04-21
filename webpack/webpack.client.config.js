const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const { appRoot, stats, webpackPaths, webpackFiles } = require("../config/webpack.config");
const { pathResolver, isDevelopment } = require("./webpack.shared");

module.exports = {
    mode: isDevelopment ? "development" : "production",
    devtool: "source-map",
    stats,
    entry: [
        // "@babel/polyfill",
        path.join(appRoot, "src/index"),
    ],
    output: {
        filename: "[name].js",
        path: webpackPaths.clientDest,
        publicPath: "/",
    },
    resolve: pathResolver,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: path.join(appRoot, "src"),
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript"
                        ],
                        babelrc: false,
                        configFile: false,
                        plugins: [
                            isDevelopment && require.resolve("react-refresh/babel"),
                        ].filter(Boolean),
                    },
                }],
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[local]_[hash:base64:5]",
                            },
                            sourceMap: isDevelopment,
                            importLoaders: 2,
                        },
                    },
                    "postcss-loader",
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
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    "postcss-loader",
                ],
            },
            {
                test: /\.md$/i,
                loader: "raw-loader",
            },
            {
                test: /\.svg$/,
                use: ["@svgr/webpack", "url-loader"],
            }
        ],
    },
    optimization: {
        minimizer: isDevelopment ? [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})] : undefined,
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
    devServer: isDevelopment ? {
        contentBase: webpackPaths.clientDest,
        hot: true,
        compress: true,
        historyApiFallback: true,
        disableHostCheck: true,
        inline: true,
        proxy: [{
            context: ["**"],
            target: `http://localhost:${process.env.DEV_PORT}`,
        }],
        host: "0.0.0.0",
        stats: stats,
        port: process.env.PORT,
        publicPath: "/", // wds resources url
    } : {},
    plugins: [
        // new ForkTsCheckerWebpackPlugin({
        //     checkSyntacticErrors: true,
        //     async: isDevelopment,
        //     useTypescriptIncrementalApi: true,
        // }),
        new Dotenv({ defaults: true, systemvars: true }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            { from: webpackPaths.resourcesSrc, to: "assets/resources" },
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
            alwaysWriteToDisk: isDevelopment, // dev only
        }),
        isDevelopment && new HtmlWebpackHarddiskPlugin(),
        isDevelopment && new ReactRefreshWebpackPlugin({
            disableRefreshCheck: true, // TODO disable this and remove webpack-hot-middleware when the bugs are gone o.o
        }),
    ].filter(Boolean),
};

