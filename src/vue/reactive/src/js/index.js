import observe from "./observe.js";

let obj = {
    a: {
        b: {
            c: 5,
        },
    },
    d: 4,
};

observe(obj);
obj.a.b.c = 10;
