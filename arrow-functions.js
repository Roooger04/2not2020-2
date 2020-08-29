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

let imc = function(peso, altura){
    return peso / (altura ** 2)
}

let imc2 = (peso, altura) => peso / (altura ** 2)

console.log(imc(87, 1.78))
console.log(imc2(87, 1.78))

let fatorial = function(n){
    let res = 1
    for(let i = n; i > 1; i--){
        res *= i
    }
    return res
}

let fatorial2 = n => {
    let res = 1
    for(let i = n; i > 1; i--){
        res*= i
    }
    return res
}

console.log(fatorial(5))
console.log(fatorial2(5))