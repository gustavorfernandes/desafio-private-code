/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

function Search() {
  const { fetchDataAPI, url, setUrl }: any = useContext(GlobalContext)

  const handleGlobalSearch = (element : any) => {
    element.preventDefault()
    const { value } = element.target
    if (!value) {
      setUrl("http://localhost:8080/produtos")
      fetchDataAPI(url)
    } else {
      setUrl(`http://localhost:8080/produtos?q=${value}`)
      fetchDataAPI(url)
    }
  }
  
  return (
    <div className="flex w-10/12">
      <form className="w-10/12">
        <fieldset>
          <label htmlFor="search" />
          <input 
            className="w-full border border-neutralPrivateCode-500 rounded-tl-md rounded-bl-md font-nunito font-medium text-xs pl-5 py-3 outline-none text-neutralPrivateCode-700"
            type="text"
            name="search"
            id="search"
            placeholder="Pesquisar ..."
            onChange={handleGlobalSearch}
            onBlur={handleGlobalSearch}
          />          
        </fieldset>
      </form>

      <div className="w-2/12 flex items-center justify-center bg-redPrivateCode-100 rounded-tr-md rounded-br-md -ml-1">
        <div>
          <img
            className="w-6 p-1"
            src="/images/search.png"
            alt="Lupa"
          />
        </div>
      </div>
    </div>
  )
}

export default Search