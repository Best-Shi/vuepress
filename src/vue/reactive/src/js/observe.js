/**
 * 用于侦测对象身上有没有__ob__属性
 */

import Observer from "./Observer.js";

export default function observe(value) {
    if (typeof value != "object") return;

    let ob;
    if (typeof value.__ob__ !== "undefined") {
        ob = value.__ob__;
    } else {
        ob = new Observer(value);
    }
    return ob;
}
