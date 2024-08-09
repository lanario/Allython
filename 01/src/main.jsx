import React from 'react'
import ReactDOM from 'react-dom/client' // Document object module (integrando o react ao ambiente web)
import {App} from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
