const { config } = require("vuepress-theme-hope");

module.exports = config({
    title: "你好 Best Shi",
    base: "/vuepress/",
    themeConfig: {
        author: "Best Shi",
        baseLang: "zh-CN",
        // 主题色
        themeColor: {
            // color1: "#85949F",
            MarsGreen: "#008c8c",
        },
        // 导航
        searchPlaceholder: "请输入搜索内容",
        // logo: "/images/logo.jpg",

        // 底部信息
        footer: {
            display: true,
            content: '<a href="https://gitee.com/bestshi">Best Shi</a>',
            copyright: "秋风入庭树，孤客最先闻",
        },
        // 首页配置
        blog: {
            avatar: "/images/logo.jpg",
            sidebarDisplay: "always",
            links: {
                Gitee: "Gitee",
                Github: "Gitee",
            },
            pageInfo: ["author", "time", "category", "tag", "reading-time"],
        },

        // 设置复制
        copyCode: {
            showInMobile: true,
        },
        copyright: {
            minLength: 1,
        },

        // 图片预览
        photoSwipe: true,

        // markdown增强
        mdEnhance: {
            enableAll: true,
            flowchart: true,
        },

        nav: [
            { text: "主页", link: "/", icon: "home" },
            { text: "随笔", link: "/note/", icon: "note" },
            {
                text: "前端",
                prefix: "/web/",
                icon: "html5",
                items: [
                    { text: "CSS", link: "css/", icon: "css3" },
                    { text: "HTML", link: "html/", icon: "html5" },
                    { text: "JavaScript", link: "js/", icon: "js" },
                    { text: "TypeScript", link: "ts/", icon: "ts" },
                    { text: "Vue", link: "vue/", icon: "vue" },
                ],
            },
            {
                text: "后端",
                icon: "back-stage",
                items: [
                    {
                        text: "开发语言",
                        prefix: "/service/",
                        items: [
                            { text: "Node", link: "node/", icon: "node-js" },
                            { text: "Deno", link: "deno/", icon: "deno" },
                        ],
                    },
                    {
                        text: "数据库",
                        prefix: "/service/",
                        items: [{ text: "MongoDB", link: "mongodb/" }],
                    },
                ],
            },
            {
                text: "工具",
                icon: "engine",
                items: [
                    {
                        text: "打包构建工具",
                        prefix: "/tools/",
                        items: [
                            {
                                text: "Grunt",
                                link: "grunt/",
                            },
                            {
                                text: "Gulp",
                                link: "gulp/",
                            },
                        ],
                    },
                ],
            },
            { text: "软件配置", link: "/programs/", icon: "software" },
            { text: "关于", link: "/about/", icon: "info" },
        ],
        breadcrumb: false,

        // 侧边栏
        // displayAllHeaders: true,
        sidebarDepth: 3,
        sidebar: {
            "/note/": [
                {
                    title: "Best Shi 的随笔",
                    icon: "note",
                    collapsable: false,
                    children: ["", "Windows相关"],
                },
            ],
            "/web/css": [
                {
                    title: "CSS 相关",
                    icon: "css3",
                    collapsable: false,
                    prefix: "css/",
                    children: [""],
                },
            ],
            "/web/html": [
                {
                    title: "HTML 相关",
                    icon: "html5",
                    collapsable: false,
                    prefix: "html/",
                    children: [""],
                },
            ],
            "/web/js": [
                {
                    title: "JavaScript 相关",
                    icon: "js",
                    collapsable: false,
                    prefix: "js/",
                    children: ["", "JavaScript数组", "JavaScript异步处理"],
                },
            ],
            "/web/ts": [
                {
                    title: "TypeScript 相关",
                    icon: "ts",
                    collapsable: false,
                    prefix: "ts/",
                    children: [
                        "",
                        "TypeScript类型与配置笔记",
                        "TypeScript面向对象笔记",
                        "TypeScript案例",
                    ],
                },
            ],
            "/web/vue": [
                {
                    title: "Vue 基本使用",
                    icon: "vue",
                    collapsable: false,
                    prefix: "vue/",
                    children: [""],
                },
                {
                    title: "Vue3 快速上手",
                    icon: "vue",
                    collapsable: false,
                    prefix: "vue/",
                    children: [
                        {
                            title: "Vue3 快速上手",
                            icon: "vue",
                            collapsable: false,
                            path: "vue3/vue3快速上手",
                        },
                        {
                            title: "Composition API(常用部分)",
                            icon: "vue",
                            collapsable: false,
                            path: "vue3/Composition API(常用部分)",
                        },
                        {
                            title: "Composition API(其它部分)",
                            icon: "vue",
                            collapsable: false,
                            path: "vue3/Composition API(其它部分)",
                        },
                        {
                            title: "Vue3 新组件",
                            icon: "vue",
                            collapsable: false,
                            path: "vue3/Vue3 新组件",
                        },
                    ],
                },
                {
                    title: "Vue 源码解析",
                    icon: "vue",
                    collapsable: false,
                    prefix: "vue/",
                    children: [
                        {
                            title: "mustache模板引擎",
                            icon: "vue",
                            collapsable: false,
                            path: "mustache/mustache模板引擎",
                            // children: [
                            //     "mustache模板引擎",
                            //     "数据变为视图方式",
                            //     "mustache基本使用",
                            //     "手写mustache模板引擎",
                            // ],
                        },
                        {
                            title: "虚拟DOM与diff算法",
                            icon: "vue",
                            collapsable: false,
                            path: "diff/虚拟DOM与diff算法",
                            // children: ["虚拟DOM与diff算法"],
                        },
                        {
                            title: "双向数据绑定",
                            icon: "vue",
                            path: "reactive/双向数据绑定",
                            collapsable: false,
                            // children: ["双向数据绑定"],
                        },
                        {
                            title: "抽象语法树",
                            icon: "vue",
                            path: "ast/抽象语法树",
                            collapsable: false,
                            // children: ["抽象语法树"],
                        },
                    ],
                },
            ],
            "/service/node": [
                {
                    title: "Node 相关",
                    icon: "node-js",
                    collapsable: false,
                    prefix: "node/",
                    children: [""],
                },
            ],
            "/service/deno": [
                {
                    title: "Deno 相关",
                    icon: "deno",
                    collapsable: false,
                    prefix: "deno/",
                    children: [""],
                },
            ],
            "/service/mongodb": [
                {
                    title: "MongoDB 相关",
                    collapsable: false,
                    prefix: "mongodb/",
                    children: ["", "MongoDB进阶", "MongoDB权限配置"],
                },
            ],
            "/tools/": [
                {
                    title: "打包构建工具",
                    collapsable: false,
                    icon: "engine",
                    // prefix: "grunt/",
                    children: [
                        {
                            title: "Grunt",
                            collapsable: false,
                            path: "grunt/",
                        },
                        {
                            title: "Gulp",
                            collapsable: false,
                            path: "gulp/",
                        },
                    ],
                },
            ],
        },
    },
});
