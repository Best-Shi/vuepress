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

::: tip
[vue2 数据响应式原理](http://bestshi.gitee.io/blog/web/vue/reactive/%E5%8F%8C%E5%90%91%E6%95%B0%E6%8D%AE%E7%BB%91%E5%AE%9A/)
:::

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

```js
// 目标对象
let user = {
    name: "小憨憨",
    age: 19,
    wife: {
        name: "你猜",
        age: 20,
    },
};

// 把目标对象变成代理对象
let proxyUser = new Proxy(user, {
    // 获取目标对象上的属性
    get(target, prop) {
        console.log("get方法调用了");
        return Reflect.get(target, prop);
    },
    // 修改或添加目标对象上的属性
    set(target, prop, val) {
        console.log("set方法调用了");
        return Reflect.set(target, prop, val);
    },
    // 删除某个目标对象的属性
    defineProperty(target, prop) {
        console.log("delete方法被调用了");
        return Reflect.defineProperty(target, prop);
    },
});

// 通过代理对象获取目标对象中的某个属性值
console.log(proxyUser.name);

proxyUser.name = "陆憨憨";
console.log(user);

proxyUser.gender = "男";
console.log(user);

delete proxyUser.age;
console.log(user);
```

<img :src="$withBase('/images/bestshi.com_2021-04-01_01-36-43.jpg')">

### 5、setup 细节

#### setup 执行的时机

-   在 beforeCreate 之前执行(一次), 此时组件对象还没有创建
-   this 是 undefined, 不能通过 this 来访问 data/computed/methods/props
-   其实所有的 composition API 相关回调函数中也都不可以

```vue
// App.vue
<template>
    <h1>setup执行时机</h1>
    <h3>App父元素</h3>
    <h4>msg: {{ msg }}</h4>
    <hr />
    <Child :msg="msg"></Child>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Child from "./components/Child.vue";

export default defineComponent({
    name: "App",
    components: { Child },
    beforeCreate() {
        console.log("父组件中的beforeCreate");
    },
    setup() {
        console.log("父组件中的setup", `this是${this}`);

        let msg = ref("Hello World");

        return {
            msg,
        };
    },
});
</script>

// Child.vue
<template>
    <h3>Child子元素</h3>
    <h4>msg: {{ msg }}</h4>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Child",
    props: ["msg"],
    beforeCreate() {
        console.log("子组件中的beforeCreate");
    },
    setup() {
        console.log("子组件中的setup", `this是${this}`);
    },
});
</script>
```

<img :src="$withBase('/images/bestshi.com_2021-04-01_15-56-45.jpg')">

#### setup 的返回值

-   一般都返回一个对象: 为模板提供数据, 也就是模板中可以直接使用此对象中的所有属性/方法
-   返回对象中的属性会与 data 函数返回对象的属性合并成为组件对象的属性
-   返回对象中的方法会与 methods 中的方法合并成功组件对象的方法
-   如果有重名 setup 优先

```vue
<template>
    <h1>setup执行时机</h1>
    <h3>App父元素</h3>
    <h4>msg: {{ msg }}</h4>
    <hr />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "App",
    setup() {
        let msg = ref("setup中的msg");

        return {
            msg,
        };
    },
    data() {
        return {
            msg: "data中的msg",
        };
    },
});
</script>
```

<img :src="$withBase('/images/bestshi.com_2021-04-01_16-08-18.jpg')">

#### setup 的参数

-   setup(props, context) / setup(props, {attrs, slots, emit})
-   props: 包含 props 配置声明且传入了的所有属性的对象
-   attrs: 包含没有在 props 配置中声明的属性的对象, 相当于 this.\$attrs
-   slots: 包含所有传入的插槽内容的对象, 相当于 this.\$slots
-   emit: 用来分发自定义事件的函数, 相当于 this.\$emit

```vue
// App.vue
<template>
    <h1>setup参数</h1>
    <h3>App父元素</h3>
    <h4>msg: {{ msg }}</h4>
    <hr />
    <Child :msg="msg" abc="abc" @xxx="xxx"></Child>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Child from "./components/Child.vue";

export default defineComponent({
    name: "App",
    components: { Child },
    setup() {
        let msg = ref("setup中的msg");
        function xxx(txt: string) {
            msg.value += "++";
        }

        return {
            msg,
            xxx,
        };
    },
});
</script>

// Child.vue
<template>
    <h3>Child子元素</h3>
    <h4>msg: {{ msg }}</h4>
    <button @click="emitXxx">触发事件</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Child",
    props: ["msg"],
    setup(props, { attrs, slots, emit }) {
        console.log(props, attrs, slots, emit);

        function emitXxx() {
            emit("xxx", "++");
        }
        return {
            emitXxx,
        };
    },
});
</script>
```

<img :src="$withBase('/images/bestshi.com_2021-04-01_16-22-16.jpg')">

#### **注意:**

-   一般不要混合使用: methods 中可以访问 setup 提供的属性和方法, 但在 setup 方法中不能访问 data 和 methods
-   setup 不能是一个 async 函数: 因为返回值不再是 return 的对象, 而是 promise, 模板看不到 return 对象中的属性数据
