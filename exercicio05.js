// 5. Debounce 
// Crie function debounce(fn, delay) que receba uma função fn e um delay em ms, retornando uma nova função que só executa fn se não for chamada novamente dentro do intervalo.

function debounce(fn, delay) {
  let timeoutId

  return function (...args) {
    clearTimeout(timeoutId) // limpa a chamada anterior
    timeoutId = setTimeout(() => {
      fn(...args) // executa apenas após o delay, se não for interrompido
    }, delay)
  }
}

// Exemplo de uso da função debounce
function exemplo() {
  console.log('Função executada após o intervalo!')
}

// Cria uma versão com debounce
const debouncedExemplo = debounce(exemplo, 2000)

// Simula chamadas rápidas
console.log('Chamando a função várias vezes rapidamente...')
debouncedExemplo()
debouncedExemplo()
debouncedExemplo()

// Apenas a última chamada, depois de 2 segundos, será executada