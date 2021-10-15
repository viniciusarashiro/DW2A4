import Pessoa from "./pessoa.class.js"
import { imprimirNomePessoa as nomePessoa, imprimirIdadePessoa } from "./pessoa.class.js"

const pessoa = new Pessoa('Johnata', 35)

nomePessoa(pessoa)
imprimirIdadePessoa(pessoa)