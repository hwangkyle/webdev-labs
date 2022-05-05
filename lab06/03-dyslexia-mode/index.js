/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/
const d = () => {
  let e = document.querySelector("body");
  if (e.className == '') e.setAttribute('class', 'dyslexia-mode');
  else e.setAttribute('class','');
}

document.querySelector("#dyslexia-toggle").addEventListener('click', d);