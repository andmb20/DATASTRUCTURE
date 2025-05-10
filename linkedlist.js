// -------------------- LISTA LIGADA (LINKED LIST) --------------------
// Classe Node representa um nó da lista, contendo um valor e um ponteiro para o próximo nó
class Node {
    constructor(value) {
        this.value = value;  // Valor armazenado no nó
        this.next = null;    // Referência para o próximo nó (inicialmente nulo)
    }
}

// Classe LinkedList representa a lista ligada, que gerencia os nós
class LinkedList {
    constructor() {
        this.head = null;  // Primeiro nó da lista
        this.size = 0;     // Quantidade total de nós na lista
    }

    // -------------------- MÉTODO APPEND (ADICIONAR NO FINAL) --------------------
    // Adiciona um novo nó ao final da lista (O(n))
    append(value) {
        const newNode = new Node(value); // Cria um novo nó com o valor recebido
        
        if (!this.head) { 
            // Se a lista estiver vazia, o novo nó se torna a cabeça
            this.head = newNode;
        } else {
            // Percorre a lista até encontrar o último nó
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode; // Adiciona o novo nó ao final
        }
        
        this.size++; // Incrementa o tamanho da lista
    }

    // -------------------- MÉTODO PREPEND (ADICIONAR NO INÍCIO) --------------------
    // Adiciona um novo nó no início da lista (O(1))
    prepend(value) {
        const newNode = new Node(value); // Cria um novo nó
        newNode.next = this.head; // Aponta o novo nó para o antigo primeiro nó
        this.head = newNode; // Define o novo nó como cabeça da lista
        this.size++; // Incrementa o tamanho da lista
    }

    // -------------------- MÉTODO REMOVEFIRST (REMOVER PRIMEIRO NO) --------------------
    // Remove o primeiro nó da lista (O(1))
    removeFirst() {
        if (!this.head) return null; // Se a lista estiver vazia, retorna null
        
        const removed = this.head; // Guarda o nó que será removido
        this.head = this.head.next; // Define o próximo nó como cabeça
        this.size--; // Decrementa o tamanho da lista

        return removed.value; // Retorna o valor do nó removido
    }

    // -------------------- MÉTODO REMOVELAST (REMOVER ÚLTIMO NO) --------------------
    // Remove o último nó da lista (O(n))
    removeLast() {
        if (!this.head) return null; // Se a lista estiver vazia, retorna null
        
        if (!this.head.next) { 
            // Se a lista tiver apenas um elemento, remove a cabeça
            const removed = this.head;
            this.head = null;
            this.size--;
            return removed.value;
        }

        let current = this.head;
        let previous = null;

        // Percorre até o último nó
        while (current.next) {
            previous = current;
            current = current.next;
        }

        previous.next = null; // Remove o último nó
        this.size--; // Decrementa o tamanho da lista
        
        return current.value; // Retorna o valor do nó removido
    }

    // -------------------- MÉTODO FIND (BUSCAR UM VALOR NA LISTA) --------------------
    // Retorna o nó que contém o valor especificado (O(n))
    find(value) {
        let current = this.head; // Começa a busca a partir da cabeça da lista

        while (current) {
            if (current.value === value) return current; // Retorna o nó encontrado
            current = current.next; // Avança para o próximo nó
        }

        return null; // Retorna null se o valor não for encontrado
    }

    // -------------------- MÉTODO GETSIZE (RETORNAR TAMANHO DA LISTA) --------------------
    // Retorna a quantidade de elementos na lista (O(1))
    getSize() {
        return this.size;
    }

    // -------------------- MÉTODO PRINT (EXIBIR TODOS OS ELEMENTOS) --------------------
    // Exibe todos os elementos da lista (O(n))
    print() {
        let current = this.head;
        let output = "";

        while (current) {
            output += `${current.value} -> `;
            current = current.next;
        }

        console.log(output + "null"); // Indica o fim da lista
    }
}

// -------------------- TESTANDO A LISTA LIGADA --------------------
const lista = new LinkedList();
console.log("🛠 Testando a lista ligada...");

// Adicionando elementos ao final
lista.append(1);
console.log("Adicionado 1 ao final.");
lista.append(2);
console.log("Adicionado 2 ao final.");
lista.append(3);
console.log("Adicionado 3 ao final.");
lista.print(); // Exibe todos os elementos

// Adicionando elementos ao início
lista.prepend(0);
console.log("Adicionado 0 ao início.");
lista.print();

// Removendo o primeiro elemento
console.log("Removido primeiro elemento:", lista.removeFirst());
lista.print();

// Removendo o último elemento
console.log("Removido último elemento:", lista.removeLast());
lista.print();

// Buscando elementos
console.log("Buscando o valor 2:", lista.find(2)); // Deve retornar o nó com valor 2
console.log("Buscando o valor 5:", lista.find(5)); // Deve retornar null

// Verificando o tamanho da lista
console.log("Tamanho atual da lista:", lista.getSize());
