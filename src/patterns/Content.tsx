import ProductCard from "../components/ProductCard"

function Content() {
  return (
    <div className="w-screen h-[calc(100vh-192px)] flex flex-col items-center -z-1 pt-8 gap-8">
      <div className="w-10/12 flex flex-col items-center justify-center bg-white rounded-md h-16 shadow-container">
        {` < Slider > `}
      </div>
      
      <ProductCard />
    </div>
  )
}

export default Content
