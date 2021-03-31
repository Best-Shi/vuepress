<template>
    <h2>reactive基本使用</h2>
    <h3>姓名: {{ user.name }}</h3>
    <h3>年龄: {{ user.age }}</h3>
    <h3>老婆: {{ user.wife.name }}</h3>
    <h3>车: {{ user.car.join("、") }}</h3>
    <button @click="update">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
    name: "App",
    setup() {
        let obj = {
            name: "小明",
            age: 20,
            car: ["奔驰", "奥迪"],
            wife: {
                name: "小红",
                age: 18,
            },
        };
        let user = reactive(obj);
        const update = () => {
            user.age = 25;
            user.wife.age = 23;
            user.car.push("玛莎拉蒂", "保时捷");
        };
        return {
            user,
            update,
        };
    },
});
</script>
