<template>
    <h1>计算属性和监视</h1>
    <fieldset>
        <legend>姓名操作</legend>
        姓氏:
        <input type="text" placeholder="请输入姓氏" v-model="user.firstName" />
        <hr />
        名字:
        <input type="text" placeholder="请输入名字" v-model="user.lastName" />
    </fieldset>
    <br />
    <fieldset>
        <legend>计算属性和监视的演示</legend>
        姓名: <input type="text" placeholder="显示姓名" v-model="fullName1" />
        <hr />
        姓名: <input type="text" placeholder="显示姓名" v-model="fullName2" />
        <hr />
        姓名: <input type="text" placeholder="显示姓名" v-model="fullName3" />
    </fieldset>
</template>

<script lang="ts">
import {
    defineComponent,
    computed,
    reactive,
    watch,
    ref,
    watchEffect,
} from "vue";

export default defineComponent({
    name: "App",
    setup() {
        let user = reactive({
            firstName: "东方",
            lastName: "不败",
        });

        // 显示第一个名字
        // 返回一个ref类型的对象
        let fullName1 = computed(() => {
            return user.firstName + "_" + user.lastName;
        });

        // 显示第二个名字
        let fullName2 = computed({
            get() {
                return user.firstName + "_" + user.lastName;
            },
            set(val: string) {
                let names = val.split("_");
                user.firstName = names[0];
                user.lastName = names[1];
            },
        });

        // 显示第三名字 watch实现
        // let fullName3 = ref("");
        // watch(
        //     user,
        //     ({ firstName, lastName }) => {
        //         fullName3.value = user.firstName + "_" + user.lastName;
        //     },
        //     { immediate: true, deep: true }
        // );
        // // immediate 默认会执行一次 watch， deep 深度监听
        // watch(fullName3, (val) => {
        //     let names = val.split("_");
        //     user.firstName = names[0];
        //     user.lastName = names[1];
        // });

        // 显示第三名字 watchEffect实现
        let fullName3 = ref("");
        watch(
            user,
            ({ firstName, lastName }) => {
                fullName3.value = user.firstName + "_" + user.lastName;
            },
            { immediate: true, deep: true }
        );
        watchEffect(() => {
            let names = fullName3.value.split("_");
            user.firstName = names[0];
            user.lastName = names[1];
        });

        watch([() => user.firstName, () => user.lastName, fullName3], () => {
            // 这里的代码就没有执行,fullName3是响应式的数据,但是,user.firstName,user.lastName不是响应式的数据
            console.log("====");
        });

        return {
            user,
            fullName1,
            fullName2,
            fullName3,
        };
    },
});
</script>
