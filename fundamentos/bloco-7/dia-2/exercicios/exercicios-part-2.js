const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };
// 1.
  function newShift(lesson, shift, shiftValue) {
      lesson[shift] = shiftValue;
      console.log(lesson);
  }
  newShift(lesson2, 'turno', 'manhã');

// 2.
  const allKeys = lesson => {console.log(Object.keys(lesson));}
allKeys(lesson1);

// 3.
  const objectLength = lesson => {console.log(Object.keys(lesson).length);}
objectLength(lesson1);

// 4.
const allValues = lesson => {console.log(Object.values(lesson));}
allValues(lesson1);

// 5.
let allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

// 6.
function allStudents() {
    let studentsSum = lesson1.numeroEstudantes + lesson2.numeroEstudantes + lesson3.numeroEstudantes;
    console.log(studentsSum);
}
allStudents();

// 7.
function getElementByNumber(object, position) {
    console.log(Object.values(object)[position])
}
getElementByNumber(lesson1, 0);

// 8.
function verifyData(object, key, value) {
    if (object[key] === value) {
       console.log(true);
    } else {
        console.log(false);
    }
}
verifyData(lesson1, 'numeroEstudantes', 20);
