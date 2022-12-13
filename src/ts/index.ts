import fetchData from "./fetchData"
import normalizeTransacao from "./normalizeTransacao"

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>('https://api.origamid.dev/json/transacoes.json?')

  if (!data) return
  const transacoes = data.map(normalizeTransacao)

  console.log(transacoes)
  transacoes.forEach(item => {
    item.data
  })
}

export function handleBody() {
  handleData()
}


