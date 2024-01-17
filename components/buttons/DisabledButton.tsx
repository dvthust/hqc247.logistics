import { Button } from '@chakra-ui/react'

export default function DisabledButton({children, ...props}: any) {

  return <Button
    disabled
    backgroundColor={"rgba(25, 23, 22, 0.1)"}
    color={"#6E7271"}
    _hover={{
      color: "#6E7271",
      backgroundColor: "rgba(25, 23, 22, 0.1)"
    }}
    _active={{
      color: "#6E7271",
      backgroundColor: "rgba(25, 23, 22, 0.1)"
    }}
    {...props}
  >
    {children}
  </Button>
}