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

::: tip 源码地址

[源码地址](https://gitee.com/bestshi/blog/tree/master/src/vue/mustache)

:::

::: info mustache 原理

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

## 3、源码实现

### 3.1、模板字符串转为平扁 tokens

::: info Scanner 类说明

创建 Scanner 类，实现对模板字符串的扫描，并转换成平扁的 tokens

扫描类，用于移动指针记录指针位置，并返回指针经过的字符串。

**函数：**

scan：处理走过的内容，没返回值。

scanUtil：让指针进行扫描，直到遇见指定内容结束，并且放回之前路过的字符。

eos：判断指针是否到头，返回布尔值。

**Scanner 类原理：**
<img :src="$withBase('/images/bestshi.com_2021-03-19_10-45-25.png')">

:::

```js
export default class Scanner {
    constructor(templageStr) {
        this.templageStr = templageStr;
        // 指针
        this.pos = 0;
        // 尾巴
        this.tail = templageStr;
    }

    scan(tag) {
        if (this.tail.indexOf(tag === 0)) {
            // tag 有多长就让指针后移多少位
            this.pos += tag.length;
            // 改变尾巴
            this.tail = this.templageStr.substring(this.pos);
        }
    }

    // 让指针进行扫描，直到遇见指定内容结束，并且放回之前路过的字符。
    scanUtil(stopTag) {
        // 记录方法执行前的pos值
        const posStart = this.pos;

        // 当尾巴不是stopTag的时候，说明还没扫描到stopTag
        while (this.eos() && this.tail.indexOf(stopTag) !== 0) {
            // 移动指针
            this.pos++;
            // 改变尾巴
            this.tail = this.templageStr.substring(this.pos);
        }

        // 返回指针经过的字符串
        return this.templageStr.substring(posStart, this.pos);
    }

    // 判断指针是否到头，返回布尔值  end of string
    eos() {
        return this.pos <= this.templageStr.length;
    }
}
```

### 3.2、将模板字符串转为 tokens 数组

::: info 实现效果

<img :src="$withBase('/images/bestshi.com_2021-03-19_16-39-47.png')">

**实现原理：**

-   模板字符串通过 ==templateToTokens== 函数转换成一个平扁的 tokens 数组；
-   然后再把平扁的 tokens 数组交给 ==nestTokens== 函数， ==nestToken== 函数根据模板字符串的结构把平扁的 tokens 数组转换成跟模板字符串一样结构的 tokens 数组。

**实现分析：**

使用栈数据结构 ==先进后出== 的特性，对标记为 ==#== 和 ==/== 的内容进行处理，然后根据 JavaScript 引用类型数据指向特性，不断改变指向存储 tokens，实现 tokens 嵌套。

:::

**templateToTokens 函数：**

```js
/**
 * 将模板字符串变成tokens数组，返回tokens数组
 */

import Scanner from "./Scanner.js";
import nestTokens from "./nestTokens.js";

export default function templateToTokens(templateStr) {
    let tokens = [];

    let scanner = new Scanner(templateStr);
    let words;

    while (scanner.eos()) {
        // 收集开始标记前的字符
        words = scanner.scanUtil("{{");
        if (words !== "") {
            // 去除标签以外的空格
            let isTrim = false;
            let _words = "";
            for (let i = 0; i < words.length; i++) {
                // 判断是否在标签里
                if (words[i] === "<") {
                    isTrim = true;
                } else if (words[i] === ">") {
                    isTrim = false;
                }
                // 如果不是空格，拼接上
                if (!/\s/.test(words[i])) {
                    _words += words[i];
                } else {
                    // 如果是空格，且在标签内才拼接上
                    if (isTrim) {
                        _words += " ";
                    }
                }
            }
            // 去掉空格后的符存到tokens中
            tokens.push(["text", _words]);
        }
        // 跳过双大括号
        scanner.scan("{{");

        // 收集{{}}中间的东西
        words = scanner.scanUtil("}}");
        if (words !== "") {
            if (words[0] === "#") {
                tokens.push(["#", words.substring(1)]);
            } else if (words[0] === "/") {
                tokens.push(["/", words.substring(1)]);
            } else {
                tokens.push(["name", words]);
            }
        }
        scanner.scan("}}");
    }

    // 返回折叠的tokens
    return nestTokens(tokens);
}
```

**nestToken 函数：**

```js
/**
 * 将扁平的tokens数组按模板引擎转换成嵌套数组
 */
export default function nestTokens(tokens) {
    let nestedTokens = [];
    let sections = [];
    let collector = nestedTokens;

    let token;
    for (let i = 0; i < tokens.length; i++) {
        token = tokens[i];

        switch (token[0]) {
            case "#":
                // 收集器中放入token
                collector.push(token);
                // 入栈
                sections.push(token);
                // 改变收集器
                collector = token[2] = [];
                break;
            case "/":
                // 出栈
                sections.pop();
                // 改边收集器为栈结构队列
                collector =
                    sections.length > 0
                        ? sections[sections.length - 1][2]
                        : nestedTokens;
                break;
            default:
                collector.push(token);
        }
    }
    return nestedTokens;
}
```

### 3.3、将 tokens 转换成 DOM 字符串

::: info 实现原理

-   ==renderTemplate== 函数通过遍历 tokens 数组，判断类型，并拼接到 DOM 字符串中；
-   如果是`text`就直接拼接，如果是`name`就从数据中获取对应的值进行拼接，如果是`#`则把 token 交给 ==parseArray== 函数进行处理后再进行拼接。
-   因为 ==renderTemplate== 函数已经实现了 DOM 字符串拼接，所以 ==parseArray== 函数中就循环需要处理的数据，并调用 ==renderTemplate== 函数进行递归拼接。
-   当`name`的值为`.`或者`a.b.c`的时候 JavaScript 无法识别，会导致报错，所以创建 ==lookup== 函数进行处理。

:::

**renderTemplate 函数与 parseArray 函数：**

```js
/**
 * 函数功能：让tokens数组转换为dom字符串
 */

import lookup from "./lookup.js";

export default function renderTemplate(tokens, data) {
    let resultStr = "";
    // 遍历tokens
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];
        // 判断类型
        if (token[0] === "text") {
            resultStr += token[1];
        } else if (token[0] === "name") {
            resultStr += lookup(data, token[1]);
        } else if (token[0] === "#") {
            resultStr += parseArray(token, data);
        }
    }
    return resultStr;
}

/**
 * 处理数组，结合renderTemplate实现递归
 */
function parseArray(token, data) {
    // 得到整体数据中要使用的部分
    let val = lookup(data, token[1]);
    let resultStr = "";
    // 遍历val数组
    for (let i = 0; i < val.length; i++) {
        resultStr += renderTemplate(token[2], {
            // 相当于val[i]本身
            ...val[i],
            // 补充一个 . 属性
            ".": val[i],
        });
    }
    return resultStr;
}
```

**lookup 函数：**

```js
/**
 * 函数功能: 可以再obj对象中，寻找连续点符合的keyName属性
 */

export default function lookup(obj, keyName) {
    if (keyName.indexOf(".") > 0 && keyName !== ".") {
        let keys = keyName.split(".");
        let temp = obj;

        for (let i = 0; i < keys.length; i++) {
            temp = temp[keys[i]];
        }
        return temp;
    }
    return obj[keyName];
}
```

## 4、功能测试

### 4.1、数组嵌套测试

```js
import templateToTokens from "./modules/templateToTokens.js";
import renderTemplate from "./modules/renderTemplate.js";

let container = document.getElementById("container");

let templateStr = `
          <ul>
            {{#arr}}
            <li class='item'>
                {{name}} 的爱好是:
                <ol>
                    {{#hobbies}}
                    <li>{{.}}</li>
                    {{/hobbies}}
                </ol>
            </li>
            {{/arr}}
        </ul>
        `;

let data = {
    arr: [
        { name: "小明", age: 12, hobbies: ["抽烟", "喝酒", "烫头"] },
        { name: "小红", age: 11, hobbies: ["看书", "游泳"] },
        { name: "小强", age: 13, hobbies: ["王者荣耀", "吃鸡"] },
    ],
};

function BS_template_render(templateStr, data) {
    let tokens = templateToTokens(templateStr);
    let domSrt = renderTemplate(tokens, data);
    return domSrt;
}

let domSrt = BS_template_render(templateStr, data);

container.innerHTML = domSrt;
```

<img :src="$withBase('/images/bestshi.com_2021-03-19_18-25-55.png')">

### 4.2、简单渲染测试

```js
import templateToTokens from "./modules/templateToTokens.js";
import renderTemplate from "./modules/renderTemplate.js";

let container = document.getElementById("container");

let templateStr = "<h1>我买了一个{{thing}}，花了{{a.b}}元，好{{mood}}啊!</h1>";

let data = {
    thing: "华为手机",
    mood: "开心",
    a: {
        b: 12,
    },
};

function BS_template_render(templateStr, data) {
    let tokens = templateToTokens(templateStr);
    let domSrt = renderTemplate(tokens, data);
    return domSrt;
}

let domSrt = BS_template_render(templateStr, data);

container.innerHTML = domSrt;
```

<img :src="$withBase('/images/bestshi.com_2021-03-19_18-27-42.png')">
