import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { CepProvider } from './contexts/CepContext'

ReactDOM.render(
  <React.StrictMode>
    <CepProvider>
      <App />
    </CepProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
