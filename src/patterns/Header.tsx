import Cart from "../components/Cart"
import Search from "../components/Search"

function Header() {
  return (
    <div className="w-screen flex flex-col items-center justify-center h-24 select-none shadow-container z-1 mb-1 bg-white">
      <div className="w-11/12 flex items-center justify-between">
        <Search />
      
        <Cart />
      </div>
    </div>
  )
}

export default Header
