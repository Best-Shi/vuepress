<template>
    <h1>provide 与 inject</h1>
    <div>
        <h3>父级组件</h3>
        <input type="text" v-model="keyword" />
        <hr />
        <p>:{{ keyword }}</p>
        <Son></Son>
    </div>
</template>

<script lang="ts">
import { defineComponent, provide, ref } from "vue";
import Son from "./components/Son.vue";

export default defineComponent({
    name: "App",
    components: {
        Son,
    },
    setup() {
        const keyword = ref();
        provide("keyword", keyword);
        return {
            keyword,
        };
    },
});
</script>

<style>
div {
    border: 1px solid #008c8c;
    padding: 20px;
}
</style>
