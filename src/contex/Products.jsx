import { createContext, useEffect, useState } from 'react'
import { getProducts } from '../services/products'
export const ProductsContext = createContext()
export function ProductsProvider ({ children }) {
  const [products, setProducts] = useState([])
  useEffect(() => {
    getProducts().then(data => setProducts(data))
  }, [])
  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  )
}