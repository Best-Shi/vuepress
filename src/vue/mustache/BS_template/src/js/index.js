import { render } from "../../../js/mustache.js";
import Scanner from "./modules/Scanner.js";

let container = document.getElementById("container");

console.log(container);

let templateStr = "<h1>我买了一个{{thing}}, 好{{mood}}啊!</h1>";

let data = {
    thing: "华为手机",
    mood: "开心",
};

function BS_template_render(templateStr, data) {
    let scanner = new Scanner(templateStr);
    let words;
    while (!scanner.eos()) {
        words = scanner.scanUtil("{{");
        scanner.scan("{{");
        console.log(words);
        words = scanner.scanUtil("}}");
        scanner.scan("}}");
        console.log(words);
    }
}

BS_template_render(templateStr);
