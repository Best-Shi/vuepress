---
icon: vue
author: Best Shi
time: 2021-3-18
tag:
    - Vue
    - 前端
    - 源码
    - JavaScript
    - diff
    - 虚拟DOM
category: vue
---

# 虚拟 DOM 与 diff 算法

**虚拟 DOM：**

-   用 JavaScript 对象描述 DOM 的层次结构。DOM 中的一切属性都在虚拟 DOM 中有对应的属性。

**diff 算法：**

-   diff 算法可以进行精细化比对，实现最小量更新。

-   diff 算法只发生在虚拟 DOM 上。

-   新虚拟 DOM 和老虚拟 DOM 进行 diff（精细化比较），算出应该如何最小量更新，最后反映到真正的 DO

## snabbdom 库安装

::: tip

Snabbdom 由一个非常简单，高性能和可扩展的内核组成，仅约 200 SLOC。 它提供了具有丰富功能的模块化体系结构，可通过自定义模块进行扩展。 为了使核心保持简单，所有非必要功能都委托给模块

:::

```shell
npm install -D snabbdom
```

## snabbdom 测试环境搭建

### 安装依赖

```shell
npm install -D webpack webpack-cli webpack-dev-server html-webpack-plugin
```

::: info 版本说明

-   "html-webpack-plugin": =="^5.3.1",==
-   "snabbdom": =="^2.1.0",==
-   "webpack": =="^5.26.3",==
-   "webpack-cli": =="^4.5.0",==
-   "webpack-dev-server": =="^3.11.2"==

:::

### 配置 webpack.config.js 文件

```js
const { resolve } = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: resolve(__dirname, "dist"),
        filename: "js/index.js",
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
    devServer: {
        contentBase: resolve(__dirname, "dist"),
        port: 8001,
        open: true,
    },
};
```

### 运行测试案例

```js
import { init } from "snabbdom/init";
import { classModule } from "snabbdom/modules/class";
import { propsModule } from "snabbdom/modules/props";
import { styleModule } from "snabbdom/modules/style";
import { eventListenersModule } from "snabbdom/modules/eventlisteners";
import { h } from "snabbdom/h"; // helper function for creating vnodes

const patch = init([
    // Init patch function with chosen modules
    classModule, // makes it easy to toggle classes
    propsModule, // for setting properties on DOM elements
    styleModule, // handles styling on elements with support for animations
    eventListenersModule, // attaches event listeners
]);

const container = document.getElementById("container");

const vnode = h("div#container.two.classes", { on: { click: () => {} } }, [
    h("span", { style: { fontWeight: "bold" } }, "This is bold"),
    " and this is just normal text",
    h("a", { props: { href: "/foo" } }, "I'll take you places!"),
]);
// Patch into empty DOM element – this modifies the DOM as a side effect
patch(container, vnode);

const newVnode = h("div#container.two.classes", { on: { click: () => {} } }, [
    h(
        "span",
        { style: { fontWeight: "normal", fontStyle: "italic" } },
        "This is now italic type"
    ),
    " and this is still just normal text",
    h("a", { props: { href: "/bar" } }, "I'll take you places!"),
]);
// Second `patch` invocation
patch(vnode, newVnode); // Snabbdom efficiently updates the old view to the new state
```

## 虚拟 DOM 与 h 函数学习

::: info h 函数

h 函数用来生成虚拟节点（vnode）。

**参数：**

-   sel：标签名称
-   props：标签属性
-   children：子节点

**返回值：**

-   children：表示子元素。
-   data：元素属性。
-   elm：表示是否上树。
-   key：元素唯一标识。
-   sel：表示选择器。
-   text：元素中的文字。

<img :src="$withBase('/images/bestshi.com_2021-03-20_01-09-52.png')">

:::

### 案例

```js
// 创建patch函数
const patch = init([
    classModule,
    propsModule,
    styleModule,
    eventListenersModule,
]);

// 创建虚拟节点
let myVnode = h("ul", [
    h("li", {}, "苹果"),
    h("li", { class: { active: true } }, "香蕉"),
]);

// 虚拟DOM上树
const container = document.getElementById("container");
patch(container, myVnode);
```

<img :src="$withBase('/images/bestshi.com_2021-03-20_01-13-52.png')">

### 手写低配版 h 函数

**vnode 函数：**

```js
// vnode就是把传入的5个参数组合成对象返回

export default function vnode(sel, data, children, text, elm) {
    return {
        sel,
        data,
        children,
        text,
        elm,
    };
}
```

**h 函数：**

```js
import vnode from "./vnode.js";

/**
 * 这个函数只实现3个参数功能，缺一不可
 * 调用形态必须为下面三种之一：
 *  形态① h('div', {}, '文字')
 *  形态② h('div', {}, [])
 *  形态③ h('div', {}, h())
 */

export default function h(sel, data, c) {
    // 检测参数个数
    if (arguments.length !== 3) throw new Error("h函数必须传入三个参数");

    // 检测参数c的类型

    if (typeof c === "string" || typeof c === "number") {
        // 说明是形态①
        return vnode(sel, data, undefined, c, undefined);
    } else if (Array.isArray(c)) {
        // 说明是形态②
        // 收集children
        let children = [];
        for (let i = 0; i < c.length; i++) {
            // 检测c[i]
            if (!(typeof c[i] === "object" && c[i].hasOwnProperty("sel")))
                throw new Error("传入的数组参数中有项不是h函数");
            children.push(c[i]);
        }
        return vnode(sel, data, children, undefined, undefined);
    } else if (typeof c === "object" && c.hasOwnProperty("sel")) {
        // 说明是形态③
        // 传入的c是唯一的children
        return vnode(sel, data, [c], undefined, undefined);
    } else {
        throw new Error("传入的第三个参数类型不对");
    }
}
```

**测试：**

```js
// 引入自己的h函数
import h from "./mySnabbdom/h.js";

import { init } from "snabbdom/init";
import { classModule } from "snabbdom/modules/class";
import { propsModule } from "snabbdom/modules/props";
import { styleModule } from "snabbdom/modules/style";
import { eventListenersModule } from "snabbdom/modules/eventlisteners";

// 创建patch函数
const patch = init([
    classModule,
    propsModule,
    styleModule,
    eventListenersModule,
]);

let myVnode1 = h("div", {}, [
    h("p", {}, "你好"),
    h("p", {}, "你好"),
    h("p", {}, h("span", {}, "hello")),
]);

console.log(myVnode1);

// 虚拟DOM上树
const container = document.getElementById("container");
patch(container, myVnode1);
```

<img :src="$withBase('/images/bestshi.com_2021-03-20_15-34-42.png')">
