<template>
    <h1>shallowReactive 与 shallowRef</h1>
    <h3>m1: {{ m1 }}</h3>
    <h3>m2: {{ m2 }}</h3>
    <h3>m3: {{ m3 }}</h3>
    <h3>m4: {{ m4 }}</h3>

    <hr />
    <button @click="update">更新数据</button>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
    ref,
    shallowReactive,
    shallowRef,
    toRef,
    isRef,
} from "vue";

export default defineComponent({
    name: "App",
    setup() {
        const m1 = ref({
            name: "Best Shi",
            age: 20,
            wife: {
                name: "Small Shell",
                age: 18,
            },
        });
        const m2 = reactive({
            name: "Best Shi",
            age: 20,
            wife: {
                name: "Small Shell",
                age: 18,
            },
        });

        const m3 = shallowReactive({
            name: "Best Shi",
            age: 20,
            wife: {
                name: "Small Shell",
                age: 18,
            },
        });
        const m4 = shallowRef({
            name: "Best Shi",
            age: 20,
            wife: {
                name: "Small Shell",
                age: 18,
            },
        });

        const update = () => {
            console.log(m1);
            console.log(m2);

            console.log(m3.wife);
            console.log(m4);

            m1.value.wife.name += "==";
            m2.wife.name += "**";
            m3.wife.name += "---";
            m4.value.wife.name += "》》》";
        };
        return {
            m1,
            m2,
            m3,
            m4,
            update,
        };
    },
});
</script>
