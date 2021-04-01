<template>
    <h1>自定义hook函数</h1>
    <h3>X坐标：{{ x }}</h3>
    <h3>Y坐标：{{ y }}</h3>
    <hr />
    <h3>作者信息</h3>
    <h4 v-if="loading1">LOADING......</h4>
    <div v-else>
        <p>姓名：{{ result1.name }}</p>
        <p>性别：{{ result1.gender }}</p>
        <p>年龄：{{ result1.age }}</p>
    </div>
    <hr />
    <h3>书本名称</h3>
    <h4 v-if="loading2">LOADING......</h4>
    <div v-else>
        <ul v-for="(item, index) in result2" :key="index">
            <li>书名：{{ item.name }}</li>
            <li>价格：{{ item.price }}</li>
            <li>分类：{{ item.category }}</li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import useMousePosition from "./hooks/useMousePosition";
import useRequest from "./hooks/useRequest";

interface User {
    name: string;
    age: number;
    gender: string;
}

interface Book {
    name: string;
    price: number;
    ctaegory: string;
}

export default defineComponent({
    name: "App",
    setup() {
        const { x, y } = useMousePosition();
        const { loading: loading1, result: result1 } = useRequest<User>(
            "/data/user.json"
        );
        const { loading: loading2, result: result2 } = useRequest<Book[]>(
            "/data/books.json"
        );

        watch(result2, () => {
            if (result2.value) {
                console.log(result2.value.length);
            }
        });

        return {
            x,
            y,
            result1,
            loading1,
            result2,
            loading2,
        };
    },
});
</script>
