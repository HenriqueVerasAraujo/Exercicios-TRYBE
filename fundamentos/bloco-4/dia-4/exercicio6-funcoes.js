let varN = 5;

function sumN(N) {
    let soma = 0;
    for (let index = 0; index <= N; index += 1) {
        soma += index;      
    }
    return soma
}
console.log(sumN(varN));