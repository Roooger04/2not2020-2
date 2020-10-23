const Stack = require('./lib/Stack2')

let pilha = new Stack()

let texto = 'SER OU NÃO SER EIS A QUESTÃO'

for(let i = 0; i < texto.length; i++){
    //inserção na pilha deve sempre ser feita no final
    pilha.push(texto.charAt(i))
}

console.log(pilha)

let inverso = ''
while(pilha.size() > 0){
    // retiradas na pilha devem ser feitas tambem no final
    inverso += pilha.pop()
}

console.log(inverso)

/*
console.log(pilha)

pilha.push(9)
pilha.push(-8)
pilha.push(0)
pilha.push(7)

console.log(pilha)
console.log('Último elemento: ', pilha.peek())
console.log('Tamanho: ', pilha.size())

let x = pilha.pop()
console.log('X: ', x)
console.log('Último elemento: ', pilha.peek())
console.log('Tamanho: ', pilha.size())
*/