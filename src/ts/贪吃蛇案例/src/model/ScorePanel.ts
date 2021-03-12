import { maxLevel, upScore } from '../config'

class ScorePanel {
    // 记录分数和等级
    score = 0;
    level = 1;
    // 分数和等级所在得元素
    scoreEl: HTMLElement;
    levelEl: HTMLElement;

    // 限制等级
    maxLevel: number = maxLevel

    // 多少分数升级
    upScore: number = upScore

    constructor() {
        this.scoreEl = document.getElementById('score')!
        this.levelEl = document.getElementById('level')!
    }

    // 加分方法
    addScore() {
        this.scoreEl.innerHTML = ++this.score + ''
        // 判断分数提升等级
        if (this.score % this.upScore === 0) {
            this.levelUp()
        }
    }

    // 提升等级的方法
    levelUp() {
        if (this.level < this.maxLevel) {
            this.levelEl.innerHTML = ++this.level + ''
        }
    }
}

export default ScorePanel