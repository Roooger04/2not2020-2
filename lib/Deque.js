/*
    Deque = Double-Ended Queue (fila de duas pontas)
    Permite inserção e remoção em qualquer um dos seus lados
*/

module.exports = class Deque{
    constructor(){
        this.data = []
    }

    //Inseção no inicio
    insertFront(value){
        this.data.unshift(value)
    }

    //Inserção no fim
    insertRear(value){
        this.data.push(value)
    }

    //Remoção no inicio 
    removeFront(){
        return this.data.shift()
    }

    //Remoção no fim
    removeRear(){
        return this.data.pop()
    }

    //"Olhadinha" no inicio
    peekFront(){
        return this.data[0]
    }

    //"Olhadinha" no final 
    peekRear(){
        return this.data[this.data.length - 1]
    }

    //Tamanho do deque
    size(){
        return this.data.length
    }
}