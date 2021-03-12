import Snake from './Snake'
import Food from './Food'
import ScorePanel from './ScorePanel'
import Dialog from './Dialog'
import { initDirection } from '../config'

// 游戏控制器, 控制其它所有类
class GameControl {
    snake: Snake
    food: Food
    scorePanel: ScorePanel
    dialog: Dialog

    // 存储蛇的移动方向
    direction: string = initDirection

    // 记录游戏是否结束
    isLive: boolean = true


    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()
        this.dialog = new Dialog()
        this.init()
    }

    // 游戏初始化
    init() {
        document.addEventListener('keydown', this.keyDownHandler.bind(this))
        this.run()
    }

    // 键盘响应函数
    keyDownHandler(event: KeyboardEvent) {
        this.direction = event.key
    }

    // 控制蛇移动
    run() {
        let X = this.snake.X
        let Y = this.snake.Y

        switch (this.direction) {
            case 'ArrowUp':
            case 'Up':
                // 向上移动
                Y -= 10
                break
            case 'ArrowDown':
            case 'Down':
                // 向下移动
                Y += 10
                break
            case 'ArrowLeft':
            case 'Left':
                // 向左移动
                X -= 10
                break
            case 'ArrowRight':
            case 'Right':
                // 向右移动
                X += 10
                break
        }

        // 检测蛇是否吃到食物
        this.checkEat(X, Y)

        try {
            this.snake.X = X
            this.snake.Y = Y
        } catch (e) {
            // alert(e.message)
            this.isLive = false
            this.dialog.show(e.message)
        }

        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }

    // 检测谁否吃到食物
    checkEat(X: number, Y: number) {
        if (X === this.food.X && Y === this.food.Y) {
            this.food.change()
            this.scorePanel.addScore()
            this.snake.addBody()
        }
    }

}


export default GameControl