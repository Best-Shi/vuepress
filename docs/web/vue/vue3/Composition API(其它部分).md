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
prev: /web/vue/vue3/Composition API(常用部分)
next: /web/vue/vue3/手写组合API
---

# Composition API(其它部分)

## Composition API(其它部分)

### 1、shallowReactive 与 shallowRef

-   shallowReactive : 只处理了对象内最外层属性的响应式(也就是浅响应式)

-   shallowRef: 只处理了 value 的响应式, 不进行对象的 reactive 处理

-   什么时候用浅响应式呢?

    -   一般情况下使用 ref 和 reactive 即可
    -   如果有一个对象数据, 结构比较深, 但变化时只是外层属性变化 ===> shallowReactive
    -   如果有一个对象数据, 后面会产生新的对象来替换 ===> shallowRef

::: details 示例代码

```vue
<template>
    <h1>shallowReactive 与 shallowRef</h1>
    <h3>m1: {{ m1 }}</h3>
    <h3>m2: {{ m2 }}</h3>
    <h3>m3: {{ m3 }}</h3>
    <h3>m4: {{ m4 }}</h3>

    <hr />
    <button @click="update">更新数据</button>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
    ref,
    shallowReactive,
    shallowRef,
    toRef,
    isRef,
} from "vue";

export default defineComponent({
    name: "App",
    setup() {
        const m1 = ref({
            name: "Best Shi",
            age: 20,
            wife: {
                name: "Small Shell",
                age: 18,
            },
        });
        const m2 = reactive({
            name: "Best Shi",
            age: 20,
            wife: {
                name: "Small Shell",
                age: 18,
            },
        });

        const m3 = shallowReactive({
            name: "Best Shi",
            age: 20,
            wife: {
                name: "Small Shell",
                age: 18,
            },
        });
        const m4 = shallowRef({
            name: "Best Shi",
            age: 20,
            wife: {
                name: "Small Shell",
                age: 18,
            },
        });

        const update = () => {
            console.log(m1);
            console.log(m2);

            console.log(m3.wife);
            console.log(m4);

            m1.value.wife.name += "==";
            m2.wife.name += "**";
            m3.wife.name += "---";
            m4.value.wife.name += "》》》";
        };
        return {
            m1,
            m2,
            m3,
            m4,
            update,
        };
    },
});
</script>
```

:::

**注意:**

<img :src="$withBase('/images/bestshi.com_2021-04-07_14-46-55.jpg')">
