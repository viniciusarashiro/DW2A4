const numbers = [1, 2, 3, 4, 5, 6, 2]

let quad = numbers.map(n => n + 3)
.filter(n => n % 2 == 0)
.reduce((acumulador, elementCorrente) => acumulador + elementCorrente)

console.log(quad)