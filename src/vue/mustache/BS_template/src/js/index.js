import templateToTokens from "./modules/templateToTokens.js";
import renderTemplate from "./modules/renderTemplate.js";

let container = document.getElementById("container");

// let templateStr = `
//           <ul>
//             {{#arr}}
//             <li class='item'>
//                 {{name}} 的爱好是:
//                 <ol>
//                     {{#hobbies}}
//                     <li>{{.}}</li>
//                     {{/hobbies}}
//                 </ol>
//             </li>
//             {{/arr}}
//         </ul>
//         `;

// let data = {
//     arr: [
//         { name: "小明", age: 12, hobbies: ["抽烟", "喝酒", "烫头"] },
//         { name: "小红", age: 11, hobbies: ["看书", "游泳"] },
//         { name: "小强", age: 13, hobbies: ["王者荣耀", "吃鸡"] },
//     ],
// };

let templateStr = "<h1>我买了一个{{thing}}，花了{{a.b}}元，好{{mood}}啊!</h1>";

let data = {
    thing: "华为手机",
    mood: "开心",
    a: {
        b: 12,
    },
};

function BS_template_render(templateStr, data) {
    let tokens = templateToTokens(templateStr);
    let domSrt = renderTemplate(tokens, data);
    return domSrt;
}

let domSrt = BS_template_render(templateStr, data);

container.innerHTML = domSrt;
