---
icon: vue
author: Best Shi
time: 2021-3-18
tag:
    - Vue
    - 前端
    - 源码
    - JavaScript
    - mustache
category: vue
---

# 手写 mustache 模板引擎

::: tip mustache 原理

mustache 原理是将模板字符串编译成 tokens 数组，然后把数据跟 tokens 数组结合解析成 DOM 字符串。

<img :src="$withBase('/images/bestshi.com_2021-03-19_00-49-03.png')">

-   tokens 是一个 JS 的嵌套数组，说白了，就是模板字符串的 JS 表示。

-   它是“抽象语法树”、“虚拟节点”等等的开山鼻祖。

**模板字符串：**

<img :src="$withBase('/images/bestshi.com_2021-03-19_00-51-51.png')">

**tokens：**

<img :src="$withBase('/images/bestshi.com_2021-03-19_00-53-30.png')">

:::

## 1、正则表达式实现简单模板填充

```html
<body>
    <div id="container"></div>
    <script>
        let templateStr = "<h1>我买了一个{{thing}}, 好{{mood}}啊!</h1>";

        let data = {
            thing: "华为手机",
            mood: "开心",
        };

        function render(template, data) {
            return template.replace(/\{\{(\w+)\}\}/g, (findStr, $1) => {
                return data[$1];
            });
        }

        document.getElementById("container").innerHTML = render(
            templateStr,
            data
        );
    </script>
</body>
```

<img :src="$withBase('/images/bestshi.com_2021-03-18_23-53-08.png')" >

## 2、开发环境配置

::: info 环境版本

-   node ==v14.13.1==
-   npm ==v6.14.11==

:::

**目录结构**

<img :src="$withBase('/images/bestshi.com_2021-03-19_01-42-57.png')">

### 2.1、安装依赖

```shell
npm install -D webpack webpack-cli webpack-dev-server html-webpack-plugin
```

> "webpack": "^5.26.3",
>
> "webpack-cli": "^4.5.0",
>
> "webpack-dev-server": "^3.11.2"
>
> "html-webpack-plugin": "^5.3.1",

### 2.2、配置 webpack.config.js 文件

```js
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
```

### 2.3、编辑 package.json 文件

```json
...略...
 "scripts": {
        "start": "webpack serve"
    },
...略...
```
