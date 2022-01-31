import '../styles/globals.css'
import { MoralisProvider } from "react-moralis"

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider appId="44OLVhiLhNSlLQ90Lpj913BZVq04BEHMdnuIY0QN" serverUrl="https://tmmlo797pb93.usemoralis.com:2053/server">
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp
