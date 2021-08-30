// function newObject(object,newKey,newValue){
//     object[newKey] = newValue;
//     console.log(object);
// }
// let car = {
//     color: 'red',
// }
// newObject(car, 'ano', 1991);

// console.log(Object.keys(car));

// // EXERCICIO 2:

// const student1 = {
//     Html: 'Muito Bom',
//     Css: 'Bom',
//     JavaScript: 'Ótimo',
//     SoftSkills: 'Ótimo',
//   };
  
//   const student2 = {
//     Html: 'Bom',
//     Css: 'Ótimo',
//     JavaScript: 'Ruim',
//     SoftSkills: 'Ótimo',
//     Git: 'Bom', // chave adicionada
//   };

//   function newObject(object) {
//       const objectKeys = Object.keys(object);
//       const objectValues = Object.values(object);
//       for (let index in objectKeys) {
//           console.log(`${objectKeys[index]}: ${objectValues[index]}`);
//       }
//   }
//   newObject(student1);

// EXERCÍCIO 3:

// const coolestTvShow = {
//     name: "BoJack Horseman",
//     genre: "adult animation",
//     createdBy: "Raphael Bob-Waksberg",
//     favoriteCharacter: "Princess Carolyn",
//     quote: "Princess Carolyn always lands on her feet.",
//     seasons: 6,
//   };
  
// //   console.log(Object.entries(coolestTvShow));
//   const map = new Map(Object.entries(coolestTvShow));
//   console.log(map);

  const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
  };
  const pairKeyValue = Object.entries(países);
  console.log(pairKeyValue);

  for(index in pairKeyValue) {
    console.log('--------');
    console.log('País:', pairKeyValue[index][0]);
    console.log('Capital:', pairKeyValue[index][1]);
  };