import h from "./mySnabbdom/h.js";
import patch from "./mySnabbdom/patch.js";

let myVnode1 = h("h1", {}, "你好");

let myVnode2 = h("ul", {}, [
    h("li", {}, "你好"),
    h("li", {}, "你好"),
    h("li", {}, h("span", {}, "hello")),
]);

// console.log(myVnode1);

// 虚拟DOM上树
const container = document.getElementById("container");
const btn = document.getElementById("btn");
patch(container, myVnode1);

// 点击改变DOM
btn.onclick = function() {
    patch(myVnode1, myVnode2);
};
