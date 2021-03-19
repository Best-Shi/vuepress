/**
 *
 * 将扁平的tokens数组按模板引擎转换成嵌套数组
 */
export default function nestTokens(tokens) {
    let nestedTokens = [];
    let sections = [];
    let collector = nestedTokens;

    let token;
    for (let i = 0; i < tokens.length; i++) {
        token = tokens[i];

        switch (token[0]) {
            case "#":
                // 收集器中放入token
                collector.push(token);
                // 入栈
                sections.push(token);
                // 改变收集器
                collector = token[2] = [];
                break;
            case "/":
                // 出栈
                sections.pop();
                // 改边收集器为栈结构队列
                collector =
                    sections.length > 0
                        ? sections[sections.length - 1][2]
                        : nestedTokens;
                break;
            default:
                collector.push(token);
        }
    }

    // return tokens;
    return nestedTokens;
}
