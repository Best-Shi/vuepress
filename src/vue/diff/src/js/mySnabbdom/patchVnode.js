import createElement from "./createElement.js";
import updateChildren from "./updateChildren.js";

export default function patchVnode(oldVnode, newVnode) {
    // 判读新旧vnode是不是同一个
    if (oldVnode == newVnode) return;
    // 判断vnode有没有text属性
    if (
        newVnode.text != undefined &&
        (newVnode.children == undefined || newVnode.children.length == 0)
    ) {
        // 新vnode有text属性
        if (newVnode.text != oldVnode.text) {
            oldVnode.elm.innerText = newVnode.text;
        }
    } else {
        // 新vnode没有text属性

        // 判断老的有没有children
        if (oldVnode.children != undefined && oldVnode.children.length > 0) {
            // 新老节点都有children
            updateChildren(oldVnode.elm, oldVnode.children, newVnode.children);
        } else {
            // 老的没有children，新的有children
            oldVnode.elm.innerHTML = "";
            for (let i = 0; i < newVnode.children.length; i++) {
                let dom = createElement(newVnode.children[i]);
                oldVnode.elm.appendChild(dom);
            }
        }
    }
}
