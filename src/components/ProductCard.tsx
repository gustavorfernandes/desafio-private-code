import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import Item from "./ItemCart"
import ItemOrder from "./ItemOrder"

/* eslint-disable @next/next/no-img-element */
function ProductCard() {
  const [isActive, setActive] = useState(false)

  function openOrder() {
    setActive(true)
  }

  function closeOrder() {
    setActive(false)
  }

  return (
    <>
      <div className="w-11/12 flex justify-center h-[calc(100vh-10rem)] mb-[2rem] overflow-y-scroll 
    scrollbar">
        <div className="w-full max-h-24 flex items-center flex-wrap gap-[4%]">
          <button
            className="w-full flex items-center bg-white shadow-container rounded-lg mb-4 select-none"
            onClick={openOrder}
          >

            <div className="w-10/12 flex flex-col justify-center gap-1 rounded-bl-lg ">
              <span className="font-nunito font-bold text-neutralPrivateCode-700 ml-4 text-left">
                Pizza G + Coca 2lt
              </span>
              <span className="font-nunito font-bold text-sm text-neutralPrivateCode-600 ml-4 text-left">
                R$ 40,00
              </span>
            </div>

            <img
              className="w-4/12 h-4/12 rounded-br-lg rounded-tr-lg"
              src="/images/product-1.png"
              alt="Produto 1"
            />
          </button>
        </div>
      </div >

      <AnimatePresence>
        {isActive &&
          <>
            <div id="overlay" className="fixed z-10 inset-0 bg-black opacity-30" onClick={closeOrder} />

            <div className="w-11/12 fixed z-20 top-3">
              <motion.div
                className="w-full h-full bg-white flex flex-col items-center justify-center rounded-md select-none shadow-container"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  className="self-end font-poppins text-lg font-normal mr-4 mt-3"
                  onClick={closeOrder}
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
                      src="/images/product-1.png"
                      alt="Produto 1"
                    />
                  </div>
                </div>

                <div className="w-full flex flex-col items-center justify-center">

                  <div className="w-11/12 flex flex-col items-center justify-center border-b pb-3">
                    <div className="w-full bg-neutralPrivateCode-300 mt-4 rounded">
                      <div className="flex justify-between items-start w-full py-3 px-3">
                        <div className="flex flex-col justify-center">
                          <span className="text-neutralPrivateCode-700">
                            Pizza G + Coca 2 lt
                          </span>
                          <span className="text-xs text-neutralPrivateCode-600">
                            2 Sabores
                          </span>
                          <span className="text-xs text-neutralPrivateCode-600">
                            Escolha 1 opção
                          </span>
                        </div>
                        <div className="flex flex-col items-end justify-center gap-4">
                          <span className="bg-neutralPrivateCode-400 py-1 px-2 rounded-md text-xs font-bold text-neutralPrivateCode-600">
                            Obrigatório
                          </span>
                          <span className="text-neutral-600 text-xs">
                            R$ 40,00
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
                    <span className="w-3/12 text-xs text-neutralPrivateCode-700 font-nunito text-right">
                      Quantidade
                    </span>
                  </div>

                  <div className="w-11/12 flex flex-col overflow-y-scroll scrollbar h-[15vh]  mb-3">
                    <div className="w-full flex flex-col items-center">
                      <div className="w-full flex items-center justify-between px-3 py-2 bg-neutralPrivateCode-100 min-h-[4rem]">
                        <ItemOrder />
                      </div>

                      <div className="w-full flex items-center justify-between px-3 py-2 bg-white min-h-[4rem]">
                        <ItemOrder />
                      </div>

                      <div className="w-full flex items-center justify-between px-3 py-2 bg-neutralPrivateCode-100 min-h-[4rem]">
                        <ItemOrder />
                      </div>

                      <div className="w-full flex items-center justify-between px-3 py-2 bg-white min-h-[4rem]">
                        <ItemOrder />
                      </div>
                    </div>
                  </div>

                  <div className="w-11/12 flex items-center justify-center border-b border-t border-b-neutralPrivateCode-200 border-t-neutralPrivateCode-200">
                    <div className="w-11/12 flex items-center justify-between px-3 py-4 ">
                      <span className="text-neutralPrivateCode-600 font-bold">
                        Total
                      </span>
                      <span className="text-greenPrivateCode-100 font-bold">
                        R$ 40,00
                      </span>
                    </div>

                  </div>

                  <button
                    className="w-11/12 flex items-center justify-center mt-4 mb-6"
                    onClick={closeOrder}
                  >
                    <div className="w-full flex items-center justify-center gap-4 bg-redPrivateCode-100 h-[5vh] rounded hover:bg-redPrivateCode-200 transition-all">
                      <span className="text-white font-sm">
                        Adicionar
                      </span>
                    </div>
                  </button>
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
