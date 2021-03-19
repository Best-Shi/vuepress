const { config } = require("vuepress-theme-hope");

module.exports = config({
    title: "你好 Best Shi",
    base: "/blog/",
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
                prefix: "/service/",
                icon: "back-stage",
                items: [
                    { text: "Node", link: "node/", icon: "node-js" },
                    { text: "Deno", link: "deno/", icon: "deno" },
                ],
            },
            { text: "工具", link: "/tools/", icon: "engine" },
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
                    children: [""],
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
                    children: [""],
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
                    title: "Vue 源码解析",
                    icon: "vue",
                    collapsable: false,
                    prefix: "vue/",
                    children: [
                        {
                            title: "mustache模板引擎",
                            icon: "vue",
                            prefix: "mustache/",
                            children: [
                                "数据变为视图方式",
                                "mustache基本使用",
                                "手写mustache模板引擎",
                            ],
                        },
                        {
                            title: "虚拟DOM与diff算法",
                            icon: "vue",
                            prefix: "diff/",
                            children: ["虚拟DOM与diff算法"],
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
        },
    },
});
