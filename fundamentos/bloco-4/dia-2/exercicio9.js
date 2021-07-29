let newArray = []
for (let index = 1; index <= 25; index += 1) {
    newArray.push(index);
}
meioNewArray = []
for (let index2 = 0; index2 < newArray.length; index2 += 1){
    let divisãoDoValor = newArray[index2] / 2;
    meioNewArray.push(divisãoDoValor);
}
console.log(meioNewArray);
