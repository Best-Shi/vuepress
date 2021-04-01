<template>
    <h3>Child</h3>
    <button @click="update">更新数据</button>
    <h3>msg: {{ msg }}</h3>
</template>

<script lang="ts">
import {
    defineComponent,
    onBeforeMount,
    onBeforeUnmount,
    onBeforeUpdate,
    onMounted,
    onUnmounted,
    onUpdated,
    ref,
} from "vue";

export default defineComponent({
    name: "Child",
    // Vue2.x中的生命周期
    beforeCreate() {
        console.log("Vue2.x中的 beforeCreate ...");
    },
    created() {
        console.log("Vue2.x中的 created ...");
    },
    beforeMount() {
        console.log("Vue2.x中的 beforeMount ...");
    },
    mounted() {
        console.log("Vue2.x中的 mounted ...");
    },
    beforeUpdate() {
        console.log("Vue2.x中的 beforeUpdate ...");
    },
    updated() {
        console.log("Vue2.x中的 updated ...");
    },
    beforeUnmount() {
        console.log("Vue2.x中的 beforeUnmount ...");
    },
    unmounted() {
        console.log("Vue2.x中的 unmounted ...");
    },
    setup() {
        // Vue3.x中的生命周期
        console.log("Vue3.x中的 setup ...");
        onBeforeMount(() => console.log("Vue3.x中的 onBeforeMount ..."));
        onMounted(() => console.log("Vue3.x中的 onMounted ..."));
        onBeforeUpdate(() => console.log("Vue3.x中的 onBeforeUpdate ..."));
        onUpdated(() => console.log("Vue3.x中的 onUpdated ..."));
        onBeforeUnmount(() => console.log("Vue3.x中的 onBeforeUnmount ..."));
        onUnmounted(() => console.log("Vue3.x中的 onUnmounted ..."));

        let msg = ref("数据更新了");
        function update() {
            msg.value += "+++";
        }
        return {
            msg,
            update,
        };
    },
});
</script>
