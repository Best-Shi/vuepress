export default function parseAttrsString(str) {
    if (str == undefined) return [];

    let temp = str.trim();
    let isYinhao = false;
    let point = 0;
    let result = [];
    for (let i = 0; i < temp.length; i++) {
        let char = temp[i];

        if (char === "'") {
            isYinhao = !isYinhao;
        } else if (char === " " && !isYinhao) {
            result.push(temp.substring(point, i).trim());
            point = i;
        }
    }
    result.push(temp.substring(point).trim());

    result = result.map((item) => {
        const val = item.match(/^(.+)=['"](.+)['"]$/);
        return {
            name: val[1],
            value: val[2],
        };
    });

    return result;
}
