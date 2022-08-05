/* eslint-disable @next/next/no-img-element */
function Search() {
  return (
    <div className="flex w-10/12">
      <form className="w-10/12">
        <fieldset>
          <label htmlFor="search" />
          <input 
            className="w-full border border-neutralPrivateCode-500 rounded-tl-md rounded-bl-md font-nunito font-medium text-xs pl-5 py-3 outline-none text-neutralPrivateCode-700"
            type="text"
            name="search"
            placeholder="Pesquisar ..."
          />          
        </fieldset>
      </form>

      <div className="w-2/12 flex items-center justify-center bg-redPrivateCode-100 rounded-tr-md rounded-br-md cursor-pointer -ml-1">
        <button>
          <img
            className="w-6 p-1"
            src="/images/search.png"
            alt="Lupa"
          />
        </button>
      </div>
    </div>
  )
}

export default Search