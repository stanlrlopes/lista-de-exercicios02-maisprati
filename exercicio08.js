// 8. Agrupamento por Propriedade 
// Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde cada chave é um cliente e o valor é a soma de todos os seus total.

const vendas = [
  { cliente: 'Ana', total: 150 },
  { cliente: 'Bruno', total: 200 },
  { cliente: 'Ana', total: 100 },
  { cliente: 'Carlos', total: 300 },
  { cliente: 'Bruno', total: 150 }
]

function agruparPorCliente(vendas) {
  return vendas.reduce((acumulador, venda) => {
    const cliente = venda.cliente

    if (!acumulador[cliente]) {
      acumulador[cliente] = 0
    }

    acumulador[cliente] += venda.total
    return acumulador
  }, {})
}

const resultado = agruparPorCliente(vendas)
console.log('Total por cliente:', resultado)