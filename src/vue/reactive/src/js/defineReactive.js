/**
 *
 * 为Object.defineProperty()函数提供闭包环境，方便函数内部get和set方法赋值。
 *
 * @param {object} data 需要设置的对象
 * @param {string } key 需要设置对象的属性
 * @param {any} val 需要设置对象属性的值
 */

import observe from "./observe.js";
import Dep from "./Dep.js";

export default function defineReactive(data, key, val) {
    const dep = new Dep();
    if (arguments.length == 2) {
        val = data[key];
    }

    // 子元素进行observe
    let childOb = observe(val);

    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get() {
            // 如果处于依赖收集阶段
            if (Dep.target) {
                dep.depend();
                if (childOb) {
                    childOb.dep.depend();
                }
            }
            return val;
        },
        set(value) {
            if (val === value) {
                return;
            }
            val = value;
            childOb = observe(value);

            // 发布订阅模式，通知dep
            dep.notify();
        },
    });
}
