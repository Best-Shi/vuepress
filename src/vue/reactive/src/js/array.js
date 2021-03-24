import { def } from "./utils.js";

// 得到Array.prototype
const arrayPrototype = Array.prototype;

// 以 Array.prototype 为原型创建 arrayMethods 对象
export const arrayMethods = Object.create(arrayPrototype);

// 要改写的 7 个数组方法
const methodsNeedChange = [
    "push",
    "pop",
    "shift",
    "unshift",
    "splice",
    "sort",
    "reverse",
];

methodsNeedChange.forEach((methodName) => {
    // 备份原来的方法
    const original = arrayPrototype[methodName];

    // 定义新的方法
    def(
        arrayMethods,
        methodName,
        function() {
            // 把类数组对象变为数组
            const args = [...arguments];
            // 恢复原来功能
            const result = original.apply(this, args);

            // 把这个数组身上的__ob__去取出来
            const ob = this.__ob__;

            // push\unshift\splice能插入新项，要把插入的新项也变成observe的
            let inserted = [];

            switch (methodName) {
                case "push":
                case "unshift":
                    inserted = args;
                    break;
                case "splice":
                    inserted = args.slice(2);
                    break;
            }

            // 判断有没有需要插入的新项，让新项也变为响应的
            if (inserted) {
                ob.observeArray(inserted);
            }

            console.log(21324);
            return result;
        },
        false
    );
});
