/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { AnimatePresence, motion } from "framer-motion"
import { useContext, useEffect } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

function ProductCard() {
  const { category, dataAPI, fetchDataAPI, url, openOrder, closeOrder, orderActive, fetchProductData, product, productValue, setProductValue, orderPrice, setOrderPrice, addToCart, globalCounter, incrementCounter, decrementCounter, clearCounter, amount, setAmount }: any = useContext(GlobalContext)

  useEffect(() => {
    fetchDataAPI(url)
  }, [])

  const openProductOrder = (id: number) => {
    fetchProductData(`http://localhost:8080/produtos/${id}/`)
    openOrder()
  }

  return (
    <>
      <div className="w-11/12 flex justify-center h-[calc(100vh-10rem)] mb-[2rem] overflow-y-scroll 
    scrollbar">
        <div className="w-full max-h-24 flex items-center flex-wrap gap-[4%]">
          {dataAPI &&

            dataAPI.map((product: any, index: any) => {
              if (product.categoria_id === category) {
                return (
                  <>
                    <button
                      className="w-full py-1 flex items-center bg-white shadow-container rounded-lg mb-4 select-none"
                      onClick={() => {
                        openProductOrder(product.id)
                      }}
                      key={index}
                    >
                      <div className="w-10/12 flex flex-col justify-center rounded-bl-lg gap-1" key={index}>
                        <span className="font-nunito font-bold text-neutralPrivateCode-700 ml-4 text-left" key={index}>
                          {product.nome}
                        </span>
                        <span className="w-10/12 font-nunito text-xs text-neutralPrivateCode-600 ml-4 text-left mb-1" key={index}>
                          {product.descricao}
                        </span>
                        <span className="font-nunito font-bold text-xs text-neutralPrivateCode-600 ml-4 text-left" key={index}>
                          {`R$ ${product.preco},00`}
                        </span>
                      </div>

                      <img
                        className="w-24 h-24 rounded-br-lg rounded-tr-lg"
                        src={`/images/products/${product.id}.jpg`}
                        alt={`Produto ${product.id}`}
                        key={index}
                      />
                    </button>
                  </>
                )
              }

              if (category === 0) {
                return (
                  <>
                    <button
                      className="w-full py-1 flex items-center bg-white shadow-container rounded-lg mb-4 select-none"
                      onClick={() => {
                        openProductOrder(product.id)
                      }}
                      key={index}
                    >
                      <div className="w-10/12 flex flex-col justify-center rounded-bl-lg gap-1" key={index}>
                        <span className="font-nunito font-bold text-neutralPrivateCode-700 ml-4 text-left" key={index}>
                          {product.nome}
                        </span>
                        <span className="w-10/12 font-nunito text-xs text-neutralPrivateCode-600 ml-4 text-left mb-1" key={index}>
                          {product.descricao}
                        </span>
                        <span className="font-nunito font-bold text-xs text-neutralPrivateCode-600 ml-4 text-left" key={index}>
                          {`R$ ${product.preco},00`}
                        </span>
                      </div>

                      <img
                        className="w-24 h-24 rounded-br-lg rounded-tr-lg"
                        src={`/images/products/${product.id}.jpg`}
                        alt={`Produto ${product.id}`}
                        key={index}
                      />
                    </button>
                  </>
                )
              }
            })}
        </div>
      </div >

      <AnimatePresence>
        {orderActive &&
          <>
            <div id="overlay" className="fixed z-10 inset-0 bg-black opacity-30" onClick={() => {
              closeOrder()
              clearCounter()
            }}
            />

            <div className="w-11/12 fixed z-20 top-24">
              <motion.div
                className="w-full h-full bg-white flex flex-col items-center justify-center rounded-md select-none shadow-container"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  className="self-end font-poppins text-lg font-normal mr-4 mt-3"
                  onClick={() => {
                    closeOrder()
                    clearCounter()
                  }}
                >
                  <img
                    className="w-5 self-end"
                    src="/images/close.png"
                    alt="Fechar"
                  />
                </button>

                <div className="w-full flex flex-col items-center justify-center mt-4">
                  <div className="w-11/12 flex items-center justify-center rounded">
                    <img
                      className="w-full h-64 rounded"
                      src={`/images/products/${product.id}.jpg`}
                      alt={`Produto ${product.id}`}
                    />
                  </div>
                </div>

                <div className="w-full flex flex-col items-center justify-center">
                  <>

                    <div className="w-11/12 flex flex-col items-center justify-center border-b pb-3">
                      <div className="w-full bg-neutralPrivateCode-300 mt-4 rounded">
                        <div className="flex justify-between items-start w-full py-3 px-3">
                          <div className="flex flex-col justify-center">
                            <span className="text-neutralPrivateCode-700">
                              {product.nome}
                            </span>
                            <span className="text-xs text-neutralPrivateCode-600 w-10/12">
                              {product.descricao}
                            </span>
                          </div>
                          <div className="flex flex-col items-end justify-center gap-4">
                            <span className="bg-neutralPrivateCode-400 py-1 px-2 rounded-md text-xs font-bold text-neutralPrivateCode-600">
                              Obrigatório
                            </span>
                            <span className="text-neutral-600 text-xs">
                              {`R$ ${product.preco},00`}
                            </span>
                          </div>
                        </div>

                      </div>
                    </div>

                    <div className="w-full flex items-center justify-between px-6 pt-4 mb-4">
                      <span className="w-4/12 text-xs text-neutralPrivateCode-700 font-nunito">
                        Produto
                      </span>
                      <span className="w-4/12 text-xs text-neutralPrivateCode-700 font-nunito text-center">
                        Valor
                      </span>
                      <span className="w-4/12 text-xs text-neutralPrivateCode-700 font-nunito text-right pr-1">
                        Quantidade
                      </span>
                    </div>

                    <div className="w-11/12 flex flex-col overflow-y-scroll scrollbar mb-3">
                      <div className="w-full flex flex-col items-center">

                        <div className="w-full flex items-center justify-between px-3 py-2 min-h-[4rem] bg-neutralPrivateCode-100">

                          <div className="w-4/12 flex flex-col justify-center text-xs text-neutralPrivateCode-700 font-nunito">
                            <span>
                              {product.nome}
                            </span>
                          </div>
                          <span className="w-4/12 text-xs text-neutralPrivateCode-700 font-nunito text-center">
                            {`R$ ${product.preco},00`}
                          </span>
                          <div className="w-4/12 text-xs text-neutralPrivateCode-700 font-nunito pl-8">
                            <div className="w-full flex items-center justify-center gap-2">
                              <button
                                className="flex items-center justify-center bg-neutralPrivateCode-400 rounded-full font-bold w-5 h-5 text-base text-neutralPrivateCode-600"
                                onClick={decrementCounter}>
                                -
                              </button>
                              <span className="text-neutralPrivateCode-600">
                                {globalCounter}
                              </span>
                              <button
                                className="flex items-center justify-center bg-redPrivateCode-100 rounded-full font-bold w-5 h-5 text-xs text-white"
                                onClick={incrementCounter}>
                                +
                              </button>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>

                    <div className="w-11/12 flex items-center justify-center border-b border-t border-b-neutralPrivateCode-200 border-t-neutralPrivateCode-200">
                      <div className="w-11/12 flex items-center justify-between px-3 py-4 ">
                        <span className="text-neutralPrivateCode-600 font-bold">
                          Total
                        </span>
                        <span className="text-greenPrivateCode-100 font-bold">
                          {`R$ ${globalCounter * product.preco},00`}
                        </span>
                      </div>

                    </div>

                    <button
                      className="w-11/12 flex items-center justify-center mt-4 mb-6"
                      onClick={() => {
                        addToCart(product)
                        const totalOrderPrice = globalCounter * product.preco
                        setOrderPrice(totalOrderPrice)
                        closeOrder()
                        clearCounter()
                      }}
                    >
                      <div className="w-full flex items-center justify-center gap-4 bg-redPrivateCode-100 h-[5vh] rounded hover:bg-redPrivateCode-200 transition-all">
                        <span className="text-white font-sm">
                          Adicionar
                        </span>
                      </div>
                    </button>
                  </>
                </div>
              </motion.div>
            </div>
          </>
        }
      </AnimatePresence>
    </>
  )
}

export default ProductCard
