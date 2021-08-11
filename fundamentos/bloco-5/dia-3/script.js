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
