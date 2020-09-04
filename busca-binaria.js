//Pré-requisito para a busca binaria: o conjunto de dados
//PRECISA estar ordenado pelo criterio de busca 
let comp = 0
function buscaBinaria(lista, valorBusca){
    let inicio = 0
    let fim = lista.length - 1
    
    while(fim >= inicio){
        // Math.floor(): retira as casa decimais de um número
        let meio = Math.floor((fim + inicio) / 2)

        // Verificar se o valor na posição media e o valor de busca
        if(valorBusca === lista[meio]){ 
            comp++
            return meio
        }    
        else if(valorBusca < lista[meio]){
            comp += 2
            fim = meio - 1
        }
        else{  //valorBusca > lista[meio]
            comp += 2
            inicio = meio + 1
        }
    }
    return -1 //valor não encontrado
}

let vetorNomes = require('./dados/vetor-nomes')

console.time('ROGER')
console.log(buscaBinaria(vetorNomes , 'ROGER'))
console.timeEnd('ROGER')
console.log('Comparações:', comp)

console.log('---------------------')

comp = 0
console.time('ZOZIMO')
console.log(buscaBinaria(vetorNomes , 'ZOZIMO'))
console.timeEnd('ZOZIMO')
console.log('Comparações:', comp)

console.log('---------------------')

comp = 0
console.time('INSTRAGRNILDO')
console.log(buscaBinaria(vetorNomes , 'INSTRAGRNILDO'))
console.timeEnd('INSTRAGRNILDO')
console.log('Comparações:', comp)

console.log('---------------------')

comp = 0
console.time('ZYON')
console.log(buscaBinaria(vetorNomes , 'ZYON'))
console.timeEnd('ZYON')
console.log('Comparações:', comp)
