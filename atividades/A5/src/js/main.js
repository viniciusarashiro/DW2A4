import { validaCep } from './modules/valid.js'
import { Mask } from './modules/mask.js'

document.querySelectorAll('input').forEach(($input) => {
    const field = $input.dataset.js

    $input.addEventListener('input', (e) => {
        e.target.value = Mask[field](e.target.value)
    }, false)
})

const button = document.querySelector('#button')

function pesquisaCep(cep) {
    return fetch(`http://viacep.com.br/ws/${cep}/json/`)
}

async function pesquisaEstado(estado) {
    return fetch(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${estado}`)
}

async function pesquisar() {
    const cep = document.querySelector('#cep')
    const container = document.querySelector(".container")
    const cepResponse = await pesquisaCep(cep.value)
    const data = await cepResponse.json()


    if (data.uf) {
        const lista = await pesquisaEstado(data.uf)
        const dados = await lista.json()
        container.innerHTML = `
        UID: ${dados.uid} 
        <br> UF: ${dados.uf}
        <br> Estado: ${dados.state}
        <br> Casos: ${dados.cases}
        <br> Mortes: ${dados.deaths}
        <br> Suspeitos: ${dados.suspects}
        <br> Não aceitos: ${dados.refuses}
        <br> Data: ${dados.datetime}
        `
    } else {
        cep.classList.add('errorInput')
        cep.value = ""
    }
}

button.onclick = function () {
    validaCep()
    pesquisar()
}





