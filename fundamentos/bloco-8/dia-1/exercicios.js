// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .


// const newEmployees = () => {
//     const employees = {
//       id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//       id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//       id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//     }
//     return employees;
//   };


// const newUser = (fullName) => {
//     const newPerson = {
//         usuario: fullName,
//         email: `${fullName.toLowerCase().split(' ').join('_')}@betrybe.com`,
//     }
//     return newPerson;
// }

// const newEmployees = (userGenerator) => {
//     const employees = {
//         id1: userGenerator('Pedro Guerra'),
//         id2: userGenerator('Luiza Drumond'),
//         id3: userGenerator('Carla Paiva'),
//     }
//     return employees
// }
// console.log(newEmployees(newUser));


// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

// const returnResult = (number, checkFunction) => {
//     const sorteio = Math.ceil(Math.random() * 5);
//     const result = checkFunction(number, sorteio);
//     return result
// }
// const numberCheck = (number, sorteio) => {
//     if (number === sorteio) {
//         console.log(sorteio);
//         return "Parabéns, você ganhou.";
//     } else {
//         console.log(sorteio);
//         return "Tente novamente.";
//     };
// }
// console.log(returnResult(3, numberCheck));


// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const corretor = (gabarito, minhasRespostas) => {
//     let result = 0;
//     for (let index = 0; index < gabarito.length; index += 1) {
//         if (minhasRespostas[index] === 'N.A') {
//             result = result
//         } else if (gabarito[index] === minhasRespostas[index]) {
//             result += 1;
//         } else {
//             result -= 0.5;
//         } 
//     }
//     return result;
// }
// const myHOF = (gabarito, minhasRespostas, callBack) => {
//     const finalResult = callBack(gabarito, minhasRespostas);
//     return `Sua nota final é: ${finalResult}.`;
// }
// console.log(myHOF(RIGHT_ANSWERS, STUDENT_ANSWERS, corretor));


// BONUS:
// Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.

const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: 0,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: 0,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: 0,
  };
  
  const battleMembers = { mage, warrior, dragon };

//   1 - Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
const dragonAttack = () => Math.ceil(Math.random() * (50 - 15) + 15);

// 2 - Crie uma função que retorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
const warriorAttack = () => Math.ceil(Math.random() * (60 - 30) + 30);

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.
const mageAttack = () => {
    let mageMagicMissile = {
        dano: Math.ceil(Math.random() * (90 - 45) + 45),
        mana: 15,
    }
    if (mage.mana < 15) {
        return "Not enough mana!"
    } else {
        mage.mana -= 15;
        return mageMagicMissile.dano;
    }
}

// Parte II
// Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, passe-as como parâmetro para outras funções que irão compor um objeto gameActions . O objeto será composto por ações do jogo e cada ação é por denifição uma HOF , pois neste caso, são funções que recebem como parâmetro outra função.

// Copie o código abaixo e inicie sua implementação:

//   1 - Crie a primeira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem warrior . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor da chave damage do warrior .
const warriorAction = (attack) => {
    const warriorDamage = attack();
    // console.log(warriorDamage);
    dragon.healthPoints -= warriorDamage;
    warrior.damage = warriorDamage;
}

// 2 - Crie a segunda HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem mage . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor das chaves damage e mana do mage.
const mageAction = (attack) => {
    const mageDamage = attack();
    dragon.healthPoints -= mageDamage;
    mage.damage = mageDamage;
}

// 3 - Crie a terceira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do monstro dragon . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior . Além disto ela também deve atualizar o valor da chave damage do monstro.
const dragonAction = (attack) => {
    const dragonDamage = attack();
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
}

// 4 - Adicione ao objeto gameActions uma função que retorne o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.
function battleLog() {
    console.log(`Warrior: (HealthPoints: ${warrior.healthPoints}, Damage: ${warrior.damage})`);
    console.log(`Mage: (HealthPoints: ${mage.healthPoints}, Damage: ${mage.damage})`);
    console.log(`Dragon: (HealthPoints: ${dragon.healthPoints}, Damage: ${dragon.damage})`);
}

const gameActions = {
    warriorTurn: warriorAction,
    mageTurn: mageAction,
    dragonTurn: dragonAction,
    oneTurn: battleLog,
}

function fightTurn() {
    gameActions.warriorTurn(warriorAttack);
    gameActions.mageTurn(mageAttack);
    gameActions.dragonTurn(dragonAttack);
    gameActions.oneTurn();
}

const arrayMembers = [warrior, mage, dragon];
const arrayMembersName = ['warrior', 'mage', 'dragon'];
function battle() {
    fightTurn();
    for (let index = 0; index < arrayMembers.length; index += 1) {
        if (arrayMembers[index].healthPoints <= 0) {
            console.log(`${arrayMembersName[index]} is dead!`)
        }
    }
    if (warrior.healthPoints > 0 && mage.healthPoints > 0 && dragon.healthPoints > 0) {
        console.log('A batalha continua!');
        console.log(' ')
        return 'continue';
    } else{
        console.log('A luta terminou!');
        return 'end';
    }
}
function fullBattle() {
    battle();
    if (battle() === 'continue') {
        fullBattle()
    }
}
gameActions.oneTurn();
console.log(' ');
console.log('É iniciada a batalha!')
console.log(' ');
fullBattle();