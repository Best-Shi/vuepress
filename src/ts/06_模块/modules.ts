// 导出单个
export const hi: string = 'Hello world'

// 默认导出
export default class Animal {
    name: string
    constructor(name: string) {
        this.name = name
    }
    sayHi(): void {
        console.log(this.name)
        console.log('你好呀, 我是模块里面的');
    }
}

// 导出列表
let name: string = 'Best Shi'
let age: number = 26
let sex: string = '男'
export {
    name,
    age
}

// 重命名导出
export { sex as gender }
