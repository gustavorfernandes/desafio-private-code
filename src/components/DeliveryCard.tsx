/* eslint-disable @next/next/no-img-element */
import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"

function DeliveryCard() {
  const { delivery, setDelivery, openDeliveryCard, closeDeliveryCard }: any = useContext(CartContext)
  
  return (
    <>
      <div className="w-full flex items-center justify-end">
        <button
          className="self-end font-poppins text-lg font-normal mr-4 mt-3"
          onClick={closeDeliveryCard}
        >
          <img
            className="w-5 self-end"
            src="/images/close.png"
            alt="Fechar"
          />
        </button>
      </div>

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
      </div>
    </>
  )
}

export default DeliveryCard
