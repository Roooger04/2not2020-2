class Node {
    constructor(value){
        this.data = value // Armanezamento
        
        this.next = null // Ponteiro para o proximo nodo
    }
}

module.export = class LinkedList {
    constructor(){
        this.head = null // A lista "sem cabeça"
        this.count = 0
    }

    // Inserção no fim da lista
    push(value){
        let node = new Node(value)

        // Caso especial: a lista está vazia
        if(this.count === 0){
            this.head = node
        }
        else{
            let nodePos = this.head
            // Percurso da lista para encontrar o ultimo elemento
            while(nodePos.next != null){
                nodePos = nodePos.next
            }
            // O ultimo elemento ganha um node depois dele
            nodePos.next = node
        } 
        this.count++
    }

    //Retorna o tamanho da lista
    size(){
        return this.count
    }

    toString(){
        let output = '{ '
        let node = this.head
        while(node.next !== null){
            output += node.data + ' '
            node = node.next
        }
        output += ' }'
        return output
    }

    // Isere um valor em uma posição informada pelo usuario 
    insertAt(position, value){
        // Validação da posição 
        if(position >= 0 && position <= this.count){
            let node = new Node(value)

            // Caso especial: inserção na posição 0
            if (position === 0){
                node.next = this.head
                this.head = node // Temos uma nova cabeça na lista
            } 
            // Caso especial: inserção na ultima posição
            else if(position === this.count){
                // Redireciona para o push
                this.push(value)
                return // que this.count++ seja executado novamente
            }
            else{
                let nodePos = this.head, nodePrev = null
                // O loop for começa em 1 porque 0 é o head e já está no nodePos
                for(let i = 1; i <= position; i++){
                    nodePrev = nodePos
                    nodePos = nodePos.next
                }
                // O novo passa a apontar para o proximo do nodo atual da posição
                node.next = nodePos
                // O nodo anterior passa a apontar para o novo nodo
                nodePrev.next = node 
            }
            this.count++       
        }
    }
}