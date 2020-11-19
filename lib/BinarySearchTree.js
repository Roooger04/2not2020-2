class Node {
    constructor(value){
        this.data = value
        this.left = null //Esquerda
        this.right = null // Direita
    }
}

module.exports = class BinarySearchTree {
    constructor(){
        this.root = null //raiz da arvore
    }

    insert(value){
        let node = new Node(value)

        //inserção do nodo raiz (primeiro nodo)
        if(this.root === null) this.root = node
        //busca recursiva pelo local correto de inserção
        else this.insertNode(node, this.root)
    }

    // insere um nodo em uma subarvore a partir da raiz indicada 
    // parametros 
    // - node: o nodo a ser inserido
    // - root: o nodo A PARTIR do qual sera efetuada a busca
    insertNode(node, root){
        if(node.data < root.data){ //Lado esquerdo
            // posibilidade 1: a esquerda do nó raiz esta livre
            if(root.left === null) root.left = node // O nodo entra no lugar livre
            // possibilidade 2: esquerda ocupada, reinicia a busca a partir desse nodo
            // como raiz
            else this.insertNode(node, root.left) 
        }
        else if(node.data > root.data){ // lado direito
            if(root.right == null) root.right = node
            else this.insertNode(node, root.right)
        }
    }
}