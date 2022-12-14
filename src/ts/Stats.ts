type TransacaoValor = Transacao & { valor: number }

function filterValue(transacao: Transacao): transacao is TransacaoValor {
  return transacao.valor !== null
}

export default class Stats {
  private transacoes
  value

  constructor(transacoes: Transacao[]) {
    this.transacoes = transacoes
    this.value = this.setValue()
  }

  private setValue() {
    return this.transacoes.filter(filterValue).reduce((acc, item) => {
      return acc + item.valor
    }, 0)
  }
}