// //Condição no fim
// var i = 0
// do {
//     i += 1
//     console.log(i)
// } while(i < 5)

// //Condição no início
// var i = 0
// while(i < 5) {
//     i += 1
//     console.log(i)
// }

// //for 
// for (var passo = 1; passo <= 5; passo++) {
//     console.log(passo)
// }

//for ... in = objetos e array
var obj = {a:1, b:2, c:3}
for(var prop in obj) {
    console.log('obj.' + prop + " = " + obj[prop])
}


//for .... of
let array = [3, 5, 7]

//depois trocar para in
for (let i of array) {
    console.log(i)
}

//label, break e continue
var i = 0

labelX: while (true) {
    i++
    if (i == 3) continue labelX
    if (i > 5) break labelX
    console.log(i)
}