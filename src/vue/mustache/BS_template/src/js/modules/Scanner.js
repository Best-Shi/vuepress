/**
 * 扫描类
 */

export default class Scanner {
    constructor(templageStr) {
        this.templageStr = templageStr;
        // 指针
        this.pos = 0;
        // 尾巴
        this.tail = templageStr;
    }

    scan(tag) {
        if (this.tail.indexOf(tag === 0)) {
            // tag 有多长就让指针后移多少位
            this.pos += tag.length;
            // 改变尾巴
            this.tail = this.templageStr.substring(this.pos);
        }
    }

    // 让指针进行扫描，直到遇见指定内容结束，并且放回之前路过的字符。
    scanUtil(stopTag) {
        // 记录方法执行前的pos值
        const posStart = this.pos;

        // 当尾巴不是stopTag的时候，说明还没扫描到stopTag
        while (this.eos() && this.tail.indexOf(stopTag) !== 0) {
            // 移动指针
            this.pos++;
            // 改变尾巴
            this.tail = this.templageStr.substring(this.pos);
        }

        // 返回指针经过的字符串
        return this.templageStr.substring(posStart, this.pos);
    }

    // 判断指针是否到头，返回布尔值  end of string
    eos() {
        return this.pos <= this.templageStr.length;
    }
}
