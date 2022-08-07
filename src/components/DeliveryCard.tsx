/* eslint-disable @next/next/no-img-element */
import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"

function DeliveryCard() {
  const { openDeliveryCard, closeDeliveryCard }: any = useContext(CartContext)

  function submitForm(event: React.FormEvent) {
    event.preventDefault()
    closeDeliveryCard()
    console.log("Submit success!")
  }

  return (
    <>
      <div className="w-full flex flex-col items-center">
        <div className="w-[85%] flex items-center justify-end border-b border-b-neutral-100 pb-10 mb-2">
          <button
            className="self-end font-poppins text-lg font-normal mt-5"
            onClick={closeDeliveryCard}
          >
            <img
              className="w-5 self-end"
              src="/images/close.png"
              alt="Fechar"
            />
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center mt-4">
        <div className="w-11/12 flex flex-col justify-center rounded">
          <form onSubmit={submitForm}>
            <fieldset>
              <div className="w-full flex flex-col gap-2 justify-center">
                <label
                  className="text-sm font-medium text-neutralPrivateCode-700"
                  htmlFor="entrega"
                >
                  Forma de Entrega
                </label>
                <select
                  className="border border-neutralPrivateCode-300 py-2 mb-4 pl-3 rounded outline-none text-sm font-medium text-neutralPrivateCode-600 mr-3"
                  name="entrega"
                >
                  <option>
                    Delivery
                  </option>
                  <option>
                    Retirada
                  </option>
                </select>
              </div>
            </fieldset>

            <fieldset>
              <div className="w-11/12 flex items-center gap-4 justify-between">
                <div className="w-4/12 flex flex-col gap-2 mb-4">
                  <label
                    className="text-sm font-medium text-neutralPrivateCode-700"
                    htmlFor="cep"
                  >
                    CEP
                  </label>
                  <input
                    className="border py-[0.65rem] pl-4 rounded text-xs font-poppins text-neutralPrivateCode-700 outline-none"
                    name="cep"
                    placeholder="00000-000"
                    type="number"
                  />
                </div>

                <div className="w-8/12 flex flex-col gap-2">
                  <label
                    className="text-sm font-medium text-neutralPrivateCode-700"
                    htmlFor="bairro"
                  >
                    Bairro
                  </label>
                  <select
                    className="border border-neutralPrivateCode-300 py-2 mb-4 pl-3 rounded outline-none text-sm font-medium text-neutralPrivateCode-600 w-full"
                    name="entrega"
                  >
                    <option>
                      Escolha o bairro
                    </option>
                  </select>
                </div>
              </div>

              <div className="w-11/12 flex items-center gap-4 justify-between">
                <div className="w-4/12 flex flex-col gap-2 mb-4">
                  <label
                    className="text-sm font-medium text-neutralPrivateCode-700"
                    htmlFor="numero"
                  >
                    Número
                  </label>
                  <input
                    className="border py-[0.65rem] pl-4 rounded text-xs font-nunito text-neutralPrivateCode-700 outline-none"
                    name="numero"
                    placeholder="Número"
                    type="number"
                  />
                </div>

                <div className="w-8/12 flex flex-col gap-2 mb-4">
                  <label
                    className="text-sm font-medium text-neutralPrivateCode-700"
                    htmlFor="cidade"
                  >
                    Cidade
                  </label>
                  <input
                    className="border py-[0.65rem] pl-4 rounded text-xs font-nunito text-neutralPrivateCode-700 outline-none"
                    name="cidade"
                    placeholder="Cidade"
                    type="text"
                  />
                </div>
              </div>

              <div className="w-11/12 flex flex-col gap-2 mb-4">
                <label
                  className="text-sm font-medium text-neutralPrivateCode-700"
                  htmlFor="estado"
                >
                  Estado
                </label>
                <input
                  className="border py-[0.65rem] pl-4 rounded text-xs font-nunito text-neutralPrivateCode-700 outline-none"
                  name="estado"
                  placeholder="Estado"
                  type="text"
                />
              </div>

              <div className="w-11/12 flex flex-col gap-2 mb-4">
                <label
                  className="text-sm font-medium text-neutralPrivateCode-700"
                  htmlFor="complemento"
                >
                  Complemento
                </label>
                <input
                  className="border py-[0.65rem] pl-4 rounded text-xs font-nunito text-neutralPrivateCode-700 outline-none"
                  name="complemento"
                  placeholder="Complemento"
                  type="text"
                />
              </div>

              <div className="w-11/12 flex flex-col gap-2 mb-4">
                <label
                  className="text-sm font-medium text-neutralPrivateCode-700"
                  htmlFor="referencia"
                >
                  Referência
                </label>
                <input
                  className="border py-[0.65rem] pl-4 rounded text-xs font-nunito text-neutralPrivateCode-700 outline-none"
                  name="referencia"
                  placeholder="Referência"
                  type="text"
                />
              </div>
            </fieldset>

            <button
              className="flex items-center justify-center w-full mt-6 mb-8"
              type="submit"
            >
              <div
                className="w-full flex items-center justify-center gap-4 bg-redPrivateCode-100 py-3 rounded hover:bg-redPrivateCode-200 transition-all"
                onClick={openDeliveryCard}
              >
                <span className="text-white font-medium">
                  Continuar
                </span>
              </div>
            </button>
          </form>
        </div>
      </div>


    </>
  )
}

export default DeliveryCard