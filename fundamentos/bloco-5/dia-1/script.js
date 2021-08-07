document.getElementsByTagName("p")[1].innerText = "Formado e trabalhando"
document.getElementsByClassName("main-content")[0].style.backgroundColor = "rgb(76,164,109)"
document.getElementsByClassName( "center-content")[0].style.backgroundColor = "white"
document.getElementsByClassName("title")[0].innerText = "Exercício 5.1 - JavaScript"

const letraMaior = document.getElementsByTagName("p");
for (let in letraMaior) {
letraMaior[i].style.textTransform = uppercase;
}
function showParagraphs() {
    let paragraphs = document.getElementsByTagName('p');
    for (let index = 0; index < paragraphs.length; index += 1) {
      console.log(paragraphs[index].innerHTML);