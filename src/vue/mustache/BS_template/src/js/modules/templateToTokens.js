/**
 * 将模板字符串变成tokens数组，返回tokens数组
 */

import Scanner from "./Scanner.js";
import nestTokens from "./nestTokens.js";

export default function templateToTokens(templateStr) {
    let tokens = [];

    let scanner = new Scanner(templateStr);
    let words;

    while (scanner.eos()) {
        // 收集开始标记前的字符
        words = scanner.scanUtil("{{");
        if (words !== "") {
            // 去除标签以外的空格
            let isTrim = false;
            let _words = "";
            for (let i = 0; i < words.length; i++) {
                // 判断是否在标签里
                if (words[i] === "<") {
                    isTrim = true;
                } else if (words[i] === ">") {
                    isTrim = false;
                }
                // 如果不是空格，拼接上
                if (!/\s/.test(words[i])) {
                    _words += words[i];
                } else {
                    // 如果是空格，且在标签内才拼接上
                    if (isTrim) {
                        _words += " ";
                    }
                }
            }
            // 去掉空格后的符存到tokens中
            tokens.push(["text", _words]);
        }
        // 跳过双大括号
        scanner.scan("{{");

        // 收集{{}}中间的东西
        words = scanner.scanUtil("}}");
        if (words !== "") {
            if (words[0] === "#") {
                tokens.push(["#", words.substring(1)]);
            } else if (words[0] === "/") {
                tokens.push(["/", words.substring(1)]);
            } else {
                tokens.push(["name", words]);
            }
        }
        scanner.scan("}}");
    }

    // 返回折叠的tokens
    // return tokens;
    return nestTokens(tokens);
}
