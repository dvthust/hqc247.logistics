import { useRouter } from 'next/router'
import {chakra, Button, Text, useColorModeValue} from '@chakra-ui/react'
import NextLink from '@/components/links/NextLink'

export default function MenuMobileItem(props: any) {
  const router = useRouter()
  const bg = useColorModeValue(props.bgColor || "#fff", "gray.700")
  const cl = useColorModeValue(props.color || "orange.500", "white")

  return <chakra.div
      flex={props.width || '50%'}
  >
    <NextLink href={props.url || '/' }>
      <chakra.div
          mx={2}
      >
        <Button
            bg={bg}
            size={'sm'}
            px={props.px ?? "12px"}
            color={props.isGroup ? props.color : (router.pathname === props.url ? props.color || 'orange.500' : 'gray.700')}
            display="inline-flex"
            alignItems="center"
            fontSize="sm"
            fontWeight="600"
            _hover={{ color: cl }}
            _focus={{ boxShadow: "none" }}
            _active={{bg: 'white'}}
            onClick={props?.onClick}
        >
          <Text casing={'capitalize'}>{props.title}</Text>
        </Button>
      </chakra.div>
    </NextLink>
  </chakra.div>
}