/* eslint-disable @next/next/no-img-element */

import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

function SubmitSucess() {
  const { closeSucessCard, closeCart, clearCart }: any = useContext(GlobalContext)

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-10/12 flex items-center justify-end">
          <button
            className="font-poppins text-lg font-normal mt-5 lg:mt-0"
            onClick={() => {
              clearCart()
              closeSucessCard()
              closeCart()
            }}>

            <img
              className="w-5 lg:w-7 self-end"
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

        <div className="w-8/12 sm:w-7/12 flex items-center justify-center">
          <h2 className="text-2xl lg:text-3xl text-center font-bold text-greenPrivateCode-200 mt-1 leading-8 mb-2 lg:mb-3">
            Pedido Realizado com Sucesso
          </h2>
        </div>

        <div className="w-10/12 flex items-center justify-center">
          <button
            className="w-full text-white py-3 lg:py-6 lg:text-xl bg-greenPrivateCode-200 hover:bg-greenPrivateCode-300 transition-all mb-8 lg:mb-4 rounded-lg font-medium"
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
