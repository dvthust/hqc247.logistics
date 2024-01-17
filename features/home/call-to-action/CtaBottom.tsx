import {Button, chakra, Flex, Image, Link, Text} from '@chakra-ui/react'
import {URL_HNDC_MESSENGER} from '@/constants/urls'

export default function CtaBottom()
{
  return <chakra.div bg={'#0249AA'} mt={4}>
    <chakra.div
        px={{base: 4, lg: 2}}
        py={{base: 4, lg: 2}}
        display={'flex'}
        flexDirection={['column', 'row']}
        maxW="1200px"
        mx="auto"
        alignItems={'center'}
    >
      <Flex display={['none', 'flex']} flex={1} pt={2}>
        <Image w={'100%'} src={'/images/background/cal-to-action-image.png'} />
      </Flex>
      <chakra.div display={['block', 'flex']} flex={2} alignItems={'center'}>
        <chakra.div
            w={['100%', '70%']}
            color={'white'}
            display={['block', 'flex']}
            justifyContent={'center'}
            flexDirection={'column'}
        >
          <Text
              casing={'uppercase'}
              fontSize={'lg'}
              fontWeight={'bold'}
              textAlign={['center', 'initial']}
          >BẠN ĐANG TÌM NGUỒN HÀNG ĐỂ BẮT ĐẦU KINH DOANH?</Text>
          <Text
              mt={2}
              pb={[4, 0]}
              textAlign={['center', 'initial']}
          >Bạn đang quan tâm đến dịch vụ liên quan đến giao nhận, vận tải như: nhưng chi phí, chất lượng dịch vụ của đối tác chưa làm bạn hài lòng ?</Text>
        </chakra.div>
        <chakra.div ml={[0, 6]} textAlign={['center', 'center']}>
          <Link href={URL_HNDC_MESSENGER} isExternal>
            <Button
                px={6}
                transition='all .5s ease-in-out'
                bg={'#e02e21'}
                _hover={{
                  bg: '#cd281b'
                }}
            >
              <Text casing={'uppercase'} color={'white'}>Liên hệ ngay</Text>
            </Button>
          </Link>
        </chakra.div>
      </chakra.div>
    </chakra.div>
  </chakra.div>
}