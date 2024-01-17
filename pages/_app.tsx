import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import theme from '@/constants/theme'
import {ChakraProvider} from "@chakra-ui/react";
import Script from "next/script";
import {NextPage} from "next";
import {ReactElement, ReactNode} from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return <ChakraProvider theme={theme}>
    <main>
      {getLayout(<Component {...pageProps} />)}
      <Script
          src="/js/wow.min.js"
          onLoad={() => {
            // @ts-ignore
            new WOW().init();
          }}
      />
    </main>
  </ChakraProvider>
}
