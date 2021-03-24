/**
 * 用于递归侦测对象的所有属性。
 * 将一个正常的object转换为每个层级的属性都是响应式（可以被侦测的）的object
 */

import { def } from "./utils.js";
import defineReactive from "./defineReactive.js";

export default class Observer {
    constructor(value) {
        // 给实例添加了__ob__属性，值是这次new的实例。
        def(value, "__ob__", this, false);
        console.log("我是Observer构造器", value);
        this.walk(value);
    }

    // 遍历
    walk(value) {
        for (let k in value) {
            defineReactive(value, k);
        }
    }
}
