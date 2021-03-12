import { hi } from './modules'
import Animal from './modules'
import { name, age, gender } from './modules'

console.log(hi); // Hello world


let dog = new Animal('小黑')
dog.sayHi() // 小黑   你好呀, 我是模块里面的


console.log(name, age, gender); // Best Shi 26 男