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
prev: /web/vue/vue3/vue3快速上手
next: /web/vue/vue3/Composition API
---

# Composition API

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

### 4、Vue2 与 Vue3 的响应式比较

#### vue2 的响应式

-   核心:

    -   对象: 通过 defineProperty 对对象的已有属性值的读取和修改进行劫持(监视/拦截)
    -   数组: 通过重写数组更新数组一系列更新元素的方法来实现元素修改的劫持

-   问题
    -   对象直接新添加的属性或删除已有属性, 界面不会自动更新
    -   直接通过下标替换元素或更新 length, 界面不会自动更新 arr[1] = {}

#### Vue3 的响应式

-   核心:
    -   通过 Proxy(代理): 拦截对 data 任意属性的任意(13 种)操作, 包括属性值的读写, 属性的添加, 属性的删除等...
    -   通过 Reflect(反射): 动态对被代理对象的相应属性进行特定的操作
    -   文档:
        -   https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy
        -   https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect
