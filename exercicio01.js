// 1. Validação de Datas 
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores formarem uma data real (meses de 28–31 dias, ano bissexto para fevereiro) e false caso contrário.

const prompt = require('prompt-sync')()

function ehAnoBissexto(ano) {
  return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)
}

function ehDataValida(dia, mes, ano) {
  if (dia <= 0 || mes <= 0 || mes > 12 || ano <= 0) {
    return false
  }

  let diasNoMes

  switch (mes) {
    case 2:
      diasNoMes = ehAnoBissexto(ano) ? 29 : 28
      break
    case 4:
    case 6:
    case 9:
    case 11:
      diasNoMes = 30
      break
    default:
      diasNoMes = 31
  }

  return dia <= diasNoMes
}

let dia = Number(prompt('Digite o dia: '))
let mes = Number(prompt('Digite o mês: '))
let ano = Number(prompt('Digite o ano: '))

if (ehDataValida(dia, mes, ano)) {
  console.log('Data válida!')
} else {
  console.log('Data inválida!')
}