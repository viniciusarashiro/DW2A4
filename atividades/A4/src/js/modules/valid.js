export function validaNome() {
    let nome = document.querySelector('.nome')

    if(nome.value == "") {
        nome.classList.add('errorInput')
        nome.value = ""
    }
}

export function validaCpf() {
    let cpf = document.querySelector('.cpf')
    let cpfTamanho = 14

    if(cpf.value.length != cpfTamanho) {
        cpf.classList.add('errorInput')
        cpf.value = ""
    }
    
    cpf.value = cpf.value.replace("-", "").replace(".", "").replace(".", "")
    cpf.value = cpf.value.split(" ", 11)
    let contador = 10
    let primeiroDigito = 0

    for(let i = 0; i < cpf.value.length - 2; i++) {
        primeiroDigito = primeiroDigito + (cpf.value[i] * contador) 
        contador--
    }

    primeiroDigito = primeiroDigito % 11
    primeiroDigito = 11 - primeiroDigito
    
    contador = 11 
    let segundoDigito = 0

    for(let i = 0; i < cpf.value.length - 1; i++) {
        segundoDigito = segundoDigito + (cpf.value[i] * contador) 
        contador--
        
    }
    segundoDigito = segundoDigito % 11
    segundoDigito = 11 - segundoDigito

    if(segundoDigito > 9) {
        segundoDigito = 0
    }

    if(primeiroDigito > 9) {
        primeiroDigito = 0
    }

    if(cpf.value[9] != primeiroDigito || cpf.value[10] != segundoDigito) {
        cpf.classList.add('errorInput')
        cpf.value = ""
    }

}

export function validaCep() {
    let cep = document.querySelector('.cep')
    let cepTamanho = 9

    if(cep.value.length != cepTamanho) {
        cep.classList.add('errorInput')
        cep.value = ""
    }
}

export function validaTelefone() {
    let telefone = document.querySelector('.fone')
    let telefoneTamanho = 14

    if(telefone.value.length < telefoneTamanho) {
        telefone.classList.add('errorInput')
        telefone.value = ""
    }
}

export function validaDataDeNascimento() {
    let inputDtNasc = document.querySelector('.dt_nasc')
    let dtNasc = document.querySelector('.dt_nasc').value + ''
    let dtNascTamanho = 10

    var dtNascArray = dtNasc.split("-", 3)
    dtNascArray[0] = parseInt(dtNascArray[0])
    dtNascArray[1] = parseInt(dtNascArray[1])
    dtNascArray[2] = parseInt(dtNascArray[2])
    if(dtNascArray[0] < 1 || dtNascArray > 31) {
        inputDtNasc.classList.add('errorInput')
        inputDtNasc.value = ""
    } else if(dtNascArray[1] < 1 || dtNascArray[1] > 12) {
        inputDtNasc.classList.add('errorInput')
        inputDtNasc.value = ""
    } else if(dtNascArray[2] < 1900 || dtNascArray[2] > 2021) {
        inputDtNasc.classList.add('errorInput')
        inputDtNasc.value = ""
    }

    if(dtNasc.length != dtNascTamanho) {
        inputDtNasc.classList.add('errorInput')
        inputDtNasc.value = ""
     }

    
}

export function validaEmail() {
    let email = document.querySelector('.email')

    if(!email.value.includes('@') || email.value.includes(" ") || !email.value.includes(".")) {
        email.classList.add('errorInput')
        email.value = ""
    }
}