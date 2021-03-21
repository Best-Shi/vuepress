import h from "./mySnabbdom/h.js";
import patch from "./mySnabbdom/patch.js";

let myVnode1 = h("ul", {}, [
    h("li", { key: "A" }, "A"),
    h("li", { key: "B" }, "B"),
    h("li", { key: "C" }, "C"),
]);

let myVnode2 = h("ul", {}, [
    h("li", { key: "F" }, "F"),
    h("li", { key: "A" }, "A"),
    h("li", { key: "B" }, "B"),
    h("li", { key: "C" }, "C"),
    h("li", { key: "D" }, "D"),
    h("li", { key: "E" }, "E"),
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
