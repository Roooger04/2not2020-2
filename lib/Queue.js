/*
    Estrutura de dados da fila
    Funcionamento: FIFO (First In, First Out)
    (a primeira que entra é o primeiro que sai)
*/ 

module.exports = class Queue{

    constructor(){

        this.data = [] //Armanezenamento
    }

    //Inserção
    enqueue(value){
        this.data.push(value)
    }

    //Remoção 
    dequeue(){
        return this.data.shift()
    }

    //"Olhadinha" (no inicio da fila)
    peek(){
        return this.data[0]
    }

    //Tamanho da fila
    size(){
        return this.data.length
    }
}