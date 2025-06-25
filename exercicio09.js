// 9. Conversão Entre Formatos 
// Escreva duas funções:
// ○ paresParaObjeto(pares) recebe um array de pares [ [chave, valor], … ] e retorna o objeto equivalente.
// ○ objetoParaPares(obj) faz o inverso, retornando um array de pares.


// 1. Converte array de pares para objeto
function paresParaObjeto(pares) {
  return Object.fromEntries(pares)
}

// 2. Converte objeto para array de pares
function objetoParaPares(obj) {
  return Object.entries(obj)
}

// Exemplos de uso:

const pares = [['nome', 'João'], ['idade', 30], ['cidade', 'São Paulo']]
const obj = paresParaObjeto(pares)

console.log('Objeto gerado a partir dos pares:', obj)

const paresConvertidos = objetoParaPares(obj)
console.log('Pares gerados a partir do objeto:', paresConvertidos)
