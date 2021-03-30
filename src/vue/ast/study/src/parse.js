import parseAttrsString from "./parseAttrsString.js";

export default function parse(tempalateString) {
    // 指针
    let index = 0;
    // 剩余部分
    let rest = "";
    // 开始标记与结束标记正则
    let startRegExp = /^\<([a-z]+[1-6]?)(\s[^\<]+)?\>/;
    let endRegExp = /^\<\/([a-z]+[1-6]?)\>/;
    // 抓取结束标记前文字
    let wordRegExp = /^([^\<]+)\<\/[a-z]+[1-6]?\>/;
    // 栈
    let stack1 = [];
    let stack2 = [{ children: [] }];

    while (index < tempalateString.length - 1) {
        rest = tempalateString.substring(index);

        if (startRegExp.test(rest)) {
            let tag = rest.match(startRegExp)[1];
            let attrsString = rest.match(startRegExp)[2];
            stack1.push(tag);
            stack2.push({
                tag: tag,
                children: [],
                attrs: parseAttrsString(attrsString),
            });
            let attrsStringLength =
                attrsString != null ? attrsString.length : 0;
            index += tag.length + 2 + attrsStringLength;
        } else if (endRegExp.test(rest)) {
            let tag = rest.match(endRegExp)[1];
            if (tag === stack1[stack1.length - 1]) {
                stack1.pop();
                let pop_arr = stack2.pop();
                if (stack2.length > 0) {
                    stack2[stack2.length - 1].children.push(pop_arr);
                }
            } else {
                throw new Error("标签没有闭合");
            }
            index += tag.length + 3;
        } else if (wordRegExp.test(rest)) {
            let word = rest.match(wordRegExp)[1];
            if (!/^\s+$/.test(word)) {
                stack2[stack2.length - 1].children.push({
                    text: word,
                    type: 3,
                });
            }
            index += word.length;
        } else {
            index++;
        }
    }

    return stack2[0].children[0];
}
