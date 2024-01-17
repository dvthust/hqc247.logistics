import { useRouter } from 'next/router'
import {Button, Text, useColorModeValue} from '@chakra-ui/react'
import NextLink from '@/components/links/NextLink'

export default function MenuItem(props: any) {
  const router = useRouter()
  const bg = useColorModeValue(props.bgColor || "white", "gray.700")
  const cl = useColorModeValue(props.color || "orange.500", "white")

  return <NextLink href={props.url || '/' }>
    <Button
        bg={bg}
        px={props.px ?? "12px"}
        color={router.pathname === props.url ? props.color || 'orange.500' : 'gray.700'}
        display="inline-flex"
        alignItems="center"
        fontSize="sm"
        fontWeight="bold"
        _hover={{ color: cl }}
        _focus={{
          boxShadow: "none",
          outline: 0
        }}
        _active={{bg: 'white'}}
    >
      <Text casing={'uppercase'}>{props.title}</Text>
    </Button>
  </NextLink>
}