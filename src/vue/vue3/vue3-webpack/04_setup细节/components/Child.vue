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
