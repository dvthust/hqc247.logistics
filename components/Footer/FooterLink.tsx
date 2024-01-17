import NextLink from '../links/NextLink'
import {Text} from '@chakra-ui/react'

export default function FooterLink(props: any) {

  return <NextLink
      pos={'relative'}
      href={props.href || '#'}
      _hover={{
        color: 'red',
        _before: {
          color: 'red',
        }
      }}
      _before={{
        top: 0,
        right: 'auto',
        left: 0,
        color: '#848484',
        content: '"\\203A"',
        position: 'absolute',
        transition: 'all .5s',
      }}
  >
    <Text fontSize={'md'} pl={'10px'}>{props.title}</Text>
  </NextLink>
}