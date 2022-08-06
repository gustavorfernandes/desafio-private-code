import Counter from "./Counter";

function Item() {
  return (
    <>
      <div className="w-6/12 flex flex-col justify-center text-xs text-neutralPrivateCode-700 font-nunito">
        <span>
          Pizza p
        </span>
        <span>
          1x - Borda de Catupiry
        </span>
        <span>
          1x - Calabresa c/ bacon
        </span>
      </div>
      <div className="w-4/12 text-xs text-neutralPrivateCode-700 font-nunito text-center">
        <Counter />
      </div>
      <span className="w-3/12 text-xs text-neutralPrivateCode-700 font-nunito text-right">
        R$ 40,00
      </span>
    </>
  )
}

export default Item