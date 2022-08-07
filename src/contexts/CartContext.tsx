import { createContext, useState } from "react"

export const CartContext = createContext({})

export const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState(false)
  const [delivery, setDelivery] = useState(false)

  function openCart() {
    setCart(true)
  }

  function closeCart() {
    setCart(false)
  }

  function openDeliveryCard() {
    setDelivery(true)
  }

  function closeDeliveryCard() {
    setDelivery(false)
  }

  return (
    <CartContext.Provider value={{ cart, setCart, delivery, setDelivery, openCart, closeCart, openDeliveryCard, closeDeliveryCard }}>
      {children}
    </CartContext.Provider>
  )
}
