<template>
    <div>
        <h3>子孙级组件</h3>
        <p>:{{ keyword }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";

export default defineComponent({
    name: "Grandson",
    setup() {
        const keyword = inject("keyword");
        return {
            keyword,
        };
    },
});
</script>
