/**
 * 创建节点
 */

export default function createElement(vnode) {
    console.log("createElement", vnode);
    // 创建一个DOM节点
    let domNode = document.createElement(vnode.sel);

    // 判断是有子节点还是文本
    if (
        vnode.text !== "" &&
        (vnode.children === undefined || vnode.children.length === 0)
    ) {
        // 是文本
        domNode.innerText = vnode.text;
    } else {
        // 是节点
        for (let i = 0; i < vnode.children.length; i++) {
            // 当前的children
            let ch = vnode.children[i];
            // 创建出它的DOM
            let chDOM = createElement(ch);
            // 上树
            domNode.appendChild(chDOM);
        }
    }
    // 补充elm属性
    vnode.elm = domNode;
    // 返回elm，elm是一个纯DOM对象
    return vnode.elm;
}
