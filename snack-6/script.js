const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.

// Method filter to create arrays

const zucchine_15_cm = [] //list initialization for zucchine >=15 cm
const others_zucchine = [] // list initialization for zucchine <15 cm

zucchine.filter( element => {
  if (element.length >=15){
    zucchine_15_cm.push(element)
  }
  else{
    others_zucchine.push(element)
  }
})

console.log(zucchine_15_cm, others_zucchine) //print results