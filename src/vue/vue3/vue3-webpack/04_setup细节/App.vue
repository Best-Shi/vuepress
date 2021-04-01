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
