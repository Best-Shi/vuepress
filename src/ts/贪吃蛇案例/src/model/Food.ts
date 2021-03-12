import { width, height } from '../config'
class Food {
    // 定义食物对应的元素
    element: HTMLElement

    constructor() {
        // 获取页面中的food元素
        this.element = document.getElementById('food')!
    }

    // 获取食物X轴坐标
    get X() {
        return this.element.offsetLeft
    }

    // 获取食物Y轴坐标
    get Y() {
        return this.element.offsetTop
    }

    // 修改食物的位置
    change() {
        // 生成随机位置
        let left = Math.round(Math.random() * (width / 10)) * 10
        let top = Math.round(Math.random() * (height / 10)) * 10
        // 设置位置
        this.element.style.left = left + 'px'
        this.element.style.top = top + 'px'
    }
}

export default Food


