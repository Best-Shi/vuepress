import { init } from "snabbdom/init";
import { classModule } from "snabbdom/modules/class";
import { propsModule } from "snabbdom/modules/props";
import { styleModule } from "snabbdom/modules/style";
import { eventListenersModule } from "snabbdom/modules/eventlisteners";
import { h } from "snabbdom/h"; // helper function for creating vnodes

// 创建patch函数
const patch = init([
    classModule,
    propsModule,
    styleModule,
    eventListenersModule,
]);

// 创建虚拟节点
let myVnode1 = h(
    "a",
    { props: { href: "https://www.bestshi.com", target: "_blank" } },
    "Best Shi"
);

let myVnode2 = h("ul", [
    h("li", {}, "苹果"),
    h("li", { class: { active: true } }, "香蕉"),
]);

console.log(myVnode2);

// 虚拟DOM上树
const container = document.getElementById("container");
patch(container, myVnode2);
