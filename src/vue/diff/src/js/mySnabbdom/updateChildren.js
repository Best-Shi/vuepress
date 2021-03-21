import patchVnode from "./patchVnode.js";
import createElement from "./createElement.js";

// 判断是否是同一个虚拟节点
function sameVnode(a, b) {
    return a.sel == b.sel && a.key == b.key;
}

export default function updateChildren(parentElm, oldCh, newCh) {
    // 旧前
    let oldStartIdx = 0;
    // 新前
    let newStartIdx = 0;
    // 旧后
    let oldEndIdx = oldCh.length - 1;
    // 新后
    let newEndIdx = newCh.length - 1;
    // 旧前节点
    let oldStartVnode = oldCh[0];
    // 新前节点
    let newStartVnode = newCh[0];
    // 旧后节点
    let oldEndVnode = oldCh[oldEndIdx];
    // 新后节点
    let newEndVnode = newCh[newEndIdx];

    let keyMap = null;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newStartIdx) {
        console.log("♥");
        if (oldStartVnode == null || oldCh[oldStartIdx] == undefined) {
            oldStartVnode = oldCh[++oldStartIdx];
        } else if (oldEndVnode == null || oldCh[oldEndIdx] == undefined) {
            oldEndVnode = oldCh[--oldEndIdx];
        } else if (newStartVnode == null || newCh[newStartIdx] == undefined) {
            newStartVnode = newCh[++newStartIdx];
        } else if (newEndVnode == null || newCh[newEndIdx] == undefined) {
            newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldStartVnode, newStartVnode)) {
            // 新前与旧前是同一个节点
            console.log("①新前与旧前命中");
            patchVnode(oldStartVnode, newStartVnode);
            // 移动指针
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
        } else if (sameVnode(oldEndVnode, newEndVnode)) {
            // 新后与旧后是同一个节点
            console.log("②新后与旧后命中");
            patchVnode(oldEndVnode, newEndVnode);
            // 移动指针
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldStartVnode, newEndVnode)) {
            // 新后与旧前是同一个节点
            console.log("③新后与旧前命中");
            patchVnode(oldStartVnode, newEndVnode);
            // 移动到旧后之后
            parentElm.insertBefore(
                oldStartVnode.elm,
                oldEndVnode.elm.nextSibling
            );
            // 移动指针
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldEndVnode, newStartVnode)) {
            // 新前与旧后是同一个节点
            console.log("④新前与旧后命中");
            patchVnode(oldEndVnode, newStartVnode);
            // 移动到旧前之前
            parentElm.insertBefore(oldEndVnode.elm, oldStartVnode.elm);
            // 移动指针
            newStartVnode = newCh[++newStartIdx];
            oldEndVnode = oldCh[--oldEndIdx];
        } else {
            // 四种都没命中

            if (!keyMap) {
                keyMap = {};
                for (let i = oldStartIdx; i <= oldEndIdx; i++) {
                    const key = oldCh[i].key;
                    if (key != undefined) {
                        keyMap[key] = i;
                    }
                }
            }
            const idxInOld = keyMap[newStartVnode.key];

            if (idxInOld == undefined) {
                parentElm.insertBefore(
                    createElement(newStartVnode),
                    oldStartVnode.elm
                );
            } else {
                // 不是全新的项,需要移动
                const elmToMove = oldCh[idxInOld];
                patchVnode(elmToMove, newStartVnode);
                // 把这项设置为undefined
                oldCh[idxInOld] = undefined;
                parentElm.insertBefore(elmToMove.elm, oldStartVnode.elm);
            }
            newStartVnode = newCh[++newStartIdx];
        }
    }

    // 看有没有剩余
    if (newStartIdx <= newEndIdx) {
        console.log("新节点还有剩余节点");
        for (let i = newStartIdx; i <= newEndIdx; i++) {
            parentElm.insertBefore(createElement(newCh[i]), oldCh[oldStartIdx]);
        }
    } else if (oldStartIdx <= oldEndIdx) {
        for (let i = oldStartIdx; i <= oldEndIdx; i++) {
            if (oldCh[i]) {
                parentElm.removeChild(oldCh[i].elm);
            }
        }
    }
}
