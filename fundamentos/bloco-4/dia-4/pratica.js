// let personInfo = {
//     name: "Marta",
//     lastName: "Silva",
//     age: 34,
//     medals: {
//         golden: 2,
//         silver: 3
//     }
// };
// console.log("A jogadora " + personInfo.name + " " + personInfo.lastName + " tem " + personInfo.age + " anos de idade.");

// personInfo["bestInTheWorld"] = [2006, 2007, 2008, 2009, 2010, 2018];
// console.log(personInfo);

// console.log("A jogadora " + personInfo.name + " " + personInfo.lastName + " foi eleita a melhor do mundo por " + personInfo["bestInTheWorld"].length + " vezes.");

// console.log("A jogadora possui " + personInfo["medals"].golden + " medalha(s) de ouro e " + personInfo["medals"].silver + " medalhas de prata.")

// Pratica de arrays em for/in //

// let car = {
//     type: 'Fiat',
//     model: '500',
//     color: 'white',
//   };
  
//   for (let key in car) {
//     console.log(key, car[key]);
//   }

// exemplo para testar for/in e for/of:

//   let numeros = [1, 4, 6, 7, 9]
//   for (let numero in numeros) {
//       console.log( numeros[numero])
//   };

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge' 
//   };

// for (let person in names) {
//     console.log("Olá, " + names[person]);
// };


let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
  for(let carro in car) {
      console.log(carro + ": " + car[carro])
  }