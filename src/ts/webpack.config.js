const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    // 指定入口文件
    entry: "./src/index.ts",

    // 指定打包文件所在目录
    output: {
        // 指定打包文件所在目录
        path: path.resolve(__dirname, "./dist"),
        // 指定打包后文件的文件
        filename: "index.js",

        // 配置输出环境
        environment: {
            // 不使用箭头函数
            arrowFunction: false,
            const: false,
        },
    },

    // 指定webpack打包时要使用的模块
    module: {
        // 指定规则
        rules: [
            {
                // test指定规则生效的文件
                test: /\.ts$/,

                // 需要使用的loader,从后往前执行
                use: [
                    // 配置babel
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                [
                                    // 指定环境插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 要兼容的目标浏览器
                                        targets: {
                                            chrome: "74",
                                            ie: "10",
                                        },
                                        // 指定corejs的版本
                                        corejs: "3",
                                        // 使用corejs的方式 "usage"表示按需加载
                                        useBuiltIns: "usage",
                                    },
                                ],
                            ],
                        },
                    },
                    "ts-loader",
                ],

                // 要排除的文件
                exclude: /node_modules/,
            },

            // 设置less文件处理
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    // 引入postcss
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            // 兼容最先两个版本浏览器
                                            browsers: "last 2 versions",
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    "less-loader",
                ],
            },
        ],
    },

    // 配置webpack插件
    plugins: [
        new HTMLWebpackPlugin({
            // title: "TypeScript项目配置",
            template: "./src/index.html",
        }),
        // 编译前先删除之前编译文件
        new CleanWebpackPlugin(),
    ],

    // 设置引用模块
    resolve: {
        extensions: [".ts", ".js"],
    },
};
