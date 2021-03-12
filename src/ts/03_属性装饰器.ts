(function () {
    // public 公共的
    class Person {
        public name: string; // 写或什么都不写都是public
        public age: number;

        constructor(name: string, age: number) {
            this.name = name; // 可以在类中修改
            this.age = age;
        }

        sayHello() {
            console.log(`大家好，我是${this.name}`);
        }
    }

    class Employee extends Person {
        constructor(name: string, age: number) {
            super(name, age);
            this.name = name; //子类中可以修改
        }
    }
    let emp = new Employee('Best Shi', 22)
    console.log(emp)
    emp.name = 'small shell'
    console.log(emp)
})();

(function () {
    //  private 私有的
    class Person {
        private name: string;
        private age: number;

        constructor(name: string, age: number) {
            this.name = name; // 可以在类中修改
            this.age = age;
        }

        sayHello() {
            console.log(`大家好，我是${this.name}`);
        }
    }

    class Employee extends Person {
        constructor(name: string, age: number) {
            super(name, age);
            // this.name = name; // 属性“name”为私有属性，只能在类“Person”中访问。
        }
    }
    let emp = new Employee('Best Shi', 22)
    console.log(emp)
    // emp.name = 'small shell' // 属性“name”为私有属性，只能在类“Person”中访问。
    console.log(emp)
})();

(function () {
    // protected 受保护的
    class Person {
        protected name: string;
        protected age: number;

        constructor(name: string, age: number) {
            this.name = name; // 可以在类中修改
            this.age = age;
        }

        sayHello() {
            console.log(`大家好，我是${this.name}`);
        }
    }

    class Employee extends Person {
        constructor(name: string, age: number) {
            super(name, age);
            this.name = name; // 子类中可以修改
        }
    }
    let emp = new Employee('Best Shi', 22)
    console.log(emp)
    // emp.name = 'small shell' // 属性“name”受保护，只能在类“Person”及其子类中访问。
    console.log(emp)
})();


(function () {
    // readonly 受保护的
    class Person {
        readonly name: string;
        readonly age: number;

        constructor(name: string, age: number) {
            this.name = name; // 必须在声明时或构造函数里被初始化。
            this.age = age;
        }

        sayHello() {
            console.log(`大家好，我是${this.name}`);
        }
    }

    class Employee extends Person {
        constructor(name: string, age: number) {
            super(name, age);
            // this.name = name; // 无法分配到 "name" ，因为它是只读属性。
        }
    }
    let emp = new Employee('Best Shi', 22)
    console.log(emp)
    // emp.name = 'small shell' // 无法分配到 "name" ，因为它是只读属性。。
    console.log(emp)
})();


(function () {
    class Person {
        private _name: string;
        constructor(name: string) {
            this._name = name;
        }
        get name(): string {
            return this._name
        }
        set name(value: string) {
            this._name = value
        }
    }

    let per = new Person('Best Shi')
    console.log(per) // Person { _name: 'Best Shi' }

    per.name = 'small shell'
    console.log(per) // Person { _name: 'small shell' }
})();


(function () {
    class Tools {
        static PI = 3.1415926

        static sum(value1: number, value2: number): number {
            return value1 + value2
        }
        run(): void {
            // console.log(this.PI) // 属性 "PI" 不是类型为 "Tools" 的静态成员
        }
    }

    console.log(Tools.PI)
    console.log(Tools.sum(10, 20))
})();

(function () {
    abstract class Animal {
        abstract name: string
        age: number;
        constructor(age: number) {
            this.age = age
        }
        abstract sayHi(): void
    }

    class Dog implements Animal {
        name: string;
        age: number;
        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }
        sayHi(): void {
            console.log('汪汪汪~~~')
        }
    }
})();

(function () {
    abstract class Animal {
        abstract name: string
        abstract sayHi(): void
    }

    class Cat {
        age: number;
        constructor(age: number) {
            this.age = age
        }
        eat(): void {
            console.log('猫吃鱼')
        }
    }

    class A extends Cat implements Animal {
        name: string;
        constructor(name: string, age: number) {
            super(age)
            this.name = name
        }
        sayHi(): void {
            console.log(this.name, this.age)
        }
    }

    let c = new A('小黑', 5)
    c.eat() // 猫吃鱼
    c.sayHi() // 小黑 5
})();


