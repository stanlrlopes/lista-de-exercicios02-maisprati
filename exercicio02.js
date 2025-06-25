//2. Jogo de Adivinhação 
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao usuário, para adivinhar. Use while para repetir até acertar, contando tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const prompt = require('prompt-sync')()

// Gera número aleatório entre 1 e 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1

let tentativa
let tentativas = 0

console.log('Jogo de Adivinhação: tente descobrir o número secreto de 1 a 100!')

while (tentativa !== numeroSecreto) {
  tentativa = Number(prompt('Digite seu palpite: '))

  if (tentativa) {
    tentativas++

    if (tentativa < numeroSecreto) {
      console.log('Mais alto...')
    } else if (tentativa > numeroSecreto) {
      console.log('Mais baixo...')
    } else {
      console.log(`Parabéns! Você acertou em ${tentativas} tentativa(s)!`)
    }
  } else {
    console.log('Por favor, digite um número válido.')
  }
}
