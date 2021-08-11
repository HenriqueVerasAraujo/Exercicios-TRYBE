const firstLi = document.getElementById('firstLi');
const secondLi = document.getElementById('secondLi');
const thirdLi = document.getElementById('thirdLi');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');




//EVENTS//
firstLi.addEventListener('mouseover', addtech);
secondLi.addEventListener('mouseover', addtech);
thirdLi.addEventListener('mouseover', addtech);

input.addEventListener('input', typeTech);

myWebpage.addEventListener('dblclick', redirectTrybefy);

myWebpage.addEventListener('mouseover', colorChange);
myWebpage.addEventListener('mouseout', colorChangeBack);


//FUNCTIONS//
function addtech(e) {
   let previusTech = document.getElementsByClassName('tech')[0];
   previusTech.removeAttribute('class','tech');
   e.target.className = 'tech';
}

function typeTech(e) {
    let newText = e.target.value
    let previusTech = document.getElementsByClassName('tech')[0];
    previusTech.innerText = newText;
}

function redirectTrybefy() {
    window.location.assign("https://www.youtube.com/");
}
function colorChange(e){
    e.target.style.color = "red";
}
function colorChangeBack(e){
    e.target.removeAttribute("style");
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

















































