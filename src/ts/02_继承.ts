class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    sayHi(): void {
        console.log('动物再叫~~')
    }
}

class Dog extends Animal {
    age: number;
    constructor(name: string, age: number) {
        super(name); // 调用父类构造函数;     访问子类的 "this" 前，必须先调用 "super"。
        this.age = age;
    }
    sayHi(): void {
        super.sayHi();
        console.log('汪汪汪~~~')
    }
}

let dog = new Dog('花花', 3);
dog.sayHi()