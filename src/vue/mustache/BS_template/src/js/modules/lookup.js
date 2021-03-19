/**
 * 函数功能: 可以再obj对象中，寻找连续点符合的keyName属性
 */

export default function lookup(obj, keyName) {
    if (keyName.indexOf(".") > 0 && keyName !== ".") {
        let keys = keyName.split(".");
        let temp = obj;

        for (let i = 0; i < keys.length; i++) {
            temp = temp[keys[i]];
        }
        return temp;
    }
    return obj[keyName];
}
