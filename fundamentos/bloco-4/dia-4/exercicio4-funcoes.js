let arrayTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
    

function maiorNome (arrayNomes) {
    let nomeMaior = arrayNomes[0];
    for (let index in arrayNomes) {
        if(nomeMaior.length < arrayNomes[index].length) {
            nomeMaior = arrayNomes[index];
        }      
    }
    return nomeMaior;
};
console.log(maiorNome(arrayTeste));
