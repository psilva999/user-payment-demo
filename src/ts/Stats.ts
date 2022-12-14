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

  semana;
  melhorDia;

  constructor(transacoes: Transacao[]) {
    this.transacoes = transacoes
    this.value = this.setValue()
    this.pagamento = this.setPagamento()

    this.status = this.setStatus()
    this.semana = this.setSemana()
    this.melhorDia = this.setMelhorDia()
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

  private setSemana() {
    const semana = {
      ['Domingo']: 0,
      ['Segunda-feira']: 1,

      ['Terça-feira']: 2,
      ['Quarta-feira']: 3,
      ['Quinta-feira']: 4,

      ['Sexta-feira']: 5,
      ['Sábado']: 6
    }

    for (let i = 0; i < this.transacoes.length; i++) {
      const day = this.transacoes[i].data.getDay()

      if (day === 0) semana['Domingo'] += 1
      if (day === 1) semana['Segunda-feira'] += 1

      if (day === 2) semana['Terça-feira'] += 1
      if (day === 3) semana['Quarta-feira'] += 1
      if (day === 4) semana['Quinta-feira'] += 1

      if (day === 5) semana['Sexta-feira'] += 1
      if (day === 6) semana['Sábado'] += 1
    }

    return semana
  }

  private setMelhorDia() {
    return Object.entries(this.semana).sort((a, b) => {
      return b[1] - a[1]
    })[0]
  }
}