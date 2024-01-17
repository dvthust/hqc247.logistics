import { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import theme from '@/constants/theme'

export default function Document() {
  return (
    <Html lang="vi">
        <Head>
          <link rel="icon" href="/favicon.png" sizes="any" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto&display=swap&subset=vietnamese"/>
        </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
