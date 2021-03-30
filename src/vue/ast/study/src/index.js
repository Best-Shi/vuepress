import parse from "./parse.js";

const templateString = `<div>
 <h3 class='active text' id='hello'>你好</h3>
 <ul>
     <li>A</li>
     <li>B</li>
     <li>C</li>
 </ul> 
</div>
 `;

const ast = parse(templateString);
console.log(ast);
