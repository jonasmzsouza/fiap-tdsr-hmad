'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pessoa = function () {
    function Pessoa() {
        _classCallCheck(this, Pessoa);

        this._nome = '';
        this._email = '';
        this._telefone = '';
    }

    _createClass(Pessoa, [{
        key: 'nome',
        get: function get() {
            return this._nome;
        },
        set: function set(value) {
            this._nome = value;
        }
    }]);

    return Pessoa;
}();

var PessoaFisica = function (_Pessoa) {
    _inherits(PessoaFisica, _Pessoa);

    function PessoaFisica() {
        _classCallCheck(this, PessoaFisica);

        return _possibleConstructorReturn(this, (PessoaFisica.__proto__ || Object.getPrototypeOf(PessoaFisica)).apply(this, arguments));
    }

    return PessoaFisica;
}(Pessoa);

var PessoaJuridica = function (_Pessoa2) {
    _inherits(PessoaJuridica, _Pessoa2);

    function PessoaJuridica() {
        _classCallCheck(this, PessoaJuridica);

        return _possibleConstructorReturn(this, (PessoaJuridica.__proto__ || Object.getPrototypeOf(PessoaJuridica)).apply(this, arguments));
    }

    return PessoaJuridica;
}(Pessoa);

var pessoa = new PessoaFisica();
pessoa.nome = "Jonas Muniz";

console.log(pessoa.nome);