const naoUrgente = document.querySelector(".no-emergency-tasks");
naoUrgente.style.backgroundColor = "yellow"
const urgente = document.querySelector(".emergency-tasks");
urgente.style.backgroundColor = "pink"

const headerH3 = document.querySelectorAll("h3");
for (let index = 0; index < headerH3.length; index += 1){
  headerH3[index].style.backgroundColor = "black";
}
console.log(headerH3)
// const emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');
// for (let index = 0; index < emergencyTasksHeaders.length; index += 1) {
//   emergencyTasksHeaders[index].style.backgroundColor = 'rgb(165, 0, 243)';