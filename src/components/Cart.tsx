import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart"

function Cart() {
  return (
    <button className="flex items-center justify-center">
      <AiOutlineShoppingCart
        className={`font-normal w-6 h-6 transition-all text-neutralPrivateCode-600`}
      />
    </button>
  )
}

export default Cart
