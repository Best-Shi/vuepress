<template>
    <h1>ref 获取元素</h1>
    <input type="text" />
    <hr />
    <input type="text" ref="inputRef" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
    name: "App",
    setup() {
        const inputRef = ref<HTMLElement | null>(null);

        onMounted(() => {
            inputRef.value && inputRef.value.focus();
        });
        return {
            inputRef,
        };
    },
});
</script>
