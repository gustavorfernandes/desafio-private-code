import { createContext, useState } from "react"

export const GlobalContext = createContext({})

export const ContextProvider = ({ children }: any) => {
  const [cart, setCart] = useState(false)

  function openCart() {
    setCart(true)
  }

  function closeCart() {
    setCart(false)
  }

  const [delivery, setDelivery] = useState(false)

  function openDeliveryCard() {
    setDelivery(true)
  }

  function closeDeliveryCard() {
    setDelivery(false)
  }

  const [isSubmitSucess, setSubmitSucess] = useState(false)

  function openSucessCard() {
    setSubmitSucess(true)
  }

  function closeSucessCard() {
    setSubmitSucess(false)
  }

  const [loading, setLoading] = useState(false)
  const [dataViaCep, setDataViaCep] = useState<any>({})

  const [deliveryMethod, setDeliveryMethod] = useState("")
  const [cep, setCep] = useState("")
  const [district, setDistrict] = useState("")
  const [number, setNumber] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [complement, setComplement] = useState("")
  const [reference, setReference] = useState("")

  async function searchZipCode(cep: string, input: HTMLInputElement) {
    const zipCode: string = cep.replace(/\D/g, '')
    const url: string = `https://viacep.com.br/ws/${zipCode}/json/`
    const options: {} = {
      method: 'GET',
      mode: 'cors',
      headers: {
        'content-type': 'application/json;charset=utf-8'
      }
    }

    if (cep) {
      let response = await fetch(url, options)
      let data = await response.json()
      setDataViaCep(data)
      console.log(data)
      if (data.erro) {
        input.setCustomValidity("O CEP não está válido")
        return
      }
      input.setCustomValidity("")
      fillFields( await data)
    }
  }

  function fillFields(data: any) {
    setDistrict(data.bairro)    
    setCity(data.localidade)    
    setState(data.uf)
  }

  function clearFields() {
    setDistrict("")
    setNumber("")
    setCity("")
    setState("")
    setComplement("")
    setReference("")
  }

  return (
    <GlobalContext.Provider value={{ cart, setCart, openCart, closeCart, delivery, setDelivery, openDeliveryCard, closeDeliveryCard, isSubmitSucess, setSubmitSucess, openSucessCard, closeSucessCard, loading, setLoading, deliveryMethod, setDeliveryMethod, cep, setCep, district, setDistrict, number, setNumber, city, setCity, state, setState, complement, setComplement, reference, setReference, dataViaCep, setDataViaCep, searchZipCode, fillFields, clearFields }}>
      {children}
    </GlobalContext.Provider>
  )
}
