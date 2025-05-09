// ----------- FILA IMPLEMENTADA COM DUAS PILHAS -----------
// Classe Queue implementa uma fila utilizando duas pilhas (stack1 e stack2)
class Queue {
    constructor() {
        this.items = {};   // Estrutura alternativa para armazenamento direto dos elementos
        this.front = 0;    // Índice do primeiro elemento (o mais antigo)
        this.rear = 0;     // Índice do próximo elemento a ser adicionado
        this.stack1 = [];  // Pilha de entrada (enqueue)
        this.stack2 = [];  // Pilha de saída (dequeue)
    }

    // ------ MÉTODO ENQUEUE (ADICIONAR ITEM) -------
    // Adiciona um item à fila (O(1))
    enqueue(item) {
        this.items[this.rear] = item; // Armazena o item no índice correspondente
        this.rear++; // Atualiza o índice de inserção
    }

    // ------- MÉTODO DEQUEUE (REMOVER ITEM - FIFO) ---------
    // Remove o primeiro item da fila (O(1))
    dequeue() {
        if (this.isEmpty()) return "Fila vazia!"; // Se a fila estiver vazia, retorna um aviso

        const item = this.items[this.front]; // Obtém o item mais antigo da fila
        delete this.items[this.front]; // Remove o item da estrutura
        this.front++; // Atualiza o índice do primeiro elemento

        return item; // Retorna o item removido
    }

    // ------- MÉTODO PUSH (ADICIONAR ITEM USANDO PILHAS) --------
    // Adiciona um item utilizando a pilha de entrada (O(1))
    push(item) {
        this.stack1.push(item); // Insere na pilha de entrada
    }

    // ------ MÉTODO POP (REMOVER ITEM USANDO PILHAS) -------
    // Remove o primeiro item utilizando a lógica FIFO com pilhas (O(n))
    pop() {
        if (this.stack2.length === 0) { // Se a pilha de saída estiver vazia...
            while (this.stack1.length > 0) { // Transfere os elementos de stack1 para stack2
                this.stack2.push(this.stack1.pop()); // Inverte a ordem ao transferir
            }
        }
        if (this.stack2.length === 0) return "Fila vazia!"; // Caso a fila ainda esteja vazia

        return this.stack2.pop(); // Remove o elemento mais antigo da fila
    }

    // -------- MÉTODO PEEK (VER O PRIMEIRO ITEM SEM REMOVER) ---------
    // Retorna o primeiro item da fila sem removê-lo (O(1))
    peek() {
        if (this.stack2.length === 0) { // Se a pilha de saída estiver vazia...
            while (this.stack1.length > 0) { // Transfere os elementos de stack1 para stack2
                this.stack2.push(this.stack1.pop()); // Inverte a ordem ao transferir
            }
        }
        if (this.stack2.length === 0) return "Fila vazia!"; // Caso a fila esteja vazia

        return this.stack2[this.stack2.length - 1]; // Retorna o primeiro elemento sem removê-lo
    }

    // -------- MÉTODO ISEMPTY (VERIFICAR SE A FILA ESTÁ VAZIA) --------
    // Verifica se a fila está vazia (O(1))
    isEmpty() {
        return this.front === this.rear; // Se front e rear forem iguais, a fila está vazia
    }
}

// ------ TESTANDO A FILA ----------
const fila = new Queue();
console.log("🛠 Testando a fila...");

// Testando enqueue com estrutura alternativa (items)
fila.enqueue("A");
console.log("Adicionado 'A' à fila.");
fila.enqueue("B");
console.log("Adicionado 'B' à fila.");
fila.enqueue("C");
console.log("Adicionado 'C' à fila.");

console.log("Removido:", fila.dequeue()); // Remove "A"
console.log("Removido:", fila.dequeue()); // Remove "B"
console.log("Removido:", fila.dequeue()); // Remove "C"
console.log("Removido:", fila.dequeue()); // Fila vazia!

// Testando isEmpty
console.log("Fila está vazia?", fila.isEmpty()); // true

// Testando pilha como fila (push/pop)
fila.push(1);
console.log("Adicionado 1 via push.");
fila.push(2);
console.log("Adicionado 2 via push.");
fila.push(3);
console.log("Adicionado 3 via push.");

console.log("Primeiro elemento:", fila.peek()); // 1

console.log("Removido:", fila.pop()); // Remove 1
console.log("Removido:", fila.pop()); // Remove 2
console.log("Removido:", fila.pop()); // Remove 3
console.log("Removido:", fila.pop()); // Fila vazia!

console.log("Fila está vazia?", fila.isEmpty()); // true