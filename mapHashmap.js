// -------- CLASSE SimpleMap --------
// Implementação de um mapa (estrutura de chave-valor) usando tabelas de dispersão (hash table).

class SimpleMap {
  constructor() {
    // Criamos um array de "baldes" (buckets) para armazenar os pares chave-valor.
    // Cada balde é uma lista (array) e há um total de 100 baldes inicialmente.
    this.buckets = Array(100).fill(null).map(() => []);
  }

  // -------- MÉTODO _HASH --------
  // Calcula um valor de hash para a chave, baseado na soma dos códigos Unicode dos caracteres.
  // O resultado é limitado ao tamanho do array de baldes para garantir que sempre haja um índice válido.
  _hash(chave) {
    let hash = 0;
    for (let char of chave) {
      hash += char.charCodeAt(0); // Soma os valores Unicode de cada caractere
    }
    return hash % this.buckets.length; // Retorna um índice válido dentro do array de baldes
  }

  // -------- MÉTODO SET --------
  // Adiciona um par chave-valor ao mapa. Se a chave já existir, apenas atualiza o valor.
  set(chave, valor) {
    const hash = this._hash(chave); // Calcula o índice do balde onde armazenar a chave
    const bucket = this.buckets[hash]; // Obtém o balde correspondente

    // Percorre o balde para verificar se a chave já existe
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === chave) {
        bucket[i][1] = valor; // Atualiza o valor se a chave já estiver presente
        return;
      }
    }
    
    bucket.push([chave, valor]); // Se a chave não existir, adiciona um novo par chave-valor
  }

  // -------- MÉTODO GET --------
  // Obtém o valor correspondente a uma chave. Retorna undefined se a chave não existir.
  get(chave) {
    const hash = this._hash(chave); // Obtém o índice do balde correspondente
    const bucket = this.buckets[hash]; // Recupera o balde onde a chave pode estar armazenada

    // Percorre os pares no balde para encontrar a chave
    for (let [k, v] of bucket) {
      if (k === chave) return v; // Retorna o valor correspondente à chave
    }

    return undefined; // Se a chave não for encontrada, retorna undefined
  }
}

// -------- TESTANDO A CLASSE SimpleMap --------
const mapa = new SimpleMap(); // Criando um novo mapa

// Adicionando pares chave-valor
mapa.set("nome", "Bob"); // Adiciona "nome" -> "Bob"
console.log(mapa.get("nome")); // "Bob" → Busca pelo valor associado à chave "nome"

mapa.set("idade", 25); // Adiciona "idade" -> 25
console.log(mapa.get("idade")); // 25 → Busca pelo valor associado à chave "idade"

mapa.set("nome", "Alice"); // Atualiza o valor associado à chave "nome"
console.log(mapa.get("nome")); // "Alice" → O valor de "nome" foi atualizado de "Bob" para "Alice"

console.log(mapa.get("cidade")); // undefined → Não existe chave "cidade" no mapa