/**
 *
 * 为Object.defineProperty()函数提供闭包环境，方便函数内部get和set方法赋值。
 *
 * @param {object} data 需要设置的对象
 * @param {string } key 需要设置对象的属性
 * @param {any} val 需要设置对象属性的值
 */

import observe from "./observe.js";

export default function defineReactive(data, key, val) {
    if (arguments.length == 2) {
        val = data[key];
    }

    // 子元素进行observe
    let childOb = observe(val);

    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get() {
            console.log(`你试图访问${data}对象，${key}属性`);
            return val;
        },
        set(value) {
            console.log(`你试图更改${data}对象，${key}属性`);
            if (val === value) {
                return;
            }
            val = value;
            childOb = observe(value);
        },
    });
}
