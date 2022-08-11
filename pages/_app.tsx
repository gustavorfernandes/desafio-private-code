import "../styles/globals.css"
import "../styles/slider.css"
import { ContextProvider } from "../src/contexts/GlobalContext"
import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  )
}

export default MyApp
