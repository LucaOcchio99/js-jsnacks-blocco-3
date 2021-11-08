/*A partire da un array di numeri, genera un secondo array con le potenze al quadrato di ogni numero.
Es: [1, 2, 3, 4, 5] => [1, 4, 9, 16, 25]*/

const primo_array = [6, 7, 8, 9, 10];
console.log(primo_array)

const nuovo_array = primo_array.map((element) => {
    console.log(element)
    return element * element
});

console.log(nuovo_array)