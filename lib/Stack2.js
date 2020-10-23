module.exports = class Stack {
    
    constructor(){
        this.data = {} //Armanezamento
        this.count = 0
    }

    // Iserção
    push(value){
        this.count++
        this.data[this.count] = value
    }

    // Remoção
    pop() {
        let value = this.data[this.count]
        delete this.data[this.count]
        this.count--
        return value
    }

    //Verificação do topo da pilha ("olhadinha")
    peek(){
        return this.data[this.count]
    }

    // Retorna o número de elemento da pilha
    size(){
        return this.count
    }
}