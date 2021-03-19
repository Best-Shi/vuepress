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

## 1、snabbdom 库学习

::: tip

Snabbdom 由一个非常简单，高性能和可扩展的内核组成，仅约 200 SLOC。 它提供了具有丰富功能的模块化体系结构，可通过自定义模块进行扩展。 为了使核心保持简单，所有非必要功能都委托给模块

:::

### 1.1、snabbdom 库安装

```shell
npm install -D snabbdom
```

### 1.2、snabbdom 测试环境搭建

#### 1.2.1、安装依赖

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

#### 1.2.2、配置 webpack.config.js 文件

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

#### 1.2.3、运行测试案例

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
