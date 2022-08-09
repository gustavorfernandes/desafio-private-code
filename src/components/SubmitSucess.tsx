/* eslint-disable @next/next/no-img-element */
import { AnimatePresence, motion } from "framer-motion"
import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

function SubmitSucess() {
  const { closeSucessCard, closeCart, clearCart }: any = useContext(GlobalContext)

  return (
    <>
      <div className="w-full max-w-[340px] flex flex-col justify-center items-center">
        <div className="w-10/12 flex items-center justify-end">
          <button
            className="self-end font-poppins text-lg font-normal mt-5"
            onClick={() => {
              clearCart()
              closeSucessCard()
              closeCart()
            }}>

            <img
              className="w-5 self-end"
              src="/images/close.png"
              alt="Fechar"
            />
          </button>
        </div>

        <div className="w-8/12 items-center justify-center">
          <img
            className="w-full"
            src="/images/success.png"
            alt="Pedido realizado com sucesso"
          />
        </div>

        <div className="w-8/12 flex items-center justify-center">
          <h2 className="text-2xl text-center font-bold text-greenPrivateCode-200 mt-1 leading-8 mb-2">
            Pedido Realizado com Sucesso
          </h2>
        </div>

        <div className="w-10/12 flex items-center justify-center">
          <button
            className="w-full text-white py-3 bg-greenPrivateCode-200 mb-8 rounded-md font-medium"
            onClick={() => {
              clearCart()
              closeSucessCard()
              closeCart()
            }}>
            Continuar
          </button>
        </div>

      </div>
    </>
  )
}

export default SubmitSucess
