import { createContext, useState } from "react"

export const GlobalContext = createContext({})

export const ContextProvider = ({ children }: any) => {
  const [cart, setCart] = useState(false)
  const [delivery, setDelivery] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isSubmitSucess, setSubmitSucess] = useState(false)

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

  function openSucessCard() {
    setSubmitSucess(true)
  }

  function closeSucessCard() {
    setSubmitSucess(false)
  }

  return (
    <GlobalContext.Provider value={{ cart, setCart, delivery, setDelivery, loading, setLoading, isSubmitSucess, setSubmitSucess, openCart, closeCart, openDeliveryCard, closeDeliveryCard, openSucessCard, closeSucessCard }}>
      {children}
    </GlobalContext.Provider>
  )
}
