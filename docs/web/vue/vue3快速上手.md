---
icon: vue
author: Best Shi
time: 2021-3-31
tag:
    - Vue
    - Vue3
    - 前端
    - JavaScript
category: vue
---

# Vue3 快速上手

## 认识 Vue3

### 1、了解相关信息

-   Vue.js 3.0 "One Piece" 正式版在今年 9 月份发布
-   2 年多开发, 100+位贡献者, 2600+次提交, 600+次 PR
-   Vue3 支持 vue2 的大多数特性
-   更好的支持 Typescript

### 2、性能提升:

-   打包大小减少 41%
-   初次渲染快 55%, 更新渲染快 133%
-   内存减少 54%
-   使用 Proxy 代替 defineProperty 实现数据响应式
-   重写虚拟 DOM 的实现和 Tree-Shaking

### 3、新增特性

-   Composition (组合) API

-   setup
    -   ref 和 reactive
    -   computed 和 watch
    -   新的生命周期函数
    -   provide 与 inject
    -   ...
-   新组件

    -   Fragment - 文档碎片
    -   Teleport - 瞬移组件的位置
    -   Suspense - 异步加载组件的 loading 界面

-   其它 API 更新

    -   全局 API 的修改
    -   将原来的全局 API 转移到应用对象
    -   模板语法变化

## 创建 vue3 项目

### 1、使用 vue-cli 创建

[文档地址](https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create)

```shell
## 安装或者升级
npm install -g @vue/cli
## 保证 vue cli 版本在 4.5.0 以上
vue --version
## 创建项目
vue create my-project
```

**然后的步骤**

-   Please pick a preset - 选择 Manually select features
-   Check the features needed for your project - 选择上 TypeScript ，特别注意点空格是选择，点回车是下一步
-   Choose a version of Vue.js that you want to start the project with - 选择 3.x - (Preview)
-   Use class-style component syntax - 直接回车
-   Use Babel alongside TypeScript - 直接回车
-   Pick a linter / formatter config - 直接回车
-   Use history mode for router? - 直接回车
-   Pick a linter / formatter config - 直接回车
-   Pick additional lint features - 直接回车
-   Where do you prefer placing config for Babel, ESLint, etc.? - 直接回车
-   Save this as a preset for future projects? - 直接回车

<img :src="$withBase('/images/bestshi.com_2021-03-31_23-22-56.jpg')">

### 2、使用 vite 创建

-   [文档地址](https://v3.cn.vuejs.org/guide/installation.html)

-   vite 是一个由原生 ESM 驱动的 Web 开发构建工具。在开发环境下基于浏览器原生 ES imports 开发，

-   它做到了**_本地快速开发启动_**, 在生产环境下基于 Rollup 打包。

    -   快速的冷启动，不需要等待打包操作；
    -   即时的热模块更新，替换性能和模块数量的解耦让更新飞起；
    -   真正的按需编译，不再等待整个应用编译完成，这是一个巨大的改变。

```shell
npm init vite-app <project-name>
cd <project-name>
npm install
npm run dev
```

<img :src="$withBase('/images/bestshi.com_2021-03-31_23-22-18.jpg')">

## Composition API(常用部分)

[文档地址](https://composition-api.vuejs.org/zh/api.html)

### 1、setup

-   新的 option, 所有的组合 API 函数都在此使用, 只在初始化时执行一次
-   函数如果返回对象, 对象中的属性或方法, 模板中可以直接使用

### 2、ref

-   作用: 定义一个数据的响应式
-   语法: const xxx = ref(initValue):
    -   创建一个包含响应式数据的引用(reference)对象
    -   js 中操作数据: xxx.value
    -   模板中操作数据: 不需要.value
-   一般用来定义一个基本类型的响应式数据

**vue3 实现点击按钮更新数据：**

```vue
<template>
    <h2>setup与ref使用</h2>
    <h3>{{ count }}</h3>
    <button @click="update">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "App",
    setup() {
        let count = ref(1);

        function update() {
            count.value++;
        }

        return {
            count,
            update,
        };
    },
});
</script>
```

**vue2 实现点击按钮更新数据：**

```vue
<template>
    <h2>setup与ref使用</h2>
    <h3>{{ count }}</h3>
    <button @click="update">更新数据</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "App",
    data() {
        return {
            count: 1,
        };
    },
    methods: {
        update() {
            this.count++;
        },
    },
});
</script>
```

### 3、reactive

-   作用: 定义多个数据的响应式
-   const proxy = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象
-   响应式转换是“深层的”：会影响对象内部所有嵌套的属性
-   内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的

```vue
<template>
    <h2>reactive基本使用</h2>
    <h3>姓名: {{ user.name }}</h3>
    <h3>年龄: {{ user.age }}</h3>
    <h3>老婆: {{ user.wife.name }}</h3>
    <h3>车: {{ user.car.join("、") }}</h3>
    <button @click="update">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
    name: "App",
    setup() {
        let obj = {
            name: "小明",
            age: 20,
            car: ["奔驰", "奥迪"],
            wife: {
                name: "小红",
                age: 18,
            },
        };
        let user = reactive(obj);
        const update = () => {
            user.age = 25;
            user.wife.age = 23;
            user.car.push("玛莎拉蒂", "保时捷");
        };
        return {
            user,
            update,
        };
    },
});
</script>
```

<img :src="$withBase('/images/bestshi.com_2021-04-01_00-04-00.jpg')">
