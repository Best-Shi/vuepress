<template>
    <h1>reactive与ref细节</h1>
    <h3>ref基本数据类型：{{ m1 }}</h3>
    <h3>ref引用数据类型：{{ m2.name }}</h3>
    <h3>reactive引用数据类型：{{ m4.name }}</h3>
    <button @click="update">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
    name: "App",
    setup() {
        let m1 = ref("Hello World");
        let m2 = ref({
            name: "小明",
            wife: {
                name: "小红",
            },
        });
        // let m3 = reactive('reactive')
        let m4 = reactive({
            name: "小白",
            wife: {
                name: "小米",
            },
        });
        function update() {
            console.log(m1);
            console.log(m2);
            console.log(m4);
            console.log(m2.value.wife);

            m1.value += "==";
            m2.value.name += "==";
            m4.name += "++";
        }
        return {
            m1,
            m2,
            m4,
            update,
        };
    },
});
</script>
