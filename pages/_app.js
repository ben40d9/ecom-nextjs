import '../styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import "@fontsource/catamaran"

const theme = extendTheme({
  fonts: {
    heading: `'Catamaran', sans-serif`,
    body: `'Catamaran', sans-serif`
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp