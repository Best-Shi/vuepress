/**
 * 用于递归侦测对象的所有属性。
 * 将一个正常的object转换为每个层级的属性都是响应式（可以被侦测的）的object
 */

import { def } from "./utils.js";
import defineReactive from "./defineReactive.js";
import { arrayMethods } from "./array.js";
import observe from "./observe.js";
import Dep from "./Dep.js";

export default class Observer {
    constructor(value) {
        // 每个Observer的实例身上都有一个dep
        this.dep = new Dep();

        // 给实例添加了__ob__属性，值是这次new的实例。
        def(value, "__ob__", this, false);
        // console.log("我是Observer构造器", value);

        // 检测时数组还是对象
        if (Array.isArray(value)) {
            // 如果是数组，将这个数组的原型指向 arrayMethods
            Object.setPrototypeOf(value, arrayMethods);
            // 让这个数组变得 observe
            this.observeArray(value);
        } else {
            this.walk(value);
        }
    }

    // 遍历
    walk(value) {
        for (let k in value) {
            defineReactive(value, k);
        }
    }

    // 数组的特殊遍历
    observeArray(arr) {
        // 防止数组在遍历过程中长度变化
        for (let i = 0, l = arr.length; i < l; i++) {
            // 逐项进行observe
            observe(arr[i]);
        }
    }
}
