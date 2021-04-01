<template>
    <h1>生命周期</h1>
    <h3>App</h3>
    <button @click="isShow = !isShow">显示隐藏</button>
    <hr />
    <Child v-if="isShow" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Child from "./components/Child.vue";

export default defineComponent({
    name: "App",
    components: { Child },
    setup() {
        let isShow = ref(true);
        return {
            isShow,
        };
    },
});
</script>
