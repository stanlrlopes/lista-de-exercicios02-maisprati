// 7. Mapeamento e Ordenação 
// Dado um array produtos = [{ nome, preco }, …], crie uma função que retorne um novo array apenas com os nomes, ordenados por preço crescente, usando map, sort.

const produtos = [
  { nome: 'Mouse', preco: 50 },
  { nome: 'Monitor', preco: 800 },
  { nome: 'Teclado', preco: 100 },
  { nome: 'Notebook', preco: 3000 }
]

function nomesOrdenadosPorPreco(produtos) {
  return produtos
    .slice() // não alterar o array original
    .sort((a, b) => a.preco - b.preco) // ordena por preço crescente
    .map(produto => produto.nome) // extrai apenas os nomes
}

const nomesOrdenados = nomesOrdenadosPorPreco(produtos)
console.log('Produtos ordenados por preço:', nomesOrdenados)
