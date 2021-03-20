import vnode from "./vnode.js";

/**
 * 这个函数只实现3个参数功能，缺一不可
 * 调用形态必须为下面三种之一：
 *  形态① h('div', {}, '文字')
 *  形态② h('div', {}, [])
 *  形态③ h('div', {}, h())
 */

export default function h(sel, data, c) {
    // 检测参数个数
    if (arguments.length !== 3) throw new Error("h函数必须传入三个参数");

    // 检测参数c的类型

    if (typeof c === "string" || typeof c === "number") {
        // 说明是形态①
        return vnode(sel, data, undefined, c, undefined);
    } else if (Array.isArray(c)) {
        // 说明是形态②
        // 收集children
        let children = [];
        for (let i = 0; i < c.length; i++) {
            // 检测c[i]
            if (!(typeof c[i] === "object" && c[i].hasOwnProperty("sel")))
                throw new Error("传入的数组参数中有项不是h函数");
            children.push(c[i]);
        }
        return vnode(sel, data, children, undefined, undefined);
    } else if (typeof c === "object" && c.hasOwnProperty("sel")) {
        // 说明是形态③
        // 传入的c是唯一的children
        return vnode(sel, data, [c], undefined, undefined);
    } else {
        throw new Error("传入的第三个参数类型不对");
    }
}
