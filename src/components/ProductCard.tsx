import { AnimatePresence } from "framer-motion"
import { useState } from "react"

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
    <div className="w-11/12 flex justify-center h-[calc(100vh-10rem)] mb-[2rem] overflow-y-scroll 
    scrollbar">
      <div className="w-full max-h-24 flex items-center flex-wrap gap-[4%]">
        <button
          className="w-full flex items-center bg-white shadow-container rounded-lg mb-4"
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

      <AnimatePresence>
        {isActive &&
          <>
            <div className="fixed z-20 inset-0 flex items-center justify-center">
              <div>

              </div>
            </div>
          </>
        }
      </AnimatePresence>
    </div>
  )
}

export default ProductCard
