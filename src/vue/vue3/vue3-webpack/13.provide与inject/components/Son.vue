<template>
    <div>
        <h3>子级组件</h3>
        <hr />
        <Grandson></Grandson>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Grandson from "./Grandson.vue";

export default defineComponent({
    name: "Son",
    components: {
        Grandson,
    },
    setup() {
        return {};
    },
});
</script>
