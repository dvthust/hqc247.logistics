import { Button } from '@chakra-ui/react'

export default function OutlineButton({children, ...props}: any) {

  return <Button
    variant={"outline"}
    color={"#F95702"}
    borderColor={"#F95702"}
    _hover={{
      color: "white",
      backgroundColor: "#F95702"
    }}
    {...props}
  >
    {children}
  </Button>
}