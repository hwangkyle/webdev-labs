/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/
const df = () => {
   document.querySelector("body").setAttribute('class', '');
}
const ds = () => {
   document.querySelector("body").setAttribute('class', 'desert');
}
const o = () => {
   document.querySelector("body").setAttribute('class', 'ocean');
}
const h = () => {
   document.querySelector("body").setAttribute('class', 'high-contrast');
}

document.querySelector("button#default").addEventListener('click', df);
document.querySelector("button#desert").addEventListener('click', ds);
document.querySelector("#ocean").addEventListener('click', o);
document.querySelector("#high-contrast").addEventListener('click', h);