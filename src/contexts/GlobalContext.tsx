import { createContext, useState } from "react"
import axios from "axios"

export const GlobalContext = createContext({})

export const ContextProvider = ({ children }: any) => {

  //Requisição à API de produtos

  const [dataAPI, setDataAPI] = useState([])
  const [url, setUrl] = useState("http://localhost:8080/produtos/")

  async function fetchDataAPI(url: string) {
    await axios.get(url)
      .then((response) => {
        setDataAPI(response.data)
      })
      .catch((error) => {
        console.log("Não foi possível se conectar ao banco de dados. Verifique se a API está online.")
      })
  }

  //Listagem de produtos

  const [category, setCategory] = useState(0)

  function filterList(category: number) {
    setCategory(category)
    console.log(category)
  }

  //Abertura de pedido

  const [order, setOrder] = useState({})
  const [productValue, setProductValue] = useState(0)
  const [orderPrice, setOrderPrice] = useState(0)
  const [orderActive, setOrderActive] = useState(false)
  const [product, setProduct] = useState("")

  async function fetchProductData(url: string) {
    const options: {} = {
      method: 'GET',
      mode: 'cors',
      headers: {
        'content-type': 'application/json;charset=utf-8'
      }
    }
    let response = await fetch(url, options)
    let data = await response.json()
    setProduct(data)
    if (data.erro) {
      console.log("erro")
      return
    }
  }

  function openOrder() {
    setOrderActive(true)
  }

  function closeOrder() {
    setOrderActive(false)
  }

  //Contadores

  const [globalCounter, setGlobalCounter] = useState(0)
  const [cartCounter, setCartCounter] = useState(0)

  function incrementCounter() {
    let count = globalCounter + 1
    setGlobalCounter(count)
    
  }  

function decrementCounter() {
  if (globalCounter === 0) {
    return
  } else {
    let count = globalCounter - 1
    setGlobalCounter(count)
  }
}

function clearCounter() {
  setGlobalCounter(0)
}

  //Carrinho de compras

  const [cart, setCart] = useState(false)
  const [cartItem, setCartItem] = useState([])
  const [amount, setAmount] = useState(1)
  const [finalPrice, setFinalPrice] =useState(0)

  function addToCart(product: any) {
    const copyCart: any = [...cartItem]
    const item = copyCart.find((item: any) => item.nome === product.nome)

    if (!item) {
      copyCart.push({
        id: product.id,
        nome: product.nome,
        valor: product.preco,
        quantidade: globalCounter
      })
    } else {
      item.amount = item.amount + 1
    }
    setCartItem(copyCart)
  }

  function openCart() {
    setCart(true)
  }
  function closeCart() {
    setCart(false)
  }
  function clearCart() {
    setCartItem([])
    setOrderPrice(0)
  }
  function toggleFinalPrice() {
    let total = cartItem.reduce(getTotal, 0)
    function getTotal(total: any, item: any) {
      return total + (item.valor * item.quantidade)
    }
    setFinalPrice(total)
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
  const [address, setAddress] = useState("")
  const [complement, setComplement] = useState("")
  const [reference, setReference] = useState("")

  //Integração com a viaCEP

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
    setCity(data.localidade)
    setAddress(data.logradouro)
    setDistrict(data.bairro)
  }

  function clearFields() {
    setCep("")
    setCity("")
    setAddress("")
    setNumber("")
    setDistrict("")
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

  //Envio do pedido para a API

  function sendOrderData() {
    const urlOrder = 'http://localhost:8080/pedidos/'
    axios.post(urlOrder, {
      produtos: cartItem,
      bairro: district,
      cep: cep,
      cidade: city,
      complemento: complement,
      endereco: address,
      forma_de_entrega: deliveryMethod,
      numero: number,
      referencia: reference,
      valor_total: finalPrice
    })
      .catch((error) => {
        console.log("Não foi possível concluir o pedido.")
      })
  }

  return (
    <GlobalContext.Provider value={{ dataAPI, setDataAPI, url, setUrl, fetchDataAPI, category, setCategory, filterList, order, setOrder, orderPrice, setOrderPrice, orderActive, setOrderActive, openOrder, closeOrder, product, setProduct, productValue, setProductValue, fetchProductData, globalCounter, setGlobalCounter, cartCounter, setCartCounter, incrementCounter, decrementCounter, clearCounter, cart, setCart, openCart, closeCart, clearCart, cartItem, setCartItem, amount, setAmount, addToCart, toggleFinalPrice, finalPrice, setFinalPrice, delivery, setDelivery, openDeliveryCard, closeDeliveryCard, loading, setLoading, deliveryMethod, setDeliveryMethod, cep, setCep, district, setDistrict, number, setNumber, city, setCity, complement, setComplement, address, setAddress, reference, setReference, dataViaCep, setDataViaCep, searchZipCode, fillFields, clearFields, isSubmitSucess, setSubmitSucess, openSucessCard, closeSucessCard, sendOrderData }}>
      {children}
    </GlobalContext.Provider>
  )
}
