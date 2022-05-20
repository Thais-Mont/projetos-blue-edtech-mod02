let novoBg = document.getElementById('img_bg'); 
let novoEst = document.getElementById('estado');
let novaImg = document.querySelector('#imagem'); 
let botao = document.querySelector('.btn'); 

let h = screen.height;
let novaheight = document.querySelector("main").style.height;
novaheight = h;

let arrayImagens = [];
for (let index = 0; index < 7; index++) { 
  arrayImagens.push(`./assets/img/super${index}.png`)
}

let arrayBg = [];
for (let index = 0; index < 7; index++) { 
  arrayBg.push(`./assets/img/bg-sup${index}.png`)
}

let sit0 = "Normal";
let sit1 = "Super Sayajin";
let sit2 = "Super Sayajin 2";
let sit3 = "Super Sayajin 3";
let sit4 = "Super Sayajin 4";
let sit5 = "Super Sayajin Deus";
let sit6 = "Super Sayajin Blue";
let arraySit = [sit0, sit1, sit2, sit3, sit4, sit5, sit6]

botao.addEventListener('click', () =>{

  let posicao = parseInt(novoBg.getAttribute("position"));
  if (posicao + 1 >= arrayBg.length)
    posicao = -1
    posicao++
  novoBg.src = arrayBg[posicao];
  novaImg.src = arrayImagens[posicao];
  novoEst.innerText = arraySit[posicao];
  novoBg.setAttribute("position", posicao)
  novaImg.setAttribute("position", posicao)
})
