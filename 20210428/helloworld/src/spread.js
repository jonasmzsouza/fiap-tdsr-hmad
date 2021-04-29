const meuArray = [10, 20, 30]

console.log(meuArray)
console.log(...meuArray)
console.log(...meuArray, 40, 50, 60)

function soma(a, b, c) {
    return a + b + c
}

console.log( soma(...meuArray) )