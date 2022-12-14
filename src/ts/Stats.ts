import countBy from "./countBy";

type TransacaoValor = Transacao & { valor: number }

function filterValue(transacao: Transacao): transacao is TransacaoValor {
  return transacao.valor !== null
}

export default class Stats {
  private transacoes

  value;
  pagamento;
  status;

  constructor(transacoes: Transacao[]) {
    this.transacoes = transacoes
    this.value = this.setValue()

    this.pagamento = this.setPagamento()
    this.status = this.setStatus()
  }

  private setValue() {
    return this.transacoes.filter(filterValue).reduce((acc, item) => {
      return acc + item.valor
    }, 0)
  }

  private setPagamento() {
    return countBy(this.transacoes.map(({ pagamento }) => pagamento))
  }

  private setStatus() {
    return countBy(this.transacoes.map(({ status }) => status))
  }
}