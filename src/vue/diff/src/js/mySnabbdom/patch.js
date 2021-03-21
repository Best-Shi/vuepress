import vnode from "./vnode.js";
import createElement from "./createElement.js";
import patchVnode from "./patchVnode.js";

export default function patch(oldVnode, newVnode) {
    // 判断传入的一个参数，是DOM节点还是虚拟节点
    if (oldVnode.sel == "" || oldVnode.sel == undefined) {
        // oldVnode是DOM节点
        oldVnode = vnode(
            oldVnode.tagName.toLowerCase(),
            {},
            [],
            undefined,
            oldVnode
        );
    }

    // 判断oldVnode和newVnode是不是同一个节点
    if (oldVnode.key == newVnode.key && oldVnode.sel == newVnode.sel) {
        console.log("是同一个节点");
        patchVnode(oldVnode, newVnode);
    } else {
        console.log("不是同一个节点");
        let newVnodeElm = createElement(newVnode);

        // 插入到老节点之前
        if (oldVnode.elm.parentNode && newVnodeElm) {
            oldVnode.elm.parentNode.insertBefore(newVnodeElm, oldVnode.elm);
        }

        // 删除老节点
        oldVnode.elm.parentNode.removeChild(oldVnode.elm);
    }
}
