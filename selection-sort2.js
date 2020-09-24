/*
    Função de comparação fnComp
    - recebe dois valores para comparação
    - retorno:
        - true se o primeiro valor for maior que o segundo
        - false caso contrario
*/

function selectionSort(vetor, fnComp){
    let passadas = 0, comparacoes = 0, totalTrocas = 0

    // função que encontra o menor valor em um segmento de vetor (subvetor)
    // a função deve retornar a posição do menor valor encontrado
    function encontrarMenor(vetor, inicio){
        let posMenor = inicio
        for(let i = inicio + 1; i < vetor.length; i++){
            //if(vetor[i] < vetor[posMenor]) posMenor = i
            if(! fnComp(vetor[i], vetor[posMenor])) posMenor = i
            comparacoes++
        }    
        return posMenor
    }

    //for externo vai ate a penultima posição
    for(i = 0; i < vetor.length - 1; i++){
        passadas++

        posMenor = encontrarMenor(vetor, i + 1)
        //busque-se o menor valor encontrado seja menor que o valor atual,
        //procede-se a troca
        comparacoes++
        //if(vetor[posMenor] < vetor[i]){
            if(fnComp(vetor[i], vetor[posMenor])){ //ordem dos argumentos invertido
            // Permuta de valores usando desestruração
            [vetor[posMenor], vetor[i]] = [vetor[i], vetor[posMenor]]
            totalTrocas++
        }
    }
    console.log({passadas, comparacoes, totalTrocas})
}


let candidatos = require('./dados/candidatos-2018')
console.time('Teste candidatos')
selectionSort(candidatos, (x, y) => x.NM_CANDIDATO > y.NM_CANDIDATO)
console.timeEnd('Teste candidatos')
//medindo memoria utilizada pelo programa
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.log(candidatos)
console.log('Memoria utilizada (MB):', memoria)
