// -------- CLASSE SimpleSet --------
// Implementação básica de um conjunto (Set) usando um objeto para armazenar os elementos.

class SimpleSet {
  constructor() {
    // Criamos um objeto para armazenar os elementos do conjunto.
    // Como objetos não permitem chaves duplicadas, isso simula o comportamento de um Set.
    this.items = {};
  }

  // -------- MÉTODO ADD --------
  // Adiciona um elemento ao conjunto, garantindo que ele seja único.
  add(value) {
    if (!this.has(value)) { // Verifica se o valor já está no conjunto
      this.items[value] = true; // Adiciona o valor ao conjunto
    }
  }

  // -------- MÉTODO DELETE --------
  // Remove um elemento do conjunto, se ele existir.
  delete(value) {
    if (this.has(value)) { // Verifica se o valor está presente
      delete this.items[value]; // Remove o valor do conjunto
    }
  }

  // -------- MÉTODO HAS --------
  // Verifica se um elemento está presente no conjunto.
  has(value) {
    return this.items.hasOwnProperty(value); // Retorna true se o valor existir
  }

  // -------- MÉTODO SIZE --------
  // Retorna o número de elementos presentes no conjunto.
  size() {
    return Object.keys(this.items).length; // Obtém a quantidade de chaves armazenadas
  }

  // -------- MÉTODO UNION --------
  // Retorna um novo conjunto contendo os elementos de ambos os conjuntos.
  union(outroSet) {
    const novoSet = new SimpleSet(); // Cria um novo conjunto vazio
    
    // Adiciona todos os elementos do conjunto atual ao novo conjunto
    for (let item in this.items) {
      novoSet.add(item);
    }

    // Adiciona todos os elementos do outro conjunto ao novo conjunto
    for (let item in outroSet.items) {
      novoSet.add(item);
    }

    return novoSet; // Retorna o conjunto resultante da união
  }
}

// -------- TESTANDO A CLASSE SimpleSet --------
const meuSet = new SimpleSet(); // Criando um conjunto

// Adicionando elementos ao conjunto
meuSet.add("a");
meuSet.add("b");
meuSet.add("a"); // Este não será adicionado, pois já existe

// Verificando a presença de um elemento
console.log(meuSet.has("a")); // true → 'a' está no conjunto

// Removendo um elemento
meuSet.delete("b");
console.log(meuSet.has("b")); // false → 'b' foi removido

// Obtendo o tamanho do conjunto
console.log("Tamanho do conjunto:", meuSet.size()); // Deve retornar 1, pois só 'a' permanece