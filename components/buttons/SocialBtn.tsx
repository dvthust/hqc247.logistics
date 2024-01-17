import {chakra, VisuallyHidden} from '@chakra-ui/react'

export default function SocialBtn(props: any) {

  return (
      <chakra.button
          bg={props.bgColor}
          rounded={'full'}
          w={props.width || '35px'}
          h={props.height || '35px'}
          mr={2}
          cursor={'pointer'}
          as={'a'}
          href={props.href || '#'}
          target={'_blank'}
          display={'inline-flex'}
          alignItems={'center'}
          justifyContent={'center'}
          transition={'background 0.3s ease'}
      >
        <VisuallyHidden>{props.label}</VisuallyHidden>
        {props.children}
      </chakra.button>
  )
}