let uid = 0;
export default class Dep {
    constructor() {
        this.id = uid++;
        // 用数组存储自己的订阅者
        // 这个数组里面放的是watcher的实例
        this.subs = [];
    }
    // 添加订阅
    addSub(sub) {
        this.subs.push(sub);
    }

    // 添加依赖
    depend() {
        // Dep.target就是一个我们自己指定的全局位置
        if (Dep.target) {
            this.addSub(Dep.target);
        }
    }

    // 通知跟新
    notify() {
        // 浅克隆一份
        const subs = this.subs.slice();
        // 遍历
        for (let i = 0, l = subs.length; i < l; i++) {
            subs[i].update();
        }
    }
}
