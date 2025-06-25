// 4. Fatorial Recursivo 
// Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando um Error, e n === 0 retornando 1.

const prompt = require('prompt-sync')()

function fatorial(n) {
  if (n < 0) {
    throw new Error('O fatorial não está definido para números negativos.')
  }
  if (n === 0) {
    return 1
  }
  return n * fatorial(n - 1)
}

try {
  let numero = Number(prompt('Digite um número inteiro não negativo: '))

  if (Number.isInteger(numero)) {
    let resultado = fatorial(numero)
    console.log(`Fatorial de ${numero} é: ${resultado}`)
  } else {
    console.log('Por favor, digite um número inteiro válido.')
  }
} catch (erro) {
  console.log(`Erro: ${erro.message}`)
}
