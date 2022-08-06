/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart"
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose"
import { MdDone } from "@react-icons/all-files/md/MdDone"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import ItemCart from "./ItemCart"

function Cart() {
  const [isActive, setActive] = useState(false)

  function openCart() {
    setActive(true)
  }

  function closeCart() {
    setActive(false)
  }

  return (
    <>
      <button
        className="flex items-center justify-center"
        onClick={openCart}
      >
        <AiOutlineShoppingCart
          className={`font-normal w-6 h-6 transition-all text-neutralPrivateCode-600 ${isActive && "text-neutralPrivateCode-700"}`}
        />
      </button>

      <AnimatePresence>
        {isActive &&
          <motion.div
            className="bg-white flex flex-col items-center  fixed rounded-sm w-full z-20 right-0 inset-y-0"
            initial={{ x: 500 }}
            animate={{ x: - 0 }}
            exit={{ x: 500 }}
            transition={{ duration: 0.35 }}
          >
            <div className="w-full flex flex-col justify-center ">
              <div className="w-full flex flex-col justify-center border-b border-b-neutralPrivateCode-200">
                <button
                  className="self-end pr-6 pt-6 font-poppins text-lg font-normal mb-6"
                  onClick={closeCart}
                >
                  <img
                    className="w-7 self-end"
                    src="/images/close.png"
                    alt="Fechar"
                  />
                </button>
              </div>

              <div className="w-full flex flex-col justify-center border-b border-b-neutralPrivateCode-200">
                <img
                  className="p-8"
                  src="/images/logo.png"
                  alt="Private Code"
                />
              </div>

              <div className="w-full flex items-center justify-between px-6 pt-4 mb-4">
                <span className="w-6/12 text-xs text-neutralPrivateCode-700 font-nunito">
                  Produto
                </span>
                <span className="w-4/12 text-xs text-neutralPrivateCode-700 font-nunito text-center">
                  Quantidade
                </span>
                <span className="w-3/12 text-xs text-neutralPrivateCode-700 font-nunito text-right">
                  Total
                </span>
              </div>

              <div className="w-full flex flex-col h-[calc(100vh-25rem)] overflow-y-scroll scrollbar">

                <div className="w-full flex items-center justify-between px-6 py-4 bg-neutralPrivateCode-100 min-h-[4rem]">
                  <ItemCart />
                </div>

                <div className="w-full flex items-center justify-between px-6 py-4 bg-white min-h-[4rem]">
                  <ItemCart />
                </div>

                <div className="w-full flex items-center justify-between px-6 py-4 bg-neutralPrivateCode-100 min-h-[4rem]">
                  
                </div>

                <div className="w-full flex items-center justify-between px-6 py-4 bg-white min-h-[4rem]">
                  
                </div>

                <div className="w-full flex items-center justify-between px-6 py-4 bg-neutralPrivateCode-100 min-h-[4rem]">
                  
                </div>

                <div className="w-full flex items-center justify-between px-6 py-4 bg-white min-h-[4rem]">
                  
                </div>

                <div className="w-full flex items-center justify-between px-6 py-4 bg-neutralPrivateCode-100 min-h-[4rem]">
                  
                </div>                
              </div>

            <div className="w-full flex items-center justify-between px-6 py-4 border">
              <span className="text-neutralPrivateCode-600 font-bold">
              Total
              </span>
              <span className="text-greenPrivateCode-100 font-bold">
                R$ 40,00
              </span>              
            </div>

            <div className="w-full flex items-center justify-between p-6 gap-4 mb-4">
              <button className="flex items-center justify-center w-6/12">
                <div className="w-full flex items-center justify-center gap-4 bg-redPrivateCode-100 py-3 rounded hover:bg-redPrivateCode-200 transition-all">
                <MdDone
                    color="white"
                  />
                  <span className="text-white font-normal">
                    Finalizar
                  </span>
                </div>
              </button>

              <button 
                className="flex items-center justify-center w-6/12"
                onClick={closeCart}  
              >
                <div className="w-full flex items-center justify-center gap-4 bg-white border border-neutral-300 py-3 rounded">
                  <AiOutlineClose 
                    color="#696969"
                  />
                  <span className="text-neutralPrivateCode-600 font-normal">
                    Cancelar
                  </span>
                </div>
              </button>
            </div>

            </div>
          </motion.div>
        }
      </AnimatePresence>
    </>
  )
}

export default Cart
