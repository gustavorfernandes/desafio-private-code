import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import ProductCard from "../components/ProductCard"
import { Slider, SliderProps, Slide } from '../utils/slider-imports'

const settingsMobile: SliderProps = { 
  spaceBetween: 0,
  slidesPerView: 3,
  navigation: false,
  scrollbar: {
    draggable: true,
  }
}

const settings: SliderProps = { 
  spaceBetween: 0,
  slidesPerView: 3,
  navigation: true
}

function Content() {
  const { category, setCategory }: any = useContext(GlobalContext)
  
  return (
    <div className="w-screen lg:w-9/12 h-[calc(100vh-192px)] flex flex-col items-center -z-1 pt-8 gap-8">

      <div className="w-11/12 flex items-center justify-center bg-white rounded-md shadow-container select-none md:hidden">
        <Slider
          settings={settingsMobile}
        >
          <Slide>
            <span 
              className={`flex items-center justify-center cursor-pointer text-center text-neutralPrivateCode-600 font-bold ${category === 1 && "text-redPrivateCode-100"}`}
              onClick={() => {
                if(category === 1) {
                  setCategory(0)
                } else {
                  setCategory(1)
                }                
              }}  
            >
              Pizzas
            </span>
          </Slide>
          <Slide>
          <span 
              className={`flex items-center justify-center cursor-pointer only:text-center text-neutralPrivateCode-600 font-bold ${category === 2 && "text-redPrivateCode-100"}`}
              onClick={() => {
                if(category === 2) {
                  setCategory(0)
                } else {
                  setCategory(2)
                }                
              }}  
            >
              Combos
            </span>
          </Slide>
          <Slide>
          <span 
              className={`flex items-center justify-center cursor-pointer text-center text-neutralPrivateCode-600 font-bold ${category === 3 && "text-redPrivateCode-100"}`}
              onClick={() => {
                if(category === 3) {
                  setCategory(0)
                } else {
                  setCategory(3)
                }                
              }}   
            >
              Hambúrguer
            </span>
          </Slide>
          <Slide>
          <span 
              className={`flex items-center justify-center cursor-pointer text-center text-neutralPrivateCode-600 font-bold ${category === 4 && "text-redPrivateCode-100"}`}
              onClick={() => {
                if(category === 4) {
                  setCategory(0)
                } else {
                  setCategory(4)
                }                
              }}  
            >
              Bebidas
            </span>
          </Slide>
          
          <Slide>
          <span 
              className={`flex items-center justify-center cursor-pointer text-center text-neutralPrivateCode-600 font-bold ${category === 5 && "text-redPrivateCode-100"}`}
              onClick={() => {
                if(category === 5) {
                  setCategory(0)
                } else {
                  setCategory(5)
                }                
              }}  
            >
              Açaí
            </span>
          </Slide>
        </Slider>
      </div>

      <div className="hidden w-11/12 md:flex items-center justify-center bg-white rounded-md shadow-container select-none ">
        <Slider
          settings={settings}
        >
          <Slide>
            <span 
              className={`flex items-center justify-center cursor-pointer text-center text-neutralPrivateCode-600 font-bold ${category === 1 && "text-redPrivateCode-100"}`}
              onClick={() => {
                if(category === 1) {
                  setCategory(0)
                } else {
                  setCategory(1)
                }                
              }}  
            >
              Pizzas
            </span>
          </Slide>
          <Slide>
          <span 
              className={`flex items-center justify-center cursor-pointer only:text-center text-neutralPrivateCode-600 font-bold ${category === 2 && "text-redPrivateCode-100"}`}
              onClick={() => {
                if(category === 2) {
                  setCategory(0)
                } else {
                  setCategory(2)
                }                
              }}  
            >
              Combos
            </span>
          </Slide>
          <Slide>
          <span 
              className={`flex items-center justify-center cursor-pointer text-center text-neutralPrivateCode-600 font-bold ${category === 3 && "text-redPrivateCode-100"}`}
              onClick={() => {
                if(category === 3) {
                  setCategory(0)
                } else {
                  setCategory(3)
                }                
              }}   
            >
              Hambúrguer
            </span>
          </Slide>
          <Slide>
          <span 
              className={`flex items-center justify-center cursor-pointer text-center text-neutralPrivateCode-600 font-bold ${category === 4 && "text-redPrivateCode-100"}`}
              onClick={() => {
                if(category === 4) {
                  setCategory(0)
                } else {
                  setCategory(4)
                }                
              }}  
            >
              Bebidas
            </span>
          </Slide>
          
          <Slide>
          <span 
              className={`flex items-center justify-center cursor-pointer text-center text-neutralPrivateCode-600 font-bold ${category === 5 && "text-redPrivateCode-100"}`}
              onClick={() => {
                if(category === 5) {
                  setCategory(0)
                } else {
                  setCategory(5)
                }                
              }}  
            >
              Açaí
            </span>
          </Slide>
        </Slider>
      </div>
      <ProductCard />
    </div>
  )
}

export default Content
