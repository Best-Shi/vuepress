<template>
    <h2>setup与ref使用</h2>
    <h3>{{ count }}</h3>
    <button @click="update">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "App",

    // vue2方式实现点击按钮更新数据
    // data() {
    //     return {
    //         count: 1,
    //     };
    // },
    // methods: {
    //     update() {
    //         this.count++;
    //     },
    // },

    // vue3实现点击按钮更新数据
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
