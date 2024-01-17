import {chakra, Text} from '@chakra-ui/react'

export default function GeneralTitle(props: any) {

  return <chakra.div pos={'relative'}>
    <chakra.div
        pos={'relative'}
        _before={{
          content: 'url(/images/icons/section-sep-hr1.png)',
          d: 'inline-block',
          top: '-35px',
          pos: 'absolute',
          ml: '-75px',
          left: '50%'
        }}
        mt={props.mt || 12}
        fontWeight={'500'}
    >
      <Text
          textAlign={'center'}
          casing={'uppercase'}
          fontSize={'xl'}
      >{props.title}</Text>
      {props.subtitle && <Text
          textAlign={'center'}
          fontSize={'sm'}
          py={1}
      >{props.subtitle}</Text>}
    </chakra.div>
  </chakra.div>
}