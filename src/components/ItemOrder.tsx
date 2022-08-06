import Counter from "./Counter";

function ItemOrder() {
  return (
    <>
      <div className="w-5/12 flex flex-col justify-center text-xs text-neutralPrivateCode-700 font-nunito">
        <span>
          Calabresa c/ bacon
        </span>
      </div>
      <span className="w-6/12 text-xs text-neutralPrivateCode-700 font-nunito text-center">
        R$ 40,00
      </span>
      <div className="w-3/12 text-xs text-neutralPrivateCode-700 font-nunito">
        <Counter />
      </div>
    </>
  )
}

export default ItemOrder
