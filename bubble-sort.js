/*
    Algoritimo de ordenação Bubble Sort

    Estrategia:
    Percorrer o vetor de dados, comparando elementos adjacentes
    e pormover a troca quando o sucessor e maior que o antecessor.

    O percurso no vetor e feito tantas vezes quando necessario, ate 
    que nenhum troca seja efetuada n o percurso.
*/

function bubbleSort(vetor){
    let passadas = 0, comparacoes = 0, totalTocas = 0
    let trocas
    do{
        passadas++
        trocas = 0

        // Percurso do vetor ate a Penultima posição (length - 2)
        for(let i = 0; i < vetor.length - 2; i++){
            comparacoes++
            //Comparando o elemento da posição atual (i)
            //com o elemento da frente (i + 1)
            if(vetor[i] > vetor[i + 1]){
                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]
                trocas++
                totalTocas++
            }
        }    
    }while(trocas > 0)
    // exibindo as estatisticas
    console.log({passadas, comparacoes, totalTocas})
}
 let nums = [58, 16, 33, 82, 4, 47, 25, 71, 96, 60, 41, 33, 89]

 console.time('Teste 1')
 bubbleSort(nums)
 console.timeEnd('Teste 1')

 console.log(nums)

 /*let empresas = require('./dados/15-mil-empresas')
 
 console.time('Teste empresas')
 bubbleSort(empresas)
 console.timeEnd('Teste empresas')
 console.log(empresas)
*/

 let nomes = require('./dados/100-mil-nomes')

 console.time('Teste nomes')
 bubbleSort(nomes)
 console.timeEnd('Teste nomes')
 console.log(nomes)