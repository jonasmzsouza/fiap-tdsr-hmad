"use strict";

var _console, _console2;

var meuArray = [10, 20, 30];

console.log(meuArray);
(_console = console).log.apply(_console, meuArray);
(_console2 = console).log.apply(_console2, meuArray.concat([40, 50, 60]));

function soma(a, b, c) {
    return a + b + c;
}

console.log(soma.apply(undefined, meuArray));