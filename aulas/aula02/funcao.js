//Hoisting (içar)
nomeFunction()

function nomeFunction() {
    console.log('Olá Mundo')
} 


//Expressão de função
//Função anônima
var q = num => num * num //Arrow (seta) function

console.log(q(3))

//função map, retornar um vetor com resultado dos calculosde uma função
var numbers = [1, 4, 9]

var result = numbers.map(Math.sqrt)

console.log(result)


//acumulo de funções
var str = '12345'

str = str.split('').reverse().join('')

console.log(str)

//Funções de Data
var date = new Date()

console.log(date.getDate())
console.log(date.getMonth())
console.log(date.getFullYear())