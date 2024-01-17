import {extendTheme} from '@chakra-ui/react'

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const styles = {
  global: {
    "html, body": {
      background: '#f9f9fb'
    }
  }
}

const colors = {
  "gray": {
    "50": "#F2F2F2",
    "100": "#DBDBDB",
    "200": "#C4C4C4",
    "300": "#ADADAD",
    "400": "#969696",
    "500": "#808080",
    "600": "#666666",
    "700": "#4D4D4D",
    "800": "#333333",
    "900": "#1A1A1A"
  },
  "orange": {
    "50": "#FFEDE5",
    "100": "#FFCEB8",
    "200": "#FFAF8A",
    "300": "#FF8F5C",
    "400": "#FF6F2E",
    "500": "#FF5000",
    "600": "#CC4000",
    "700": "#993000",
    "800": "#662000",
    "900": "#331000"
  },
  "red": {
    "50": "#FEE6E7",
    "100": "#FDB9BA",
    "200": "#FC8D8E",
    "300": "#FB6062",
    "400": "#F93336",
    "500": "#F8070A",
    "600": "#C70508",
    "700": "#950406",
    "800": "#630304",
    "900": "#320102"
  }
}

const theme = extendTheme({
  config,
  styles,
  colors
})

export default theme