import { TransactionsProvider } from './context/TransactionContext'
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
import './styles/index.css'


ReactDOM.createRoot(document.getElementById('root')).render(

  <TransactionsProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TransactionsProvider>

)
