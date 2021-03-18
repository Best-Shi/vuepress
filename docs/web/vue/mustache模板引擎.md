---
icon: vue
author: Best Shi
time: 2021-3-18
tag:
    - Vue
    - 前端
    - 源码
    - JavaScript
    - TypeScript
category: vue
---

# mustache 模板引擎

::: tip

模板引擎就是将数据变为视图最优雅的解决方案。
mustache.js 是一个简单强大的 JavaScript 模板引擎,使用它可以简化在 js 代码中的 html 编写。

:::

## 历史上曾经出现的数据变为视图的

### 纯 DOM 法

> 非常笨拙，没有实战价值

```html js
<body>
    <ul id="list"></ul>
    <script>
        let arr = [
            { name: "小明", age: 12, sex: "男" },
            { name: "小红", age: 11, sex: "女" },
            { name: "小强", age: 13, sex: "男" },
        ];

        let list = document.getElementById("list");

        for (let i = 0; i < arr.length; i++) {
            let li = document.createElement("li");
            let hdDiv = document.createElement("div");
            hdDiv.className = "hd";
            hdDiv.innerText = arr[i].name + "的基本信息";

            let bdDiv = document.createElement("div");
            bdDiv.className = "bd";

            let p1 = document.createElement("p");
            p1.innerText = "姓名：" + arr[i].name;
            bdDiv.appendChild(p1);
            let p2 = document.createElement("p");
            p2.innerText = "年龄：" + arr[i].age;
            bdDiv.appendChild(p2);
            let p3 = document.createElement("p");
            p3.innerText = "性别：" + arr[i].sex;
            bdDiv.appendChild(p3);

            li.appendChild(hdDiv);
            li.appendChild(bdDiv);
            list.appendChild(li);
        }
    </script>
</body>
```

<img :src="$withBase('/images/bestshi.com_2021-03-18_22-52-46.png')" alt="DOM法渲染列表">

### 数组 join 法

> 曾几何时非常流行，是曾经的前端必会知识

### ES6 反引号法：

> ES6 中新增的`${a}`语法糖

### 模板引擎

> 解决数据变为试图的最优雅方法

## mustache 基本使用
