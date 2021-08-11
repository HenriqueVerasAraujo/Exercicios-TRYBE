//Constants//
const firstLi = document.getElementById('firstLi');
const secondLi = document.getElementById('secondLi');
const thirdLi = document.getElementById('thirdLi');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

//Event Listeners//
firstLi.addEventListener('mouseover', addTech);
secondLi.addEventListener('mouseover', addTech);
thirdLi.addEventListener('mouseover', addTech);
input.addEventListener('input',subText);
myWebpage.addEventListener('dblclick', redirect);
myWebpage.addEventListener('mouseover', colorChange);
myWebpage.addEventListener('mouseout', coloroff);

//Functions//
function addTech(e) {
    let previousTech = document.getElementsByClassName('tech')[0];
    previousTech.classList.remove('tech');
    e.target.className = 'tech';
}

function subText(event) {
    let previousTech2 = document.getElementsByClassName('tech')[0];
    previousTech2.innerText = event.target.value;
}

function redirect() {
    window.location.replace("https://www.youtube.com/");
}

function colorChange(e) {
    e.target.style.color = "red";
}
function coloroff(e) {
    e.target.style.color = "white";
}

/*
 Copie esse arquivo e edite apenas ele;
 Crie uma função que adicione a classe 'tech' ao elemento selecionado;
1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
 Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';
 Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
1. Que tal redirecionar para seu portifólio?
 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.