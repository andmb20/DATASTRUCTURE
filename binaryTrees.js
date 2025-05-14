// -------- CLASSE Node --------
// Representa um único nó na Árvore Binária de Busca (BST).
// Cada nó possui um valor e referências para seus filhos à esquerda e à direita.

class Node {
    constructor(value) {
        this.value = value;  // Guarda o valor do nó
        this.left = null;    // Referência ao filho esquerdo (menores que 'value')
        this.right = null;   // Referência ao filho direito (maiores que 'value')
    }
}

// -------- CLASSE BST --------
// Implementação de uma Árvore Binária de Busca (BST).
// Permite operações de inserção, busca, remoção e ordenação in-order.

class BST {
    constructor() {
        this.root = null; // Inicialmente, a árvore está vazia.
    }

    // -------- MÉTODO INSERT --------
    // Insere um novo valor na árvore, mantendo a estrutura de BST.
    insert(value) {
        const newNode = new Node(value); // Cria um novo nó com o valor passado.

        // Se a árvore estiver vazia, define o novo nó como raiz.
        if (!this.root) {
            this.root = newNode;
            return;
        }

        let current = this.root; // Começa a busca pela posição correta a partir da raiz.

        while (true) {
            if (value < current.value) { // Se o valor for menor, vai para a esquerda.
                if (!current.left) { // Se não houver um filho à esquerda, insere o nó aqui.
                    current.left = newNode;
                    return;
                }
                current = current.left; // Continua descendo à esquerda.
            } else { // Se o valor for maior ou igual, vai para a direita.
                if (!current.right) { // Se não houver um filho à direita, insere o nó aqui.
                    current.right = newNode;
                    return;
                }
                current = current.right; // Continua descendo à direita.
            }
        }
    }

    // -------- MÉTODO SEARCH --------
    // Procura um valor específico na árvore e retorna o nó correspondente.
    search(value) {
        let current = this.root; // Começa a busca pela raiz.

        while (current) {
            if (value === current.value) return current; // Se encontrar o valor, retorna o nó.

            // Se o valor buscado for menor, continua à esquerda, senão à direita.
            current = value < current.value ? current.left : current.right;
        }

        return null; // Se o valor não existir na árvore, retorna null.
    }

    // -------- MÉTODO DELETE --------
    // Remove um nó da árvore mantendo a estrutura de BST.
    delete(value) {
        this.root = this._deleteNode(this.root, value);
    }

    // -------- MÉTODO _DELETE NODE --------
    // Método auxiliar que remove um nó e ajusta a estrutura da árvore.
    _deleteNode(node, value) {
        if (!node) return null; // Caso base: se o nó for null, apenas retorna.

        if (value < node.value) {
            node.left = this._deleteNode(node.left, value); // Continua a busca à esquerda.
        } else if (value > node.value) {
            node.right = this._deleteNode(node.right, value); // Continua a busca à direita.
        } else {
            // -------- CASO 1: Nó sem filhos --------
            if (!node.left && !node.right) return null;

            // -------- CASO 2: Nó com apenas um filho --------
            if (!node.left) return node.right;
            if (!node.right) return node.left;

            // -------- CASO 3: Nó com dois filhos --------
            // Substitui pelo menor valor da subárvore direita (sucessor in-order).
            let minNode = this._findMin(node.right);
            node.value = minNode.value;
            node.right = this._deleteNode(node.right, minNode.value);
        }

        return node; // Retorna o nó atualizado.
    }

    // -------- MÉTODO _FIND MIN --------
    // Encontra o nó de menor valor na árvore (usado no delete).
    _findMin(node) {
        while (node.left) { // O menor valor sempre está mais à esquerda.
            node = node.left;
        }
        return node;
    }

    // -------- MÉTODO INORDER --------
    // Retorna os valores da árvore em ordem crescente.
    inOrder() {
        const result = [];
        this._inOrderTraversal(this.root, result);
        return result;
    }

    // -------- MÉTODO _INORDER TRAVERSAL --------
    // Percorre a árvore em ordem crescente (Esquerda → Raiz → Direita).
    _inOrderTraversal(node, result) {
        if (node) {
            this._inOrderTraversal(node.left, result); // Visita o filho esquerdo primeiro.
            result.push(node.value); // Adiciona o valor do nó atual.
            this._inOrderTraversal(node.right, result); // Visita o filho direito por último.
        }
    }
}

// -------- TESTANDO A CLASSE BST --------
const bst = new BST(); // Cria uma nova árvore binária.

// Inserindo valores
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(18);

console.log("Antes da remoção:");
console.log(bst.inOrder()); // Exibe todos os valores ordenados.

bst.delete(15); // Remove o valor 15 da árvore.

console.log("Depois da remoção:");
console.log(bst.inOrder()); // O valor 15 foi removido corretamente.