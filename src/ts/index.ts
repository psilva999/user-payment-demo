import fetchData from "./fetchData"
import normalizeTransacao from "./normalizeTransacao"

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>('https://api.origamid.dev/json/transacoes.json?')

  if (!data) return
  const transacoes = data.map(normalizeTransacao)

  fillTable(transacoes)
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


