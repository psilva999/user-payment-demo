import { CountList } from "./countBy"
import fetchData from "./fetchData"
import normalizeTransacao from "./normalizeTransacao"
import Stats from "./Stats"

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>('https://api.origamid.dev/json/transacoes.json?')

  if (!data) return
  const transacoes = data.map(normalizeTransacao)

  fillTable(transacoes)
  fillStatistics(transacoes)
}

function fillList(list: CountList, containerId: string): void {
  const containerElement = document.getElementById(containerId)

  if (containerElement) {
    Object.keys(list).forEach(key => {
      containerElement.innerHTML += `
      <p>${ key }: ${ list[key] }</p>`
    })
  }
}

function fillStatistics(transacoes: Transacao[]): void {
  const data = new Stats(transacoes),
        span = document.querySelector<HTMLElement>("span"),
        dia = document.querySelector<HTMLElement>
        ('#melhorDia')

  if (span) {
    span.innerText += data.value.toLocaleString('pt-BR', { 
      style: 'currency',
      currency: 'BRL'
    })
  }

  fillList(data.pagamento, 'pagamento')
  fillList(data.status, 'status')

  if (dia) {
    dia.innerText += data.melhorDia[0]
  }
}

function fillTable(transcacoes: Transacao[]): void {
  const table = document.querySelector('table tbody')

  if (!table) return

  transcacoes.forEach(transacao => {
    table.innerHTML += `
      <tr>
        <td>${ transacao.nome }</td>
        <td>${ transacao.email }</td>
        <td>R$ ${ transacao.moeda }</td>
        <td>${ transacao.pagamento }</td>
        <td>${ transacao.status }</td>
      </tr>
    `
  })
}

export function handleBody() {
  handleData()
}


