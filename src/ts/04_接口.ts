(function () {
    interface Info {
        name: string;
        age: number;
    }

    function add(info: Info): boolean {
        console.log(info) // { name: 'Best Shi', age: 26 }
        return true
    }

    console.log(add({ name: 'Best Shi', age: 26 })) // true
})();

(function () {
    interface Info {
        name: string;
        age: number;
        gender?: string;
    }

    function add(info: Info): boolean {
        console.log(info) // 
        return true
    }

    add({ name: 'Best Shi', age: 26 })
})();

(function () {
    interface Point {
        readonly X: number;
        readonly Y: number;
    }
    let point: Point = {
        X: 10,
        Y: 20,
    }
    console.log(point);
    // point.X = 20 // 无法分配到 "X" ，因为它是只读属性。

})();

(function () {
    interface Encrypt {
        (value1: number, value2: number): number
    }

    let sum: Encrypt = function (a: number, b: number): number {
        return a + b
    }

    console.log(sum(10, 20)); // 30

})();

(function () {
    interface Animal {
        name: string;
        eat(food: string): void
    }

    class Dog implements Animal {
        name: string;
        constructor(name: string) {
            this.name = name
        }
        eat(food: string): void {
            console.log(`${this.name}正在吃${food}`);
        }
    }

    let d = new Dog('小黑')
    d.eat('肉肉') // 小黑正在吃肉肉
})();

(function () {
    interface Arr {
        [index: number]: string
    }

    let a: Arr = ['a', 'b', 'c']
    console.log(a); // [ 'a', 'b', 'c' ]

    interface Obj {
        [propName: string]: string
    }

    let o: Obj = {
        name: 'Best Shi',
        // age: 26 // 不能将类型“number”分配给类型“string”。所需类型来自此索引签名。
    }

})();

(function () {
    interface Person {
        name: string
    }

    interface Role {
        roleId: number,
        roleName: string,
        [propName: string]: any
    }

    interface Admin extends Person {
        role: Role
    }

    class ZhangSan implements Admin {
        role: Role;
        name: string;
        constructor(name: string, role: Role) {
            this.role = role
            this.name = name
        }
        show(): void {
            console.log(`我叫: ${this.name}, 我的角色是: ${this.role.roleName}`)
        }
    }

    let zs = new ZhangSan('张三', { roleId: 123, roleName: '超级管理员' })
    zs.show()

})();
