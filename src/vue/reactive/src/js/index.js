import observe from "./observe.js";

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
obj.e.splice(2, 1, [88, 99]);

console.log(obj.e);
