export const getProducts = async () => {
  const response = await fetch('https://dummyjson.com/products')
  const { products } = await response.json()
  return products
}

export const getProductsByCategory = async (category) => {
  const response = await fetch(`https://dummyjson.com/products/category/${category}`)
  const data = await response.json()
  return data
}
