import {chakra, Flex, Icon, Text} from '@chakra-ui/react'
import {FaList, FaUserAlt, FaHospital, FaCoffee} from 'react-icons/fa'

const fcData = [
  {
    id: 1,
    title: 66500,
    subtitle: 'ĐƠN / NĂM',
    icon: FaList
  },
  {
    id: 2,
    title: 95490,
    subtitle: 'KHÁCH HÀNG',
    icon: FaUserAlt
  },
  {
    id: 3,
    title: 4800,
    subtitle: 'ĐẠI LÝ ĐĂNG KÝ',
    icon: FaHospital
  },
  {
    id: 4,
    title: 250,
    subtitle: 'CỘNG TÁC VIÊN',
    icon: FaCoffee
  },
]

export default function FactCounter() {

  return <chakra.div
      px={2}
      py={['20px', '60px']}
      bgImage={'/images/background/counter-bg.jpg'}
      pos={'relative'}
      _before={{
        content: '""',
        display: 'block',
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        height: '100%',
        bg: 'rgba(43,46,72,.8)',
        zIndex: 1
      }}
  >
    <chakra.div
        maxW="1200px"
        mx="auto"
    >
      <Flex color={'white'} flexWrap={'wrap'}>
        {fcData.map(item => <Flex
            key={item.id}
            alignItems={'center'}
            flex={['50%', 1]}
            zIndex={4}
            my={[4, 0]}
        >
          <chakra.div
            w={{base: '46px', lg: '70px'}}
            h={{base: '46px', lg: '70px'}}
            borderRadius={'50%'}
            border={'3px solid white'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            mr={4}
          >
            <Icon boxSize={{base: '18px', lg: '40px'}} as={item.icon} />
          </chakra.div>
          <chakra.div>
            <Text fontSize={['xl', '2xl']} fontWeight={'bold'}>{item.title}</Text>
            <chakra.div h={'4px'} bg={'#ccc'} w={'50px'} my={2} />
            <Text
                fontSize={['sm', 'lg']}
                fontWeight={'bold'}
            >{item.subtitle}</Text>
          </chakra.div>
        </Flex>)}
      </Flex>
    </chakra.div>
  </chakra.div>
}