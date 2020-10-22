module.exports = class Stack {
    
    constructor(){
        this.data = [] //Armanezamento
    }

    // Iserção
    push(value){
        this.data.push(value)
    }

    // Remoção
    pop() {
        return this.data.pop()
    }

    //Verificação do topo da pilha ("olhadinha")
    peek(){
        return this.data[this.data.length - 1]
    }

    // Retorna o número de elemento da pilha
    size(){
        return this.data.length
    }
}