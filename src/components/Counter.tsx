function Counter() {
  return (
    <div className="w-full flex items-center justify-center gap-2">
      <button className="flex items-center justify-center bg-neutralPrivateCode-400 rounded-full font-bold w-5 h-5 text-base text-neutralPrivateCode-600">
        -
      </button>
      <span className="text-neutralPrivateCode-600">
        1
      </span>
      <button className="flex items-center justify-center bg-redPrivateCode-100 rounded-full font-bold w-5 h-5 text-xs text-white">
        +
      </button>
    </div>
  )
}

export default Counter
