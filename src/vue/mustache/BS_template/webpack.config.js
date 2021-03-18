const { resolve } = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "js/index.js",
        path: resolve(__dirname, "dist"),
    },
    mode: "development",
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
    // 配置 webpack-dev-server
    devServer: {
        // 打包后的目录
        contentBase: resolve(__dirname, "dist"),
        // 不启用gzip压缩
        compress: false,
        // 端口
        port: 3000,
        // 自动打开浏览器
        open: true,
    },
};
