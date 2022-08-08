import { createContext, useState } from "react"

export const GlobalContext = createContext({})

export const ContextProvider = ({ children }: any) => {
  
  //Requisição à API de produtos

  const [dataAPI, setDataAPI] = useState([])
  const [url, setUrl] =useState("http://localhost:8080/produtos")

  async function fetchDataAPI(url: string) {    
    const options: {} = {
      method: 'GET',
      mode: 'cors',
      headers: {
        'content-type': 'application/json;charset=utf-8'
      }
    }
    let response = await fetch(url, options)
    let data = await response.json()
    setDataAPI(data)
    if (data.erro) {
      console.log("erro")
      return
    }
  }

  //Listagem de produtos

  const [category, setCategory] = useState(0)

  function filterList(category: number) {
    setCategory(category)
    console.log(category)
  }

  //Abertura de pedido




  //Carrinho de compras

  const [cart, setCart] = useState(false)

  function openCart() {
    setCart(true)
  }
  function closeCart() {
    setCart(false)
  }

  //Formulário de entrega 

  const [delivery, setDelivery] = useState(false)
 
  function openDeliveryCard() {
    setDelivery(true)
  }
  function closeDeliveryCard() {
    setDelivery(false)
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

  //Informações do CEP
  
  async function searchZipCode(cep: string, input: HTMLInputElement) {
    const zipCode: string = cep.replace(/\D/g, '')
    const urlViaCep: string = `https://viacep.com.br/ws/${zipCode}/json/`
    const options: {} = {
      method: 'GET',
      mode: 'cors',
      headers: {
        'content-type': 'application/json;charset=utf-8'
      }
    }

    if (cep) {
      let response = await fetch(urlViaCep, options)
      let data = await response.json()
      setDataViaCep(data)
      if (data.erro) {
        input.setCustomValidity("O CEP não está válido")
        return
      }
      input.setCustomValidity("")
      fillFields(await data)
    }
  }

  function fillFields(data: any) {
    setDistrict(data.bairro)
    setCity(data.localidade)
    setState(data.uf)
  }

  function clearFields() {
    setCep("")
    setDistrict("")
    setNumber("")
    setCity("")
    setState("")
    setComplement("")
    setReference("")
  }

   //Pedido realizado com sucesso

   const [isSubmitSucess, setSubmitSucess] = useState(false)
  
   function openSucessCard() {
     setSubmitSucess(true)
   }
   function closeSucessCard() {
     setSubmitSucess(false)
   }

  return (
    <GlobalContext.Provider value={{ category, setCategory, filterList, dataAPI, setDataAPI, url, setUrl, fetchDataAPI, cart, setCart, openCart, closeCart, delivery, setDelivery, openDeliveryCard, closeDeliveryCard, isSubmitSucess, setSubmitSucess, openSucessCard, closeSucessCard, loading, setLoading, deliveryMethod, setDeliveryMethod, cep, setCep, district, setDistrict, number, setNumber, city, setCity, state, setState, complement, setComplement, reference, setReference, dataViaCep, setDataViaCep, searchZipCode, fillFields, clearFields }}>
      {children}
    </GlobalContext.Provider>
  )
}
