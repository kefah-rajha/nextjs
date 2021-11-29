import '../styles/globals.css'
import theme from "../styles/chakraUI"
import { chakra } from '@chakra-ui/system'
import { ChakraProvider } from '@chakra-ui/react'
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider >
      <Component {...pageProps} />
      </ChakraProvider>
  )
}

export default MyApp
