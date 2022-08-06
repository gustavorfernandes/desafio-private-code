import { useState } from "react"

function Counter() {
  const [counter, setCounter] = useState(0)

  function incrementCounter() {
    let count = counter
    setCounter(count +=1)
  }

  function decrementCounter() {    
    if (counter === 0) {
      return
    } else {
      let count = counter
      setCounter(count -= 1)
    }
  }

  return (
    <div className="w-full flex items-center justify-center gap-2">
      <button
        className="flex items-center justify-center bg-neutralPrivateCode-400 rounded-full font-bold w-5 h-5 text-base text-neutralPrivateCode-600"
        onClick={decrementCounter}
      >
        -
      </button>
      <span className="text-neutralPrivateCode-600">
        {counter}
      </span>
      <button
        className="flex items-center justify-center bg-redPrivateCode-100 rounded-full font-bold w-5 h-5 text-xs text-white"
        onClick={incrementCounter}
      >
        +
      </button>
    </div>
  )
}

export default Counter
