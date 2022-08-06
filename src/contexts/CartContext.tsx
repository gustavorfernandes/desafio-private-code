import { createContext, useState } from "react"

export const CartContext = createContext({})

export const CartProvider = ({ children }: any) => {
  const [counter, setCounter] = useState(0)
  const [cartCounter, setCartCounter] = useState(0)  

  function addItemsToCart(amount: number) {
    let cartCount = cartCounter
    setCartCounter(cartCount += amount)
  }

  function clearCart() {
    setCartCounter(0)
  }

  return (
    <CartContext.Provider value={{ counter, cartCounter, addItemsToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}