(function () {
    function fn<T>(value: T): T {
        return value
    }

    console.log(fn<string>('123')); // 123

    function fn1<T, K>(a: T, b: K): T {
        console.log(b)
        return a
    }

    console.log(fn1<string, number>('Best Shi', 26));

    interface Inter {
        length: number;
    }

    function fn3<T extends Inter>(value: T): number {
        return value.length
    }

    console.log(fn3('interface'));




})();
(function () {
    class Animal<T>{
        name: T
        constructor(name: T) {
            this.name = name
        }
    }

    let a = new Animal<string>('小黑')
    console.log(a); // Animal { name: '小黑' }

})();
(function () { })();