---
icon: js
author: Best Shi
time: 2021-4-30
tag:
    - JavaScript
    - 前端
category: JavaScript
prev: /web/js/JavaScript数组
next: false
---

# JavaScript 异步处理方式

## Promise

Promise 是一个对象，它代表了一个异步操作的最终完成或者失败。

一个 Promise 必然处于以下几种状态之一：

-   待定（pending）: 初始状态，既没有被兑现，也没有被拒绝。
-   完成（fulfilled）: 意味着操作成功完成。
-   拒绝（rejected）: 意味着操作失败。

<img :src="$withBase('/images/promises.png')">

**基本使用：**

```js
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p1");
    }, 1000);
});
console.log(p1);
```

<img :src="$withBase('/images/bestshi.com_2021-04-30_17-35-42.jpg')">

### Promise.all

> 当传入的 Promise 对象全部执行成功后返回成功，当传入的 Promise 对象有一个执行失败后立即返回失败。

**语法：**

```js
Promise.all(iterable);
```

**参数说明：**

-   iterable：一个可迭代的对象，例如 Array，其中每个成员都是 Promise。

**示例：**

```js
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p1");
    }, 1000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("p2");
    }, 1500);
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p3");
    }, 2000);
});

let res = Promise.all([p1, p2, p3]);
console.log(res);
```

<img :src="$withBase('/images/bestshi.com_2021-04-30_17-45-12.jpg')">

### Promise.allSettled

> 等所有传入的 Promise 都执行完后返回一个数组，数组中每个元素对应传入的 Promise 的结果。

**语法：**

```js
Promise.allSettled(iterable);
```

**参数说明：**

-   iterable：一个可迭代的对象，例如 Array，其中每个成员都是 Promise。

**示例：**

```js
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p1");
    }, 1000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("p2");
    }, 1500);
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p3");
    }, 2000);
});

let res = Promise.allSettled([p1, p2, p3]);
console.log(res);
```

<img :src="$withBase('/images/bestshi.com_2021-04-30_17-49-00.jpg')">

### Promise.any

> 返回第一个成功的 Promise，如果所有传入的 Promise 都没成功，则返回失败的 Promise。

**语法：**

```js
Promise.any(iterable);
```

**参数说明：**

-   iterable：一个可迭代的对象，例如 Array，其中每个成员都是 Promise。

**示例：**

```js
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p1");
    }, 1000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("p2");
    }, 1500);
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p3");
    }, 2000);
});

let res = Promise.any([p1, p2, p3]);
console.log(res);
```

<img :src="$withBase('/images/bestshi.com_2021-04-30_17-57-23.jpg')">

### Promise.race

> 返回第一个执行完成的 Promise（不管成功或者失败）。

**语法：**

```js
Promise.race(iterable);
```

**参数说明：**

-   iterable：一个可迭代的对象，例如 Array，其中每个成员都是 Promise。

**示例：**

```js
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p1");
    }, 1000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("p2");
    }, 1500);
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p3");
    }, 500);
});

let res = Promise.race([p1, p2, p3]);
console.log(res);
```

<img :src="$withBase('/images/bestshi.com_2021-04-30_18-02-40.jpg')">

### Promise.reject

> 返回一个失败的 Promise。

**语法：**

```js
Promise.reject(reason);
```

**参数说明：**

-   reason：失败的原因。

**示例：**

```js
let res = Promise.reject("123");
console.log(res);
```

<img :src="$withBase('/images/bestshi.com_2021-04-30_18-07-08.jpg')">

### Promise.resolve

> 返回一个成功的 Promise。

**语法：**

```js
Promise.resolve(reason);
```

**参数说明：**

-   reason：成功后的数据。

**示例：**

```js
let res = Promise.resolve({ name: "Best Shi" });
console.log(res);
```

<img :src="$withBase('/images/bestshi.com_2021-04-30_18-09-57.jpg')">

### 实例方法 .then

> Promise 状态改变后触发。返回一个 Promise。
>
> 一般用于处理成功 Promise。

**语法：**

```js
p.then(onFulfilled[, onRejected]);
```

**参数说明：**

-   onFulfilled：Promise 状态变为成功后的回调函数。
-   onRejected：Promise 状态变为失败后的回调函数。（可选）

**示例：**

```js
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("成功");
    }, 1000);
}).then((res) => {
    console.log(res); // 成功
});
```

### 实例方法 .catch

> 用于处理失败的 Promise。能捕获到 throw 抛出的异常。

**语法：**

```js
p.catch(onRejected);
```

**参数说明：**

-   onRejected：Promise 状态变为失败后的回调函数。

**示例：**

```js
new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("失败");
    }, 1000);
}).catch((err) => {
    console.log(err); // 失败
});

new Promise((resolve, reject) => {
    throw "error";
}).catch((res) => {
    console.log(res); // error
});
```

### 实例方法 .finally

> 在 promise 结束时，无论结果是 fulfilled 或者是 rejected，都会执行指定的回调函数。
>
> 返回一个设置了 finally 回调函数的 Promise 对象。

**语法：**

```js
p.finally(onFinally);
```

**参数说明：**

-   onFinally: Promise 结束后调用的 Function。

**示例：**

```js
new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("失败");
    }, 1000);
}).finally((err) => {
    console.log(err); // 失败
});
```

## async await

## generator
