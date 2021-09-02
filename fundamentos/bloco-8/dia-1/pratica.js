// const numberGenerator = () => {
//     return Math.random() * 100;
//   }
  
//   console.log(numberGenerator);

// 1.
const wakeUp = () => 'Acordando!!';
const coffeTime = () => 'Bora tomar café!!';
const bedTime = () => 'Partiu dormir!!';
const todoList = (act) => console.log(act());

todoList(wakeUp);
todoList(coffeTime);
todoList(bedTime);