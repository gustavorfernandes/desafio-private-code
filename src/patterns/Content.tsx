import ProductCard from "../components/ProductCard"
import { Slider, SliderProps, Slide } from '../utils/slider-imports'

const settings: SliderProps = {
  spaceBetween: 0,
  slidesPerView: 1,
  navigation: true,
}

function Content() {
  return (
    <div className="w-screen h-[calc(100vh-192px)] flex flex-col items-center -z-1 pt-8 gap-8">

      <div className="w-11/12 flex items-center justify-center bg-white rounded-md shadow-container select-none">
        <Slider
          settings={settings}
        >
          <Slide>
            <div className="flex items-center justify-center text-center text-neutralPrivateCode-600 font-bold">
              Pizzas
            </div>
          </Slide>
          <Slide>
            <div className="flex items-center justify-center w-full text-center text-neutralPrivateCode-600 font-bold">
              Combo Lanche
            </div>
          </Slide>
          <Slide>
            <div className="flex items-center justify-center w-full text-center text-neutralPrivateCode-600 font-bold">
              Hamburger
            </div>
          </Slide>
          <Slide>
            <div className="flex items-center justify-center w-full text-center text-neutralPrivateCode-600 font-bold">
              Refrigerantes
            </div>
          </Slide>
          <Slide>
            <div className="flex items-center justify-center w-full text-center text-neutralPrivateCode-600 font-bold">
              Sucos
            </div>
          </Slide>
          <Slide>
            <div className="flex items-center justify-center w-full text-center text-neutralPrivateCode-600 font-bold">
              Açaís
            </div>
          </Slide>
        </Slider>

      </div>

      <ProductCard />
    </div>
  )
}

export default Content
