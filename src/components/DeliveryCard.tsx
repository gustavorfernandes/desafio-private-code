/* eslint-disable @next/next/no-img-element */
import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import { AnimatePresence, motion } from "framer-motion"
import Loading from "./Loading"
import InputMask from "react-input-mask"

function DeliveryCard() {
  const { closeDeliveryCard, openSucessCard, loading, setLoading, setDeliveryMethod, cep, setCep, district, setDistrict, number, setNumber, city, setCity, reference, setReference, complement, setComplement, address, setAddress, searchZipCode, clearFields, sendOrderData }: any = useContext(GlobalContext)

  function submitForm(event: React.FormEvent) {
    event.preventDefault()   
    
    sendOrderData()

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      closeDeliveryCard()
    }, 3000)
    setTimeout(() => {
      openSucessCard()
      clearFields()
    }, 3500)
  }

  return (
    <>
      <div className="w-full flex flex-col items-center">
        <div className="w-11/12 max-w-[450px] flex items-center justify-end border-b border-b-neutral-100 pb-10 mb-2">
          <button
            className="self-end font-poppins text-lg font-normal mt-5"
            onClick={() => {
              closeDeliveryCard()
              clearFields()
            }}
          >
            <img
              className="w-5 self-end"
              src="/images/close.png"
              alt="Fechar"
            />
          </button>
        </div>
      </div>

      <div className="w-full max-w-[450px] flex flex-col items-center justify-center mt-4">
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
                  className="border border-neutralPrivateCode-300 py-2 mb-4 pl-3 rounded outline-none text-sm font-medium text-neutralPrivateCode-600"
                  name="entrega"
                  id="entrega"
                  onChange={({ target }) => setDeliveryMethod(target.value)}
                  required
                >
                  <option value="">
                    Selecione uma forma de entrega
                  </option>
                  <option value="delivery">
                    Delivery
                  </option>
                  <option value="retirada">
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
                  <InputMask
                    className="border py-2 pl-3 rounded text-xs font-poppins text-neutralPrivateCode-700 outline-none"
                    name="cep"
                    id="cep"
                    type="text"
                    mask="99999-999"
                    alwaysShowMask={true}
                    pattern="[\d]{5}-?[\d]{3}"
                    onChange={({ target }: any) => setCep(target.value)}
                    required
                    onBlur={({ target }: any) => {
                      if (!target.validity.patternMismatch && !target.validity.valueMissing) {
                        searchZipCode(cep, target)
                      }
                    }}
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
                    id="cidade"
                    type="text"
                    value={city}
                    onChange={({ target }) => setCity(target.value)}
                    required
                  />
                </div>                
              </div>

              <div className="w-11/12 flex flex-col gap-2 mb-4">
                <label
                  className="text-sm font-medium text-neutralPrivateCode-700"
                  htmlFor="complemento"
                >
                  Endereço
                </label>
                <input
                  className="border py-[0.65rem] pl-4 rounded text-xs font-nunito text-neutralPrivateCode-700 outline-none"
                  name="endereco"
                  id="endereco"
                  placeholder="Endereço"
                  type="text"
                  value={address}
                  onChange={({ target }) => setAddress(target.value)}
                  required
                />
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
                    type="text"
                    id="numero"
                    pattern="[0-9]+$"
                    value={number}
                    onChange={({ target }) => setNumber(target.value)}
                    required
                  />
                </div>

                <div className="w-8/12 flex flex-col gap-2">
                  <label
                    className="text-sm font-medium text-neutralPrivateCode-700"
                    htmlFor="bairro"
                  >
                    Bairro
                  </label>
                  <input
                    className="border border-neutralPrivateCode-300 py-2 mb-4 pl-4 rounded outline-none text-xs font-medium text-neutralPrivateCode-600 w-full"
                    name="bairro"
                    id="bairro"
                    placeholder="Bairro"
                    value={district}
                    onChange={({ target }) => setDistrict(target.value)}
                    required
                  />
                </div>
              </div>

              <div className="w-11/12 flex flex-col gap-2 mb-4">
                <label
                  className="text-sm font-medium text-neutralPrivateCode-700"
                  htmlFor="estado"
                >
                  Complemento
                </label>
                <input
                  className="border py-[0.65rem] pl-4 rounded text-xs font-nunito text-neutralPrivateCode-700 outline-none"
                  name="complemento"
                  id="complemento"
                  placeholder="complemento"
                  type="text"
                  value={complement}
                  onChange={({ target }) => setComplement(target.value)}
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
                  id="referencia"
                  type="text"
                  value={reference}
                  onChange={({ target }) => setReference(target.value)}
                />
              </div>
            </fieldset>

            <button
              className="flex items-center justify-center w-full mt-6 mb-8 bg-redPrivateCode-100 py-3 rounded hover:bg-redPrivateCode-200 transition-all disabled:bg-redPrivateCode-200"
              type="submit"
              disabled={loading}
            >
              <span className="text-white font-medium">
                Continuar
              </span>
            </button>
          </form>
        </div>
      </div>

      <AnimatePresence>
        {loading &&
          <div className="flex items-center justify center absolute z-30">
            <motion.div
              className="w-full h-full flex flex-col items-center justify-center select-none"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
            >
              <Loading />
            </motion.div>
          </div>
        }
      </AnimatePresence>
    </>
  )
}

export default DeliveryCard
