const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

// Method filter to create an array with only even numbers

let even_numbers = [] //new list initialization
nums.filter( element => {if (element % 2 == 0){even_numbers.push(element)}}) // filter
console.log(even_numbers) //print results