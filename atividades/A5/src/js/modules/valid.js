export function validaCep() {
    let cep = document.querySelector('.cep')
    let cepTamanho = 9

    if (cep.value.length != cepTamanho) {
        cep.classList.add('errorInput')
        cep.value = ""
    }
}
