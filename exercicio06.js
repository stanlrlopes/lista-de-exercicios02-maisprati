// 6. Memoization 
// Implemente function memoize(fn) que armazene em cache chamadas anteriores de fn (por argumentos), retornando resultados instantâneos em repetidas invocações.

function memoize(fn) {
  const cache = {}

  return function (...args) {
    const chave = JSON.stringify(args) // transforma os argumentos em string única

    if (cache[chave] !== undefined) {
      console.log('Resultado recuperado do cache!')
      return cache[chave]
    }

    const resultado = fn(...args)
    cache[chave] = resultado
    return resultado
  };
}

// Exemplo de uso: fatorial com memoização
function fatorial(n) {
  if (n === 0) return 1
  return n * fatorial(n - 1)
}

const fatorialMemoizado = memoize(fatorial)

console.log(fatorialMemoizado(5)) // calcula normalmente
console.log(fatorialMemoizado(5)) // usa cache
console.log(fatorialMemoizado(6)) // aproveita cache de fatorial(5)