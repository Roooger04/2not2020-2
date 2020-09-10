//Pré-requisito para a busca binaria: o conjunto de dados
//PRECISA estar ordenado pelo criterio de busca 
let comp = 0

// Implementação recursiva
// Uma função chama a si mesma com pelo menos um de seus parametros com valor alterado
//Toda função recursiva precisa ter pelo menos uma condição de saida isto e uma possibilidade
//de termino que não envolva uma chamada a ela mesma.

//os parametros inicio e fim sao opcionais caso a funcao seja chamada sem especifica-los
//eles assumiram os valores indicados
function buscaBinaria(lista, valorBusca, fnComp, inicio = 0, fim = lista.length - 1){
    //let inicio = 0
    //let fim = lista.length - 1
    
    if(fim >= inicio){
        // Math.floor(): retira as casa decimais de um número
        let meio = Math.floor((fim + inicio) / 2)

        let res = fnComp(lista[meio], valorBusca)

        // Verificar se o valor na posição media e o valor de busca
        if(res === 0){ 
            comp++
            return meio
        }    
        else if(res < 0){
            comp += 2
            //fim = meio - 1
            return buscaBinaria(lista, valorBusca, fnComp, inicio, meio - 1)
        }
        else{  //res > 0
            comp += 2
            //inicio = meio + 1
            return buscaBinaria(lista, valorBusca, fnComp, meio + 1, fim)
        }
    }
    return -1 //valor não encontrado
}

function comparaNome(obj, valorBusca){
    //os dois valores sao iguais
    if(valorBusca === obj.first_name) return 0 
    //um numero negativo para indicar que o primeiro < segundo
    else if(valorBusca < obj.first_name) return -1 
    //um numero positivo para indicar que o primeiro > segundo
    else return 1 //valorBusca > obj.first_name
}

let nums = [4, 16, 22, 29, 35, 44, 52, 58, 66, 71, 80, 88, 94]

console.log(buscaBinaria(nums, 66, (elPos, busca) => {
    if (busca === elPos) return 0 
    else if (busca < elPos) return -1
    else return 1
}))

// Termina a execução sem passar pelas linhas abaixo
//process.exit(0) // 0 = saida ok sem erro

let listaNomes = require('./dados/lista-nomes')

console.time('ROGER')
console.log(buscaBinaria(listaNomes, 'ROGER', comparaNome))
console.timeEnd('ROGER')
console.log('Comparações: ', comp)

console.log('---------------')
comp = 0

console.time('ENEDINO')
console.log(buscaBinaria(listaNomes, 'ENEDINO', (obj, busca) => {
    if(busca == obj.first_name) return 0
    else if(busca < obj.first_name)return -1
    else return 1
}))
console.timeEnd('ENEDINO')
console.log('Comparações: ', comp)