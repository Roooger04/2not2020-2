let pessoa1 = {}
let pessoa2 = new Object()

let pessoa3 = {
    nome: 'joão das Couves',
    naturalidade: 'Franca/SP',
    "data de nascimento": '1997-11-03',
    estudante_fatec: true
}

console.log(pessoa3.nome)
console.log(pessoa3.estudante_fatec)

console.log(pessoa3["data de nascimento"])

console.log(pessoa3['naturalidade'])

let atrib = 'nome'
console.log(pessoa3[atrib])

pessoa3.nacionalidade = 'portuguesa'
pessoa3['registro de estrangeiro'] = 123456789

console.log(pessoa3)

delete pessoa3.estudante_fatec

console.log('-------------------------')

console.log(pessoa3)

for(let prop in pessoa3){
    console.log(prop)
}

console.log('-----------------------')

for(let atrib in pessoa3){
    console.log('atributo:' + atrib + '; valor: ' + pessoa3[atrib])
}


console.log('------------------------')

for(let atrib in pessoa3){
    console.log(`Atributo: ${atrib}; valor: ${pessoa3[atrib]}`)
}
