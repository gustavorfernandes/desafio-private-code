import '../styles/globals.css'
import '../styles/slider.css'
import { CartProvider } from '../src/contexts/CartContext'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp
