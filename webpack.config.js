const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require("path");

module.exports = {
    resolve: {
        plugins: [new TsconfigPathsPlugin()],
        alias: {
            "@": path.resolve(__dirname, "./src/"),
            "config": path.resolve(__dirname, "./config/"),
        },
    }
};
