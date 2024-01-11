import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import CounterApp from './CounterApp.jsx'
import './CounterApp.css' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp />
  </React.StrictMode>,
)
