// 3. Palavras Únicas 
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair todas as palavras únicas e exibi-las em um array.

const prompt = require('prompt-sync')()

let frase = prompt('Digite uma frase: ')
let palavras = frase.split(' ')
let unicas = []

for (let i = 0; i < palavras.length; i++) {
  let palavraAtual = palavras[i]
  let contador = 0

  // Conta quantas vezes a palavra aparece na frase
  for (let j = 0; j < palavras.length; j++) {
    if (palavraAtual === palavras[j]) {
      contador++
    }
  }

  // Se apareceu só uma vez e ainda não está no array de únicas
  if (contador === 1) {
    unicas.push(palavraAtual)
  }
}

console.log('Palavras únicas:', unicas)