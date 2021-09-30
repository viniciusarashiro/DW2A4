//Condição IF e ELSE
var greeting
var time = new Date().getHours()
if (time <= 12) {
    greeting = 'Bom dia'
} else if(time < 18) {
    greeting = 'Boa tarde'
} else {
    greeting = 'Boa noite'
}

console.log(greeting)

//Switching
let day
switch(new Date().getDay()) {
    case 0:
        day = 'Domingo' 
        break
    case 1:
        day = 'Segunda-feira'
        break
    case 2:
        day = 'Terça-feira'
        break
    case 3:
        day = 'Quarta-feira'
        break
    case 4:
        day = 'Quinta-feira'
        break
    case 5:
        day = 'Sexta-feira'
        break
    case 6:
        day = 'Sábado'
        break;
    default:
        day = 'Dia errado'
}

console.log(day)