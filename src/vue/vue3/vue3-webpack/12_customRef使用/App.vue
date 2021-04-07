<template>
    <h1>customRef使用</h1>
    <input type="text" v-model="keyword" />
    <hr />
    <p>{{ keyword }}</p>
</template>

<script lang="ts">
import { customRef, defineComponent } from "vue";
import { set } from "vue/types/umd";

function useDebounce<T>(value: T, delay = 200) {
    let timeOutId: number;
    return customRef((track, trigger) => {
        return {
            get() {
                track();
                return value;
            },
            set(newVal: T) {
                clearTimeout(timeOutId);
                setTimeout(() => {
                    value = newVal;
                    trigger();
                }, delay);
            },
        };
    });
}

export default defineComponent({
    name: "App",
    setup() {
        const keyword = useDebounce("", 2000);
        return {
            keyword,
        };
    },
});
</script>
