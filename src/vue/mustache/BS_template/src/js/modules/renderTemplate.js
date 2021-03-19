/**
 * 函数功能：让tokens数组转换为dom字符串
 */

import lookup from "./lookup.js";

export default function renderTemplate(tokens, data) {
    let resultStr = "";
    // 遍历tokens
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];
        // 判断类型
        if (token[0] === "text") {
            resultStr += token[1];
        } else if (token[0] === "name") {
            resultStr += lookup(data, token[1]);
        } else if (token[0] === "#") {
            resultStr += parseArray(token, data);
        }
    }
    return resultStr;
}

/**
 * 处理数组，结合renderTemplate实现递归
 */
function parseArray(token, data) {
    // 得到整体数据中要使用的部分
    let val = lookup(data, token[1]);
    let resultStr = "";
    // 遍历val数组
    for (let i = 0; i < val.length; i++) {
        resultStr += renderTemplate(token[2], {
            // 相当于val[i]本身
            ...val[i],
            // 补充一个 . 属性
            ".": val[i],
        });
    }
    return resultStr;
}
