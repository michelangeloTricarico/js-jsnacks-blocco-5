const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

// Method map to cycle inside list and define a new array with values increased by 1

const numbers_increased = numbers.map(element => element + 1)
console.log(numbers_increased) // print results

