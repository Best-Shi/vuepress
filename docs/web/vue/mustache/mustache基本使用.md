---
icon: vue
author: Best Shi
time: 2021-3-18
tag:
    - Vue
    - 前端
    - 源码
    - JavaScript
    - mustache
category: vue
---

# mustache 基本使用

::: tip

模板引擎就是将数据变为视图最优雅的解决方案。
mustache.js 是一个简单强大的 JavaScript 模板引擎,使用它可以简化在 js 代码中的 html 编写。

:::

## 1、简单渲染

```html
<body>
    <div id="container"></div>
    <script src="./js/mustache.js"></script>
    <script>
        let templateStr = "<h1>我买了一个{{thing}}, 好{{mood}}啊!</h1>";

        let data = {
            thing: "华为手机",
            mood: "开心",
        };

        let domStr = Mustache.render(templateStr, data);

        document.getElementById("container").innerHTML = domStr;
    </script>
</body>
```

<img :src="$withBase('/images/bestshi.com_2021-03-18_23-53-08.png')" >

## 2、布尔值

```html
<body>
    <div id="container"></div>

    <script src="./js/mustache.js"></script>
    <script>
        let templateStr = `
        {{#isShow}}
            <h1>你好</h1>
        {{/isShow}}`;

        let data = {
            isShow: false,
        };

        let domStr = Mustache.render(templateStr, data);
        document.getElementById("container").innerHTML = domStr;
    </script>
</body>
```

## 3、循环简单数组

```html
<body>
    <div id="container"></div>

    <script src="./js/mustache.js"></script>
    <script>
        let templateStr = `
            <ul>
                {{#arr}}
                    <li>{{.}}</li>
                {{/arr}}
            </ul>
        `;

        let data = {
            arr: ["A", "B", "C", "D", "E", "F"],
        };

        let domStr = Mustache.render(templateStr, data);
        document.getElementById("container").innerHTML = domStr;
    </script>
</body>
```

<img :src="$withBase('/images/bestshi.com_2021-03-19_00-02-19.png')">

## 4、循环对象数组

```html
<body>
    <div id="container"></div>
    <script src="./js/mustache.js"></script>
    <script>
        let templateStr = `
          <ul>
            {{#arr}}
            <li>
                <div class="hd">{{name}}的基本信息</div>
                <div class="bd">
                    <p>姓名: {{name}}</p>
                    <p>年龄: {{age}}</p>
                    <p>性别: {{sex}}</p>
                </div>
            </li>
            {{/arr}}
        </ul>
        `;
        let data = {
            arr: [
                { name: "小明", age: 12, sex: "男" },
                { name: "小红", age: 11, sex: "女" },
                { name: "小强", age: 13, sex: "男" },
            ],
        };

        let domStr = Mustache.render(templateStr, data);
        document.getElementById("container").innerHTML = domStr;
    </script>
</body>
```

<img :src="$withBase('/images/bestshi.com_2021-03-18_22-52-46.png')">

## 5、数组嵌套

```html
<body>
    <div id="container"></div>
    <script src="./js/mustache.js"></script>
    <script>
        let templateStr = `
          <ul>
            {{#arr}}
            <li>
                {{name}} 的爱好是: 
                <ol>
                    {{#hobbies}}
                    <li>{{.}}</li>
                    {{/hobbies}}
                </ol>
            </li>
            {{/arr}}
        </ul>
        `;
        let data = {
            arr: [
                { name: "小明", age: 12, hobbies: ["抽烟", "喝酒", "烫头"] },
                { name: "小红", age: 11, hobbies: ["看书", "游泳"] },
                { name: "小强", age: 13, hobbies: ["王者荣耀", "吃鸡"] },
            ],
        };

        let domStr = Mustache.render(templateStr, data);
        document.getElementById("container").innerHTML = domStr;
    </script>
</body>
```

<img :src="$withBase('/images/bestshi.com_2021-03-19_00-19-53.png')">
