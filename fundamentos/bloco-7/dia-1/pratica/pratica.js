function contaPalavras(frase) {
    let numeroPalavras = frase.split(' ').length;
    return numeroPalavras;
   
}
console.log(contaPalavras('fala tribo, beleza?'));

// arrow function

const arrow = frase => frase.split(' ').length;
console.log(arrow('fala tribo, beleza?'));