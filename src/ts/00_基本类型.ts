let decimal: number = 6; // 十进制
let hex: number = 0xf00d; // 十六进制
let binary: number = 0b1010; // 二进制
let octal: number = 0o744; // 八进制
// let big: bigint = 100n; // 目标低于 ES2020 时，bigInt 文本不可用。


let str: string = 'Best Shi';

let isShow: boolean = true;

let color: 'red' | 'blue' | 'black';
let num: 1 | 2 | 3 | 4 | 5;


let d: any = 'd';
d = 123;


let e: unknown
e = 10
e = 'Best Shi'
e = d

let s: string = 'Best Shi'
// s = e

function fn(): void { }

let u: undefined = undefined
let n: null = null

function error(message: string) {
    throw new Error(message)
}


let a: object;
a = {};
a = function () { };


let f: number[] = [1, 2, 3]
let g: Array<number> = [1, 2, 3,]


let h: [string, number]
h = ['Best Shi', 26]


enum Gender {
    Male,
    Female
}

let i: { name: string, gender: Gender };
i = {
    name: '孙悟空',
    gender: Gender.Male // 'male'
}

let v: string
let z: unknown
z = 'Best Shi'
v = z as string
v = <string>z


type myType = 1 | 2 | 3 | 4 | 5
let aa: myType


let k: { name: string, age?: number }

k = {
    name: 'Best Shi'
}


let j: { name: string, [propName: string]: any }
j = {
    name: 'Best Shi',
    age: 26,
    gender: '男'
}


let sum: (value1: number, value2: number) => number
sum = function (a: number, b: number): number {
    return a + b
}

let sum1: (value1: number, value2: number, desc?: string) => number
sum1 = function (a: number, b: number, desc: string): number {
    if (desc) {
        console.log(desc);
    }
    return a + b
}
console.log(sum1(10, 23));

