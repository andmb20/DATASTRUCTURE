// -------- CLASSE Graph --------
// Implementação de um Grafo usando uma estrutura de lista de adjacência.
// Cada vértice (nó) é armazenado em um mapa, e suas conexões (arestas) são mantidas em listas.

class Graph {
    constructor() {
        this.vertices = new Map(); // Mapa de vértices: Chave = vértice, Valor = lista de vizinhos.
    }

    // -------- MÉTODO ADDVERTEX --------
    // Adiciona um novo vértice ao grafo, inicializando sua lista de adjacência.
    addVertex(vertex) {
        if (!this.vertices.has(vertex)) {
            this.vertices.set(vertex, []); // Cria uma lista vazia para armazenar os vizinhos do vértice.
        }
    }

    // -------- MÉTODO ADDEDGE --------
    // Adiciona uma aresta entre dois vértices, conectando-os na lista de adjacência.
    // O grafo é não-direcionado, então a conexão é bidirecional.
    addEdge(v1, v2) {
        this.vertices.get(v1).push(v2); // Adiciona v2 à lista de vizinhos de v1.
        this.vertices.get(v2).push(v1); // Adiciona v1 à lista de vizinhos de v2 (para grafos direcionados, remova essa linha).
    }

    // -------- MÉTODO GETNEIGHBORS --------
    // Retorna a lista de vizinhos de um determinado vértice.
    getNeighbors(vertex) {
        return this.vertices.get(vertex) || []; // Se o vértice não existir, retorna uma lista vazia.
    }

    // -------- MÉTODO BFS (Busca em Largura) --------
    // Explora os nós vizinhos primeiro antes de avançar para os níveis mais profundos.
    bfs(start) {
        const visited = new Set(); // Conjunto para armazenar os nós já visitados.
        const queue = [start]; // Fila para garantir a exploração em largura.
        visited.add(start); // Marca o nó inicial como visitado.

        while (queue.length > 0) {
            const current = queue.shift(); // Remove o primeiro nó da fila.
            console.log(current); // Processa o nó atual.

            for (const neighbor of this.getNeighbors(current)) {
                if (!visited.has(neighbor)) { // Se o vizinho ainda não foi visitado:
                    visited.add(neighbor); // Marca como visitado.
                    queue.push(neighbor); // Adiciona na fila para explorar depois.
                }
            }
        }
    }

    // -------- MÉTODO DFS (Busca em Profundidade) --------
    // Explora o máximo possível cada caminho antes de retroceder.
    dfs(start, visited = new Set()) {
        if (visited.has(start)) return; // Se o nó já foi visitado, retorna.

        console.log(start); // Processa o nó atual.
        visited.add(start); // Marca o nó como visitado.

        for (const neighbor of this.getNeighbors(start)) {
            this.dfs(neighbor, visited); // Explora recursivamente os vizinhos.
        }
    }

    // -------- MÉTODO HASCYCLE --------
    // Verifica se o grafo contém um ciclo usando DFS.

    hasCycle() {
        const visited = new Set(); // Conjunto para rastrear os vértices visitados.

        // Percorre todos os vértices do grafo para garantir que todos os componentes são explorados.
        for (const vertex of this.vertices.keys()) {
            if (!visited.has(vertex)) { // Se o vértice ainda não foi visitado:
                if (this._hasCycleDFS(vertex, visited, null)) { // Chama DFS para detectar ciclos.
                    return true; // Se um ciclo for encontrado, retorna verdadeiro.
                }
            }
        }
        return false; // Se nenhum ciclo foi detectado, retorna falso.
    }

    // -------- MÉTODO _HASCYCLEDFS --------
    // Algoritmo recursivo para detectar ciclos usando DFS.
    // Se um vértice visitado for encontrado novamente **sem ser o pai imediato**, então há um ciclo.

    _hasCycleDFS(vertex, visited, parent) {
        visited.add(vertex); // Marca o vértice como visitado.

        // Percorre todos os vizinhos do vértice atual.
        for (const neighbor of this.getNeighbors(vertex)) {
            if (!visited.has(neighbor)) { // Se o vizinho ainda não foi visitado:
                if (this._hasCycleDFS(neighbor, visited, vertex)) { // Chama DFS recursivamente.
                    return true; // Se um ciclo for detectado em qualquer caminho, retorna verdadeiro.
                }
            } else if (neighbor !== parent) {
                // Se um vizinho já visitado for encontrado e **não for o pai imediato**, então há um ciclo!
                return true;
            }
        }

        return false; // Se todos os vizinhos forem explorados sem detectar ciclos, retorna falso.
    }

}

// -------- TESTANDO A CLASSE Graph --------
const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "D");

console.log("BFS:");
g.bfs("A"); // Explora os nós nível por nível: "A", "B", "C", "D".

console.log("\nDFS:");
g.dfs("A"); // Explora um caminho até o fim antes de voltar: "A", "B", "D", "C".

// -------- TESTE DA DETECÇÃO DE CICLO --------
console.log("\nDetecção de Ciclo:");
console.log(g.hasCycle() ? "O grafo contém um ciclo." : "O grafo não contém ciclos.");




