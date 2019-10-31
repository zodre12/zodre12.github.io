var json2html = require("node-json2html");

let data = {
    "name": "Issei",
    "age": 21,
};
let transform = {
    '<>': 'div', 'html': [
        {'<>': 'h1' ,'html': "${name}"},
        {'<>' : 'h1' , 'html': "age: ${age}"}
    ]
};
let html = json2html.transform(data, transform);
console.log(html);