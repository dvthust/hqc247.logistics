import { Button } from '@chakra-ui/react'

export default function SolidButton({children, ...props}: any) {

  return <Button
    backgroundColor={"#F95702"}
    color={"white"}
    _hover={{
      backgroundColor: "#F95702"
    }}
    {...props}
  >
    {children}
  </Button>
}