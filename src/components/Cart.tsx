/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart"
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose"
import { MdDone } from "@react-icons/all-files/md/MdDone"
import { AnimatePresence, motion } from "framer-motion"
import { useContext, useEffect } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import DeliveryCard from "./DeliveryCard"
import SubmitSucess from "./SubmitSucess"

function Cart() {
  const { cart, openCart, closeCart, clearCart, delivery, openDeliveryCard, closeDeliveryCard, isSubmitSucess, cartItem, finalPrice, setFinalPrice, toggleFinalPrice }: any = useContext(GlobalContext)

  toggleFinalPrice()

  return (
    <>
      <button
        className="flex items-center justify-center mr-2 lg:hidden"
        onClick={() => {
          cartItem.length > 0 &&
            openCart()
        }}
      >
        <AiOutlineShoppingCart
          className={`font-normal w-6 h-6 md:h-9 md:w-9 transition-all ${cartItem.length > 0 ? "text-neutralPrivateCode-700" : "text-neutralPrivateCode-400"}`}
        />
      </button>

      <div className="hidden bg-white lg:flex flex-col items-center fixed w-3/12 z-10 right-0 inset-y-0">
        <div className="w-full flex flex-col justify-center ">
          <div className="w-full flex flex-col justify-center border-b border-b-neutralPrivateCode-200">
            <div className="pt-16 lg:mb-16"/>
          </div>

          <div className="w-full flex flex-col justify-center border-b border-b-neutralPrivateCode-200 pb-[0.15rem]">
            <img
              className="p-8 lg:p-10"
              src="/images/logo.png"
              alt="Private Code"
            />
          </div>

          <div className="w-full flex items-center justify-between px-6 pt-4 mb-4">
            <span className="w-5/12 text-xs text-neutralPrivateCode-700 font-nunito">
              Produto
            </span>
            <span className="w-3/12 text-xs text-neutralPrivateCode-700 font-nunito text-center">
              Quantidade
            </span>
            <span className="w-3/12 text-xs text-neutralPrivateCode-700 font-nunito text-right">
              Total
            </span>
          </div>

          <div className="w-full flex flex-col h-[calc(100vh-27rem)] lg:h-[calc(100vh-30rem)] max-h-[550px] overflow-y-scroll scrollbar mb-2 lg:mb-0">

            {cartItem &&

              cartItem.map((item: any, index: any) => {
                return (
                  <div
                    className={`w-full flex items-center justify-between px-6 py-4 min-h-[4rem]
                        ${index % 2 == 0 ? "bg-neutralPrivateCode-100" : "bg-white"}`}
                    key={item.nome}>
                    <div className="w-5/12 flex flex-col justify-center text-xs text-neutralPrivateCode-700 font-nunito">
                      <span>
                        {item.nome}
                      </span>
                    </div>
                    <div className="w-3/12 text-xs text-neutralPrivateCode-700 font-nunito text-center">
                      {item.quantidade}
                    </div>
                    <span className="w-3/12 text-xs text-neutralPrivateCode-700 font-nunito text-right">
                      {`R$ ${item.quantidade * item.valor},00`}
                    </span>
                  </div>
                )
              })
            }

          </div>

          <div className="w-full absolute bottom-[120px] flex items-center justify-between px-6 py-4 lg:py-2 border border-neutralPrivateCode-200">
            <span className="text-neutralPrivateCode-600 xl:text-xl font-bold">
              Total
            </span>
            <span className="text-greenPrivateCode-100 xl:text-xl font-bold">
              {`R$ ${finalPrice},00`}
            </span>
          </div>

          <div className="w-full absolute bottom-0 flex items-center justify-between p-6 gap-4 mb-4">
            <button className="flex items-center justify-center w-6/12" type="button">
              <div
                className="w-full flex items-center justify-center gap-4 lg:gap-1 bg-redPrivateCode-100 py-3 rounded hover:bg-redPrivateCode-200 transition-all"
                onClick={()=> {
                  cartItem.length > 0 &&
                  openDeliveryCard()
                }}
              >
                <MdDone
                  color="white"
                />
                <span className="text-white text-xs xl:text-base font-normal">
                  Finalizar
                </span>
              </div>
            </button>

            <button
              className="flex items-center justify-center w-6/12"
              onClick={() => {
                closeCart()
                clearCart()
                setFinalPrice(0)
              }}
            >
              <div className="w-full flex items-center justify-center gap-4 lg:gap-1 bg-white border border-neutral-300 py-3 rounded">
                <AiOutlineClose
                  color="#696969"
                />
                <span className="text-neutralPrivateCode-600 text-xs xl:text-base font-normal">
                  Cancelar
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {cart &&
          <motion.div
            className="bg-white flex flex-col items-center fixed rounded-sm w-full sm:w-7/12 sm:max-w-[380px] z-20 right-0 inset-y-0"
            initial={{ x: 500 }}
            animate={{ x: - 0 }}
            exit={{ opacity: 0, scale: 0.5, x: 0 }}
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

              <div className="w-full flex flex-col h-[calc(100vh-26rem)] max-h-[550px] overflow-y-scroll scrollbar">

                {cartItem &&

                  cartItem.map((item: any, index: any) => {
                    return (
                      <div
                        className={`w-full flex items-center justify-between px-6 py-4 min-h-[4rem]
                        ${index % 2 == 0 ? "bg-neutralPrivateCode-100" : "bg-white"}`}
                        key={item.nome}>
                        <div className="w-6/12 flex flex-col justify-center text-xs text-neutralPrivateCode-700 font-nunito">
                          <span>
                            {item.nome}
                          </span>
                        </div>
                        <div className="w-4/12 text-xs text-neutralPrivateCode-700 font-nunito text-center">
                          {item.quantidade}
                        </div>
                        <span className="w-3/12 text-xs text-neutralPrivateCode-700 font-nunito text-right">
                          {`R$ ${item.quantidade * item.valor},00`}
                        </span>
                      </div>
                    )
                  })
                }

              </div>

              <div className="w-full flex items-center justify-between px-6 py-4 border">
                <span className="text-neutralPrivateCode-600 font-bold">
                  Total
                </span>
                <span className="text-greenPrivateCode-100 font-bold">
                  {`R$ ${finalPrice},00`}
                </span>
              </div>

              <div className="w-full flex items-center justify-between p-6 gap-4 mb-4">
                <button className="flex items-center justify-center w-6/12" type="button">
                  <div
                    className="w-full flex items-center justify-center gap-4 bg-redPrivateCode-100 py-3 rounded hover:bg-redPrivateCode-200 transition-all"
                    onClick={openDeliveryCard}
                  >
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
                  onClick={() => {
                    closeCart()
                    clearCart()
                    setFinalPrice(0)
                  }}
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

      <AnimatePresence >
        {delivery &&
          <>
            <div id="overlay" className="fixed z-20 inset-0 bg-black opacity-30" onClick={closeDeliveryCard} />

            <div className="w-11/12 lg:h-[840px] flex items-center justify-center fixed z-20 top-[50%] left-[50%] right-auto bottom-auto mr-[-50%] translate-y-top translate-x-right max-w-[500px]">
              <motion.div
                className="w-full h-full bg-white flex flex-col items-center justify-center rounded select-none shadow-container"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
              >
                <DeliveryCard />
              </motion.div>
            </div>
          </>
        }

        {isSubmitSucess &&
          <>
            <div id="overlay" className="fixed z-20 inset-0 bg-black opacity-30" />

            <div className="w-11/12 flex items-center justify-center fixed z-20 max-w-[340px] lg:max-w-[490px] lg:h-[420px] top-[50%] left-[50%] right-auto bottom-auto mr-[-50%] translate-y-top translate-x-right">
              <motion.div
                className="w-full h-full bg-white flex flex-col items-center justify-center rounded select-none shadow-container"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
              >
                <SubmitSucess />
              </motion.div>
            </div>
          </>
        }
      </AnimatePresence>
    </>
  )
}

export default Cart
