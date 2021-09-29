var pessoa = {
    nome: {primeiro: 'Vinícius', ultimo: 'Arashiro'},
    idade: 20,
    sexo: 'Masculino',
    interesses: ['Programação', 'Música'],

    imprimir: function() {
        console.log(`
            Meu nome é ${this.nome.primeiro} e tenho ${pessoa['idade']} anos
        `)
    }
}

pessoa.imprimir()

//desestruturação de objeto
const {nome, idade, sexo, ...outrasProp} = pessoa
console.log(nome)
console.log(idade)
console.log(sexo)
console.log(outrasProp)