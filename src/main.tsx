import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './css/app.min.css'

ReactDOM.createRoot(document.querySelector('section') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
