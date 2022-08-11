import { ReactNode } from "react"
import { Swiper, SwiperProps } from "swiper/react"
import { Navigation, A11y, Scrollbar } from "swiper"

interface SliderProps {
  settings: SwiperProps
  children: ReactNode
}

export default function Slider({ settings, children }: SliderProps) {
  return (
    <Swiper modules={[Navigation, A11y, Scrollbar]} {...settings}>{children}</Swiper>
  )
}
