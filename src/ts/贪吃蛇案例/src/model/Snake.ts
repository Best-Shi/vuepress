import { width, height, message } from '../config'

class Snake {
    // 蛇的容器
    element: HTMLElement
    // 蛇头
    head: HTMLElement
    // 身体
    bodies: HTMLCollection

    constructor() {
        this.element = document.getElementById('snake')!
        this.head = this.element.querySelector('div')!
        this.bodies = this.element.getElementsByTagName('div')
    }

    // 获取蛇头X坐标
    get X() {
        return this.head.offsetLeft
    }
    // 获取蛇头Y坐标
    get Y() {
        return this.head.offsetTop
    }

    // 设置蛇头X坐标
    set X(value: number) {
        // 如果新值和旧值相同, 直接返回 不再修改
        if (this.X === value) {
            return
        }
        // 判断蛇是否撞墙
        if (value < 0 || value > width) {
            throw new Error(message.strike)
        }

        // 禁止蛇掉头
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            if (value > this.X) {
                value = this.X - 10
            } else {
                value = this.X + 10
            }
        }

        this.moveBody()
        this.head.style.left = value + 'px'
        this.checkHeadBody()
    }
    // 设置蛇头Y坐标
    set Y(value: number) {
        // 如果新值和旧值相同, 直接返回 不再修改
        if (this.Y === value) {
            return
        }
        if (value < 0 || value > height) {
            throw new Error(message.strike)
        }

        // 禁止蛇掉头
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            if (value > this.Y) {
                value = this.Y - 10
            } else {
                value = this.Y + 10
            }
        }

        this.moveBody()
        this.head.style.top = value + 'px'
        this.checkHeadBody()
    }

    // 蛇增加身体
    addBody() {
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }

    // 蛇移动身体
    moveBody() {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            // 获取前边身体位置
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

            // 设置当前身体位置
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px'
        }
    }
    checkHeadBody() {
        // 获取所有身体, 检查是否和蛇头坐标发生重叠
        for (let i = 1; i < this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement;
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                throw new Error(message.overlap)
            }
        }
    }
}

export default Snake