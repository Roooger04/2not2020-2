let pilha = []

let texto = 'SER OU NÃO SER EIS A QUESTÃO'

for(let i = 0; i < texto.length; i++){
    //inserção na pilha deve sempre ser feita no final
    pilha.push(texto.charAt(i))
}

let inverso = ''
while(pilha.length > 0){
    // retiradas na pilha devem ser feitas tambem no final
    inverso += pilha.pop()
}

console.log(pilha)
console.log(inverso)