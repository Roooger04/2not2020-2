let quadrado = function(n){
    return n * n
}

let quadrado2 = n => n * n

console.log(quadrado(6))
console.log(quadrado2(6))

let aleatorio = function(){
    return Math.floor(Math.random() * 100)
}

console.log('---------------')
console.log(aleatorio())

let aleatorio2 = () => Math.floor(Math.random() * 1000)