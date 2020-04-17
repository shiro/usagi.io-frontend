const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const postcssPresentEnv = require("postcss-preset-env");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const { appRoot, stats, webpackPaths, webpackFiles } = require("../config/webpack.config");
const { pathResolver } = require("./webpack.shared");


module.exports = {
    name: "client",
    mode: "production",
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
                include: appRoot,
                exclude: /node_modules/,
                loader: "ts-loader",
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[local]_[hash:base64:5]",
                            },
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: function(){
                                return [postcssPresentEnv];
                            }
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            prependData: '@import "~@/master";',
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
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: function(){
                                return [postcssPresentEnv];
                            }
                        }
                    },
                ],
            },
            {
                test: /\.(svg|md)$/i,
                loader: "raw-loader",
            },
        ],
    },
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
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
        // new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true }),
        new Dotenv({ defaults: true, systemvars: true }),
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
        }),
        // new webpack.DefinePlugin({
        //     "process.env.NODE_ENV": JSON.stringify("production"),
        //     "process.env.TARGET": JSON.stringify("client"),
        // }),
    ],
};

