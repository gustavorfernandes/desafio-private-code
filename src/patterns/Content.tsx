import { useState } from "react"
import ProductCard from "../components/ProductCard"
import { Slider, SliderProps, Slide } from '../utils/slider-imports'

const settings: SliderProps = { 
  spaceBetween: 0,
  slidesPerView: 3,
  autoHeight: true,
  navigation: false,
  scrollbar: {
    draggable: true,
  }
}

function Content() {
  const [isSliderActive, setSliderActive] = useState("Pizzas")
  
  return (
    <div className="w-screen h-[calc(100vh-192px)] flex flex-col items-center -z-1 pt-8 gap-8">

      <div className="w-11/12 flex items-center justify-center bg-white rounded-md shadow-container select-none">
        <Slider
          settings={settings}
        >
          <Slide>
            <span 
              className={`flex items-center justify-center text-center text-neutralPrivateCode-600 font-bold ${isSliderActive === "Pizzas" && "text-redPrivateCode-100"}`}
              onClick={() => {
                setSliderActive("Pizzas")
              }}  
            >
              Pizzas
            </span>
          </Slide>
          <Slide>
          <span 
              className={`flex items-center justify-center text-center text-neutralPrivateCode-600 font-bold ${isSliderActive === "Combos" && "text-redPrivateCode-100"}`}
              onClick={() => {
                setSliderActive("Combos")
              }}  
            >
              Combos
            </span>
          </Slide>
          <Slide>
          <span 
              className={`flex items-center justify-center text-center text-neutralPrivateCode-600 font-bold ${isSliderActive === "Hamburgers" && "text-redPrivateCode-100"}`}
              onClick={() => {
                setSliderActive("Hamburgers")
              }}  
            >
              Hamburgers
            </span>
          </Slide>
          <Slide>
          <span 
              className={`flex items-center justify-center text-center text-neutralPrivateCode-600 font-bold ${isSliderActive === "Sucos" && "text-redPrivateCode-100"}`}
              onClick={() => {
                setSliderActive("Sucos")
              }}  
            >
              Sucos
            </span>
          </Slide>
          <Slide>
          <span 
              className={`flex items-center justify-center text-center text-neutralPrivateCode-600 font-bold ${isSliderActive === "Refrigerantes" && "text-redPrivateCode-100"}`}
              onClick={() => {
                setSliderActive("Refrigerantes")
              }}  
            >
              Refrigerantes
            </span>
          </Slide>
          <Slide>
          <span 
              className={`flex items-center justify-center text-center text-neutralPrivateCode-600 font-bold ${isSliderActive === "Açaís" && "text-redPrivateCode-100"}`}
              onClick={() => {
                setSliderActive("Açaís")
              }}  
            >
              Açaís
            </span>
          </Slide>
        </Slider>
      </div>

      <ProductCard />
    </div>
  )
}

export default Content
