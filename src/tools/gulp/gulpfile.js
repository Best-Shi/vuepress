const { src, dest, series, parallel, watch } = require("gulp");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");
const less = require("gulp-less");
const cleanCss = require("gulp-clean-css");
const htmlmin = require("gulp-htmlmin");

function handleJs() {
    return src("src/js/*.js")
        .pipe(concat("build.js"))
        .pipe(
            babel({
                presets: ["@babel/env"],
            })
        )
        .pipe(uglify())
        .pipe(rename({ suffix: ".min" }))
        .pipe(dest("dist/js"));
}

function handleLess() {
    return src("src/less/*.less")
        .pipe(less())
        .pipe(dest("src/css"));
}

function handleCss() {
    return src("src/css/*.css")
        .pipe(concat("build.css"))
        .pipe(cleanCss({ compatibility: "ie8" }))
        .pipe(rename({ suffix: ".min" }))
        .pipe(dest("dist/css"));
}

function handleHtml() {
    return src("src/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest("dist"));
}

watch("src/js/*.js", handleJs);
watch("src/less/*.less", handleLess);
watch("src/css/*.css", handleCss);
watch("src/*.html", handleHtml);

exports.default = parallel(handleJs, handleHtml, series(handleLess, handleCss));
