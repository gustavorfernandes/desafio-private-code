import React from "react"
import ReactLoading from "react-loading"

function Loading({ type, color }: any) {
  return(
    <ReactLoading 
      type="spin"
      color="#E83737"
      height={100}
      width={100}
    />    
  )
}

export default Loading
