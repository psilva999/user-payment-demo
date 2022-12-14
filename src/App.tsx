import React from 'react'
import { handleBody } from './ts/index'


function App() {
  window.addEventListener("load", handleBody)

  return (
    <>
      <h1>Estatísticas: </h1>
      <span>Total: </span>

      <article id='pagamento'></article>
      <article id='status'></article>

      <h2>Data</h2>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Compra</th>
            <th>Pagamento</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody></tbody>
      </table>
    </>

  )
}

export default App
