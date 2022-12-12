import React from 'react'
import { handleBody } from './ts/index'


function App() {
  window.addEventListener("load", handleBody)

  return (
    <div>
      Hello
    </div>
  )
}

export default App
