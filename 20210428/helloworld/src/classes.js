class Pessoa {

    constructor(){
        this._nome = ''
        this._email = ''
        this._telefone = ''
    }

    get nome() {
        return this._nome
    }

    set nome(value) {
        this._nome = value
    }
}

class PessoaFisica extends Pessoa {

}

class PessoaJuridica extends Pessoa {

}

const pessoa = new PessoaFisica()
pessoa.nome = "Jonas Muniz"

console.log(pessoa.nome)