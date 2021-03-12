// // 普通装饰器
// function logClass(params: any): void {
//     // params 表示当前装饰器装饰的类
//     console.log(params) // 1. [Function: HttpClient]

//     params.prototype.url = '动态扩展的属性'
//     params.prototype.run = function (): void {
//         console.log('我是装饰器里面的方法')
//     }
// }


// @logClass
// class HttpClient {
//     constructor() {
//         console.log('httpClient')  // 2. httpClient
//     }
// }

// // 设置 any 阻止 (类型“HttpClient”上不存在属性“run”.)报错
// let http: any = new HttpClient()
// console.log(http.url) // 3. 动态扩展的属性
// http.run() // 4. 我是装饰器里面的方法



// // 装饰器工厂
// function logClass(params: string) {
//     return function (target: any) {
//         console.log(params) // 1. www.bestshi.com
//         console.log(target) // 2. [Function: HttpClient]
//         target.prototype.url = params
//     }
// }


// @logClass('www.bestshi.com')
// class HttpClient {
//     constructor() {
//         console.log('HttpClient') // 3. HttpClient
//     }
// }

// let http: any = new HttpClient()
// console.log(http.url); // 4. www.bestshi.com


// // 重写构造函数
// function logClass(target: any) {
//     console.log("@logClass", target); // 1. @logClass [Function: HttpClient]
//     return class extends target {
//         url: string = '我是装饰器修改的url'
//         getInfo(): void {
//             console.log("@logClass", this.url) // 3. @logClass 我是装饰器修改的url
//         }
//     }
// }


// @logClass
// class HttpClient {
//     url: string
//     constructor(url: string) {
//         console.log("Httpclient", url); // 2. Httpclient www.bestshi.com
//         this.url = url
//     }
//     getInfo(): void {
//         console.log("Httpclient", this.url);
//     }
// }

// let http = new HttpClient("www.bestshi.com");
// http.getInfo()


// // // 属性装饰器
// function logProperty(params: string) {
//     return function (target: any, attr: string) {
//         console.log("logProperty", params) // 1. logProperty www.bestshi.com
//         console.log("logProperty", target) // 2. logProperty { getInfo: [Function (anonymous)] }
//         console.log("logProperty", attr)   // 3. logProperty url
//         target[attr] = params
//     }
// }




// class HttpClient {
//     @logProperty('www.bestshi.com')
//     url: string | undefined
//     constructor(url: string) {
//         this.url = url
//     }
//     getInfo(): void {
//         console.log("Httpclient", this.url) // 4. Httpclient www.smallshell.com
//     }
// }


// let http = new HttpClient('www.smallshell.com')
// http.getInfo()


// // 方法装饰器
// function logMethod(params: string) {
//     return function (target: any, methodName: string, desc: any) {
//         console.log("logProperty", params)      // 1. logProperty www.bestshi.com
//         console.log("logProperty", target)      // 2. logProperty { getInfo: [Function (anonymous)] }
//         console.log("logProperty", methodName)  // 3. logProperty getInfo
//         console.log("logProperty", desc)        // 4. logProperty {writable: true, enumerable: false, configurable: true, value: ƒ}

//         // 把装饰器方法里面传入的所有参数改为string类型
//         let oMethod = desc.value
//         desc.value = function (...args: any[]) {
//             args = args.map((value) => {
//                 return String(value);
//             })
//             oMethod.apply(this, args);
//         }

//     }
// }




// class HttpClient {
//     url: string | undefined
//     constructor(url: string) {
//         this.url = url
//     }
//     @logMethod('www.bestshi.com')
//     getInfo(...args: any[]): void {
//         console.log("Httpclient", args)     // 5. Httpclient["Best Shi", "26"]
//         console.log("Httpclient", this.url) // 6. Httpclient www.smallshell.com
//     }
// }


// let http = new HttpClient('www.smallshell.com')
// http.getInfo('Best Shi', 26)


// // 方法参数装饰器
// function logParams(params: string) {
//     return function (target: any, methodName: string, paramsIndex: number) {
//         console.log("logParams", params)      // 1. logParams www.bestshi.com
//         console.log("logParams", target)      // 2. logParams {constructor: ƒ, getInfo: ƒ}
//         console.log("logParams", methodName)  // 3. logParams getInfo
//         console.log("logParams", paramsIndex) // 4. logParams 0
//     }
// }




// class HttpClient {
//     url: string | undefined
//     constructor(url: string) {
//         this.url = url
//     }

//     getInfo(@logParams('www.bestshi.com') name: string, age: number): void {
//         console.log("Httpclient", name, age)    // 5. Httpclient Best Shi 26
//         console.log("Httpclient", this.url)     // 6. Httpclient www.smallshell.com
//     }
// }


// let http = new HttpClient('www.smallshell.com')
// http.getInfo('Best Shi', 26)



// 装饰器执行顺序
function logClass1(params: string) {
    return function (target: any) {
        console.log('类装饰器1')  // 8
    }
}
function logClass2(params: string) {
    return function (target: any) {
        console.log('类装饰器2')  // 7
    }
}

function logAttribute1(params?: string) {
    return function (target: any, attrName: any) {
        console.log('属性装饰器1')  // 2
    }
}
function logAttribute2(params?: string) {
    return function (target: any, attrName: any) {
        console.log('属性装饰器2')  // 1
    }
}

function logMethod1(params?: string) {
    return function (target: any, attrName: any, desc: any) {
        console.log('方法装饰器1')  // 4
    }
}
function logMethod2(params?: string) {
    return function (target: any, attrName: any, desc: any) {
        console.log('方法装饰器2')  // 3
    }
}


function logParams1(params?: string) {
    return function (target: any, attrName: any, desc: any) {
        console.log('方法参数装饰器1')  // 6
    }
}

function logParams2(params?: string) {
    return function (target: any, attrName: any, desc: any) {
        console.log('方法参数装饰器2')  // 5
    }
}



@logClass1('http://www.itying.com/api')
@logClass2('xxxx')
class HttpClient {
    @logAttribute1()
    @logAttribute2()
    public apiUrl: string | undefined;
    constructor() {
    }

    @logMethod1()
    @logMethod2()
    getData() {
        return true;
    }

    setData(@logParams1() attr1: any, @logParams2() attr2: any,) {

    }
}

var http: any = new HttpClient();


// 属性装饰器2
// 属性装饰器1
// 方法装饰器2
// 方法装饰器1
// 方法参数装饰器2
// 方法参数装饰器1
// 类装饰器2
// 类装饰器1
