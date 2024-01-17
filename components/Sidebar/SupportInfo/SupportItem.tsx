import {Flex} from '@chakra-ui/react'

export default function SupportItem({children, color, bgColor, bgColorHover, ...rest}: any){

  return <Flex
      {...rest}
      mb={2}
      d={'inline-flex'}
      alignItems={'center'}
      bgColor={bgColor}
      borderRadius={'15px'}
      p={'5px'}
      cursor={'pointer'}
      minW={'150px'}
      maxW={'150px'}
      transition={'all .25s ease-in-out'}
      _hover={{
        bgColor: bgColorHover
      }}
      fontWeight={'500'}
      color={color || 'initial'}
  >
    {children}
  </Flex>
}