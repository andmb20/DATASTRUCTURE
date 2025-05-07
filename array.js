// -------------------- ARRAYS MULTIDIMENSIONAIS --------------------
// Criando uma matriz (array dentro de outro array)
let matriz = [[1, 2], [3, 4]]; // Matriz 2x2
console.log(matriz[1][0]); // Acessa a posição linha 1, coluna 0 -> Resultado: 3

// -------------------- CLASSE MEUARRAY --------------------
// Criando uma classe personalizada para trabalhar com arrays
class MeuArray {
    constructor() {
        // Inicializa um array vazio com um contador de elementos (length) e um objeto para armazenar os dados
        this.length = 0; // Quantidade de elementos no array
        this.data = {};  // Objeto para armazenar os elementos do array
    }

    // Método para acessar um elemento por índice (O(1))
    get(index) {
        return this.data[index]; // Retorna o valor armazenado na posição index
    }

    // Método para adicionar um elemento ao final do array (O(1))
    push(item) {
        this.data[this.length] = item; // Armazena o item na posição correta
        this.length++; // Incrementa o tamanho do array
        return this.length; // Retorna o novo tamanho do array
    }

    // Método para remover o último elemento do array (O(1))
    pop() {
        if (this.length === 0) return undefined; // Se estiver vazio, retorna undefined
        const item = this.data[this.length - 1]; // Obtém o último elemento
        delete this.data[this.length - 1]; // Remove o último elemento
        this.length--; // Decrementa o tamanho do array
        return item; // Retorna o item removido
    }

    // Método para remover um elemento de qualquer posição do array (O(n))
    delete(index) {
        const item = this.data[index]; // Obtém o item a ser removido
        this.shiftItems(index); // Ajusta os elementos restantes
        return item; // Retorna o item removido
    }

    // Método para deslocar elementos à esquerda após uma remoção (O(n))
    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]; // Move elementos para preencher o espaço
        }
        delete this.data[this.length - 1]; // Remove o último elemento redundante
        this.length--; // Atualiza o tamanho do array
    }

    // Método para inserir um elemento no início do array (O(n))
    unshift(item) {
        for (let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1]; // Move todos os elementos para frente
        }
        this.data[0] = item; // Insere o novo item na posição inicial
        this.length++; // Atualiza o tamanho do array
        return this.length;
    }

    // Método para verificar se um item existe no array (O(n))
    includes(item) {
        for (let i = 0; i < this.length; i++) {
            if (this.data[i] === item) return true; // Se encontrar o item, retorna verdadeiro
        }
        return false; // Caso contrário, retorna falso
    }

    // Método para inverter os elementos do array em um novo array (O(n))
    reverse() {
        const reversedArray = new MeuArray();
        for (let i = this.length - 1; i >= 0; i--) {
            reversedArray.push(this.data[i]); // Adiciona os elementos na ordem inversa
        }
        return reversedArray;
    }

    // Método para inverter os elementos do array no próprio objeto (O(n))
    reverseInPlace() {
        for (let i = 0; i < Math.floor(this.length / 2); i++) {
            const temp = this.data[i]; // Guarda temporariamente o valor
            this.data[i] = this.data[this.length - 1 - i]; // Troca os elementos
            this.data[this.length - 1 - i] = temp;
        }
    }

    // Método para converter o array em uma string separada por vírgulas (O(n))
    toString() {
        let result = "";
        for (let i = 0; i < this.length; i++) {
            result += this.data[i];
            if (i < this.length - 1) result += ",";
        }
        return result;
    }
}

// -------------------- TESTANDO A CLASSE --------------------

// Criando um novo array
const array = new MeuArray();

// Adicionando elementos ao array
array.push("a");
array.push("b");
array.push("c");
array.push(1);
array.push(2);
array.push(3);

console.log("Array original:", array.toString()); // Exibe o array inicial

// Testando remoção de elemento específico
console.log("Removendo item na posição 1:", array.delete(1)); // Remove "b"

console.log("Array após remoção:", array.toString()); // Exibe o array atualizado

// Testando inversão do array
const reversed = array.reverse();
console.log("Array invertido:", reversed.toString()); // Exibe o array invertido

// Testando busca de elementos
console.log("Existe 'a'?", array.includes("a")); // true
console.log("Existe 'z'?", array.includes("z")); // false

// Testando inserção no início do array
array.unshift("X");
console.log("Array após inserir 'X' no início:", array.toString());

console.log("Elemento na posição 0:", array.get(0)); // Exibe o primeiro elemento

// Testando inversão direta no próprio array
array.reverseInPlace();
console.log("Array após inversão no próprio objeto:", array.toString());
