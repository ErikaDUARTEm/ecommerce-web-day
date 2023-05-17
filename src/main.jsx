import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProductsProvider } from './context/Products.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductsProvider>
    <App />
<<<<<<< HEAD
  </ProductsProvider>

=======
  </React.StrictMode>
>>>>>>> 76f172afecdb0312929c2c062edc248d53431545
)
