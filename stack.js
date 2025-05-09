// -------------------- PILHA COM RETORNO DO MENOR ELEMENTO --------------------
// Classe Stack implementa uma pilha que, além das operações padrão, mantém o menor valor em tempo O(1)
class Stack {
    constructor() {
        this.items = [];    // Pilha principal onde os valores são armazenados
        this.minStack = []; // Pilha auxiliar que mantém o menor valor até o momento
    }

    // Método para adicionar um elemento à pilha (O(1))
    push(item) {
        this.items.push(item); // Adiciona à pilha principal

        // Se a pilha auxiliar estiver vazia ou o novo item for menor ou igual ao topo da minStack, adicionamos a ele também
        if (this.minStack.length === 0 || item <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(item);
        }
    }

    // Método para remover o elemento do topo da pilha (O(1))
    pop() {
        if (this.isEmpty()) return "Pilha vazia!"; // Se a pilha estiver vazia, retorna um aviso

        const poppedItem = this.items.pop(); // Remove o elemento do topo da pilha principal

        // Se o item removido for o menor valor atual, também removemos da pilha auxiliar
        if (poppedItem === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }

        return poppedItem; // Retorna o item removido
    }

    // Método para consultar o último elemento inserido (O(1))
    peek() {
        return this.items[this.items.length - 1]; // Retorna o topo da pilha
    }

    // Método para verificar se a pilha está vazia (O(1))
    isEmpty() {
        return this.items.length === 0; // Retorna true se a pilha estiver vazia, caso contrário, false
    }

    // Método para obter o menor valor da pilha em O(1)
    getMin() {
        if (this.minStack.length === 0) return "Pilha vazia!"; // Retorna um aviso se não houver elementos na pilha
        return this.minStack[this.minStack.length - 1]; // Retorna o menor elemento armazenado na pilha auxiliar
    }
}

// -------------------- TESTANDO A PILHA --------------------
const pilha = new Stack();

console.log("🛠 Testando a pilha...");

// Adicionando elementos à pilha
pilha.push(10);
console.log("Adicionado 10 à pilha.");
console.log("Menor elemento:", pilha.getMin()); // Deve ser 10

pilha.push(20);
console.log("Adicionado 20 à pilha.");
console.log("Menor elemento:", pilha.getMin()); // Deve continuar sendo 10

pilha.push(5);
console.log("Adicionado 5 à pilha.");
console.log("Menor elemento:", pilha.getMin()); // Agora deve ser 5

pilha.push(3);
console.log("Adicionado 3 à pilha.");
console.log("Menor elemento:", pilha.getMin()); // Agora deve ser 3

console.log("Topo da pilha:", pilha.peek()); // Deve ser 3

// Removendo elementos e verificando o menor
console.log("Removido:", pilha.pop()); // Remove 3
console.log("Novo menor elemento:", pilha.getMin()); // Deve ser 5

console.log("Removido:", pilha.pop()); // Remove 5
console.log("Novo menor elemento:", pilha.getMin()); // Deve ser 10

console.log("Removido:", pilha.pop()); // Remove 20
console.log("Novo menor elemento:", pilha.getMin()); // Deve continuar sendo 10

console.log("Removido:", pilha.pop()); // Remove 10
console.log("Novo menor elemento:", pilha.getMin()); // Pilha vazia!

console.log("Pilha está vazia?", pilha.isEmpty()); // Deve ser true