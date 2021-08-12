//constants//
const daysUl = document.getElementById("days");
const buttonClass = document.querySelector('.buttons-container');


//events//



//functions//

  //Função de criação dos nomes dos dias da semana na parte superior do calendario//
  function createDaysOfTheWeek() {
      const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
      const weekDaysList = document.querySelector('.week-days');
  
      for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
      };
  };
  
  createDaysOfTheWeek();
//Função de criação dos numeros dos dias do mês//
function greatDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  for (let index in dezDaysList) {
    let newDay = dezDaysList[index];
    let newLi = document.createElement('li');
    newLi.innerHTML = newDay;
    newLi.className = 'day';
    if (dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31) {
      newLi.className += ' ' + 'holiday';
    }
    if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25) {
      newLi.className += ' ' + 'friday';
    }
    daysUl.appendChild(newLi);
  }
}
greatDays();

//Função para criar o botão "Feriados"//
function buttonGen() {
  let newButton = document.createElement('button');
  newButton.id = 'btn-holiday';
  newButton.innerHTML = "Feriados";
  buttonClass.appendChild(newButton);
}
buttonGen();

//Função para mudar a cor dos dias de classe "holiday" para verde ao 

const buttonFeriado = document.getElementById('btn-holiday');
buttonFeriado.addEventListener('click', greenDays);
// [DÚVIDA] Por quê isso funciona?//
// buttonFeriado.addEventListener('click', function() {greenDays()});

//[Dúvida] Por quê a função vazia "()" é aplicada ao carregar a página?//
function greenDays() {
  let allFeriados = document.querySelectorAll('.holiday');
  for (let index = 0; index < allFeriados.length; index += 1) {
    if (allFeriados[index].style.backgroundColor === "green") {
      allFeriados[index].removeAttribute('style');
    }else{
    allFeriados[index].style.backgroundColor = "green";
    allFeriados[index].style.color = "white";
    allFeriados[index].style.borderRadius = "6px";
    }
  }
}

//Função para criação do botão "Sexta-feira"//

function buttonGenFriday() {
  let newButton2 = document.createElement('button');
  newButton2.id = 'btn-friday';
  newButton2.innerHTML = 'Sexta-feira';
  buttonClass.appendChild(newButton2);
}
buttonGenFriday()

//Dando funcionalidade ao botão "Sexta-feira//
const btnFriday = document.getElementById('btn-friday');
btnFriday.addEventListener('click', buttonFriday);
let fridayDays = [4, 11, 18, 25];
function buttonFriday() {
  let allFridays = document.querySelectorAll('.friday');
  for (let index = 0; index < allFridays.length; index += 1) {
    if(allFridays[index].innerHTML === "Sextou!"){
      allFridays[index].innerHTML = fridayDays[index];
    }else{
      allFridays[index].innerHTML = "Sextou!";  
    }
  }
}

//Função de zoom in nos numeros com mouseover e zoom out com mouseout//
const allNumbers = document.getElementsByClassName('day');
for (let index = 0; index < allNumbers.length; index += 1) {
  allNumbers[index].addEventListener('mouseover', zoomInNumbers);
  allNumbers[index].addEventListener('mouseout', zoomOutNumbers);
}
function zoomInNumbers(e) {
  let numeroAtual = e.target;
  numeroAtual.style.transform = 'scale(1.5)';
  numeroAtual.style.transition = '0.5s';
}
function zoomOutNumbers(e) {
  let numeroAtual = e.target;
  numeroAtual.style.transform = 'scale(1.0)';
  numeroAtual.style.transition = '0.5s';
}

//Função de adicionar tarefas à lista de tarefas e legendas//
function addTask(t, c) {
  const listaDeTarefas = document.querySelector('.my-tasks');
  let createSpan = document.createElement('span');
  createSpan.innerText = t;

  listaDeTarefas.appendChild(createSpan);
  let createSub = document.createElement('div');
  createSub.className = 'task';
  createSub.style.backgroundColor = c;
  listaDeTarefas.appendChild(createSub);
  let createLineBreak = document.createElement('br');
  listaDeTarefas.appendChild(createLineBreak);
}
let tarefasArrey = ['Passar as roupas:', 'Tomar banho:', 'Escovar os dentes:','Estudar:'];
let coresArrey = ['blue', 'red', 'green', 'yellow'];
for(let index in tarefasArrey) {
  addTask(tarefasArrey[index], coresArrey[index]);
}

// Função para adicionar a classe 'task-selected' nas divs//
const listaDeTarefas = document.querySelector('.my-tasks')
// for (let index = 0; index < listaDeTarefas.length; index += 1) {
listaDeTarefas.addEventListener('click', addClassTask);
let selected = document.querySelectorAll('.taskSelected');
function addClassTask (e) {
  let alvo = e.target;
  if(alvo.className === 'task') {
    alvo.className = 'taskSelected'
    selected.className = 'task'
    selected = alvo
  }else if (alvo.className === 'taskSelected') {
    alvo.className = 'task'
  }
}




