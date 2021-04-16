module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            options: {
                separator: ";",
            },
            dist: {
                src: ["src/js/**/*.js"],
                dest: "dist/js/build.js",
            },
        },
        jshint: {
            options: {
                esversion: 6,
            },
            all: ["Gruntfile.js", "src/js/**/*.js"],
        },
        babel: {
            options: {
                presets: ["@babel/preset-env"],
            },
            dist: {
                files: {
                    "dist/js/build.js": "dist/js/build.js",
                },
            },
        },
        uglify: {
            options: {
                mangle: false, // 指定 false 为不改变代码中的变量名
            },
            target: {
                files: {
                    "dist/js/build.min.js": "dist/js/build.js",
                },
            },
        },
        cssmin: {
            target: {
                files: [
                    {
                        expand: true,
                        cwd: "src/css",
                        src: ["*.css", "!*.min.css"],
                        dest: "dist/css",
                        ext: ".css",
                    },
                ],
            },
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                },
                files: [
                    {
                        expand: true,
                        cwd: "src",
                        src: ["src/**/*.html", "*.html"],
                        dest: "dist",
                    },
                ],
            },
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: "src/images",
                        src: ["**"],
                        dest: "dist/images",
                    },
                    {
                        expand: true,
                        cwd: "src/fonts",
                        src: ["**"],
                        dest: "dist/fonts",
                    },
                ],
            },
        },
        watch: {
            scripts: {
                files: "**/*.js",
                tasks: ["concat", "jshint", "babel", "uglify"],
                options: {
                    debounceDelay: 250,
                },
            },
            css: {
                files: "**/*.css",
                tasks: ["cssmin"],
                options: {
                    debounceDelay: 250,
                },
            },
            html: {
                files: "**/*.html",
                tasks: ["htmlmin"],
                options: {
                    debounceDelay: 250,
                },
            },
            copy: {
                files: "**/*.*",
                tasks: ["copy"],
                options: {
                    debounceDelay: 250,
                    event: ["added", "deleted"],
                },
            },
        },
    });
    // 加载包含 "uglify" 任务的插件。
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-babel");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-watch");

    // 默认被执行的任务列表。
    grunt.registerTask("default", [
        "concat",
        "jshint",
        "babel",
        "uglify",
        "cssmin",
        "htmlmin",
        "copy",
        "watch",
    ]);
    grunt.registerTask("dev", ["default", "watch"]);
};
