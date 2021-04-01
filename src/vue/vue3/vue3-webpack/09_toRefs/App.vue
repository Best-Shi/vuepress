<template>
    <h2>toRefs</h2>
    <h3>foo: {{ foo }}</h3>
    <h3>bar: {{ bar }}</h3>
    <h3>foo2: {{ foo2 }}</h3>
    <h3>bar2: {{ bar2 }}</h3>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
    setup() {
        const state = reactive({
            foo: "a",
            bar: "b",
        });

        const stateAsRefs = toRefs(state);

        setTimeout(() => {
            state.foo += "++";
            state.bar += "++";
        }, 2000);

        const { foo2, bar2 } = useReatureX();

        return {
            // ...state,
            ...stateAsRefs,
            foo2,
            bar2,
        };
    },
});
function useReatureX() {
    const state = reactive({
        foo2: "a",
        bar2: "b",
    });

    setTimeout(() => {
        state.foo2 += "++";
        state.bar2 += "++";
    }, 2000);

    return toRefs(state);
}
</script>
