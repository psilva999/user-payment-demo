import fetchData from "./fetchData"

type TransacaoPagamento = 'Boleto' | 'Cartão de Crédito'

async function handleData() {
  interface TransacaoAPI {
    Nome: string;
    ID: number;
    Data: string;

    Status: TransacaoPagamento;
    Email: string;

    ['Valor (R$)']: string;
    ['Forma de Pagamento']: TransacaoPagamento;
    ['Cliente Novo']: number;
  }

  const data = await fetchData<TransacaoAPI[]>('https://api.origamid.dev/json/transacoes.json')

  if (data) {
    data.forEach(item => {
      console.log(item["Valor (R$)"])
    })
  }
}

export function handleBody() {
  handleData()
}


