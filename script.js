// Doctype é o document
const divPai = document.querySelector('#pixel-board');

const black = document.querySelector('#black');
const yellow = document.querySelector('#yellow');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');

for (let i = 1; i <= 25; i += 1) {
  const div = document.createElement('div');
  div.classList.add('pixel');
  // div.addEventListener('click', function () {});
  divPai.appendChild(div);
}

function handleChangeSelected(event) {
  // Esses três passos só irão acontecer, se o usuário clicar em uma das cores
  const selected = document.querySelector('.selected'); // Primeiro passo: busca a classe Selected
  selected.classList.remove('selected'); // Segundo passo: Remove a classe
  event.target.classList.add('selected'); // Terceiro passo: adicionar a classe Selected no elemento clicado
}
// Esses escutadores de eventos estão programados p chamar a função (handle...) se eu clicar em algum dos 4 elemntos abaixo
black.addEventListener('click', handleChangeSelected);
yellow.addEventListener('click', handleChangeSelected);
green.addEventListener('click', handleChangeSelected);
blue.addEventListener('click', handleChangeSelected);
// Aqui em baixo eu fiz uma função de pintar os pixels com a cor da classe 'selected'
function pintarPixel(event) {
  // event é um parametro qualquer
  if (event.target.classList.contains('pixel')) {
    // contains = incluir, acomodar -- (Dicas do projeto: event bubbling,
    // aqui eu restringi para acontecer só onder for pixel, para não precisar criar 25 escutadores)
    const selected = document.querySelector('.selected'); // o elemento que eu quero ver
    const objCssSelected = window.getComputedStyle(selected, null); // Objeto CSS
    const cor = objCssSelected.getPropertyValue('background-color'); // Vasculhei pelo valor da background-color
    const { target } = event; // salvei envet.target numa variável
    target.style.backgroundColor = cor;
  }
}

document.addEventListener('click', pintarPixel); // document seria todo o arquivo html

const getLimpar = document.getElementById('clear-board');
// Criei o escutador de eventos do botão Limpar.
getLimpar.addEventListener('click', () => {
  const pixels = document.querySelectorAll('.pixel'); // Aqui eu selecionei as divs que possuem a classe pixel
  for (let index = 0; index < pixels.length; index += 1) {
    // Criei o for para percorrer o array de pixels(nodelist)
    pixels[index].style.backgroundColor = 'white'; // O estilo do background-color da posição do indice percorrido no for será modificado para branco
  }
});
