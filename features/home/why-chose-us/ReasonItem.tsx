import {chakra, Icon, Text} from '@chakra-ui/react'

export default function ReasonItem(props: any) {

  return <chakra.div
    border={'1px solid #ddd'}
    mb={'30px'}
    p={'20px'}
    pos={'relative'}
  >
    <chakra.div
        mr={props.type ==='left' ? '40px' : '20px'}
        ml={props.type ==='right' ? '40px' : '20px'}
    >
      <Text
          fontSize={'xl'}
          fontWeight={'500'}
          textAlign={props.type ==='right' ? 'left' : 'right'}
      >{props.title}</Text>
      <chakra.div
        overflow={'hidden'}
        display={'flex'}
        justifyContent={props.type ==='right' ? 'flex-start' :'flex-end'}
        mt={2}
      >
        <chakra.div
            w={'20px'}
            bg={'#0249AA'}
            h={'3px'}
            mb={'5px'}
            pos={'relative'}
            _before={{
              content: '""',
              position: 'absolute',
              top: '50%',
              right: '40px',
              width: '70px',
              height: '2px',
              background: '#eee',
              transform: 'translateY(-50%)'
            }}
            _after={{
              content: '""',
              position: 'absolute',
              top: '50%',
              left: '40px',
              width: '70px',
              height: '2px',
              background: '#eee',
              transform: 'translateY(-50%)'
            }}
        />
      </chakra.div>
    </chakra.div>
    <chakra.div py={4}>
      <Text
          fontSize={'sm'}
          lineHeight={'24px'}
          h={'60px'}
          mr={['10px', props.type ==='left' ? '40px' : '10px']}
          ml={['10px', props.type ==='right' ? '40px' : '20px']}
          textAlign={props.type ==='right' ? 'left' : 'right'}
      >{props.desc}</Text>
    </chakra.div>
    <chakra.div
        display={'flex'}
        w={{base: '75px', lg: '100px'}}
        h={{base: '75px', lg: '100px'}}
        color={'white'}
        bg={'#0249AA'}
        borderRadius={'50%'}
        justifyContent={'center'}
        alignItems={'center'}
        pos={'absolute'}
        right={props.type ==='right' ? 'auto' : 0}
        left={props.type ==='left' ? 'auto' : 0}
        top={'30px'}
        transform={props.type ==='right' ? 'translateX(-50%)' : 'translateX(50%)'}
    >
      <Icon boxSize={['40px', props?.iconSize || '50px']} as={props.icon} />
    </chakra.div>
  </chakra.div>
}