import h from "./mySnabbdom/h.js";

import { init } from "snabbdom/init";
import { classModule } from "snabbdom/modules/class";
import { propsModule } from "snabbdom/modules/props";
import { styleModule } from "snabbdom/modules/style";
import { eventListenersModule } from "snabbdom/modules/eventlisteners";

// 创建patch函数
const patch = init([
    classModule,
    propsModule,
    styleModule,
    eventListenersModule,
]);

let myVnode1 = h("div", {}, [
    h("p", {}, "你好"),
    h("p", {}, "你好"),
    h("p", {}, h("span", {}, "hello")),
]);

console.log(myVnode1);

// 虚拟DOM上树
const container = document.getElementById("container");
patch(container, myVnode1);
