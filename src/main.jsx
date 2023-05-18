import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProductsProvider } from './contex/Products.jsx'
import { FilterProvider } from './contex/filters.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FilterProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </FilterProvider>
  </React.StrictMode>
)
