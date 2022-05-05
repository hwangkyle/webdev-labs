const makeBigger = () => {
   let el = document.querySelector('.content');
   let style = window.getComputedStyle(el, null).getPropertyValue('font-size');
   let fontSize = parseFloat(style); 
   el.style.fontSize = (fontSize + 1) + 'px';
};

const makeSmaller = () => {
   let el = document.querySelector('.content');
   let style = window.getComputedStyle(el, null).getPropertyValue('font-size');
   let fontSize = parseFloat(style); 
   el.style.fontSize = (fontSize - 1) + 'px';
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

