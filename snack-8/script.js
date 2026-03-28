const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

// Method forEach to find class for Marco Lanci student

let class_student // variable initialization to save class
students.forEach((element) => {
  if (element.name == "Marco Lanci"){
    class_student = element.class
  }
})
console.log(class_student) //print results