let valorCusto = 10;
let valorVenda = 200;

if (valorCusto < 0 || valorVenda < 0){
    console.log("Valores invalidos");
} else {
    valorCusto *= 1.2;
    let lucro = valorVenda - valorCusto;
    console.log("O lucro da venda é de "+ lucro + "R$.");
}