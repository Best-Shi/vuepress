import observe from "./observe.js";
import Watcher from "./Watcher.js";

let obj = {
    a: {
        b: {
            c: 5,
        },
    },
    d: 4,
    e: [12, 34, 56, 78],
};

observe(obj);
// console.log(Watcher);
new Watcher(obj, "a.b.c", (val) => {
    console.log("111111", val);
});

obj.a.b.c = 20;

console.log(obj);
