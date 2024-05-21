import {Box, chakra, Flex, Image, Stack, Text} from '@chakra-ui/react'
import GeneralTitle from '@/components/title/GeneralTitle'
import ChakraCarousel from '@/components/ChakraCarousel'

const testimonialData = [
  {
    id: 1,
    avatar: '/images/testimonial/1.png',
    name: 'Huyền Trang',
    job: 'Chủ shop thời trang Trung Việt HN',
    info: 'Tôi đã từng sang tận Quảng Châu đánh hàng, nhưng khi gặp dịch vụ của YenChina thì thấy việc sang tận nơi không còn cần thiết nữa. Các bạn đã giúp tôi tiết kiệm được thời gian, công sức, chi phí đi lại.'
  },
  {
    id: 2,
    avatar: '/images/testimonial/2.png',
    name: 'Hà Nguyễn',
    job: 'Chủ chuỗi thời trang PlayBoy',
    info: 'YenChina đã cho chúng tôi một lợi thế cạnh tranh mới trong ngành bán lẻ thời trang, bán hàng ngày nay không chỉ ở cửa hàng mà còn là cạnh tranh về nguồn hàng và chi phí nhập hàng.'
  },
  {
    id: 3,
    avatar: '/images/testimonial/3.png',
    name: 'Hoàng Thành',
    job: 'Chủ shop Lining Sport',
    info: 'Trước kia khi nhập lại của các chợ đầu mối, mình không linh động được về mẫu mã và số lượng nhập dẫn tới việc kinh doanh gặp khó khăn. Dùng dịch vụ này thì mình khắc phục được các vấn đề này, giờ đây chỉ cần ngồi chọn hàng ở nhà và chờ tin nhắn hàng về là đến kho lấy hàng.'
  },
]

export default function TestimonialInfo() {

  return <chakra.div bg={'#f9f9fb'}>
    <chakra.div py={6} maxW="1200px" mx="auto">
      <GeneralTitle
          title={'KHÁCH HÀNG NÓI VỀ YEN CHINA'}
          subtitle={'Được tin tưởng bởi hơn 3000 đơn vị kinh doanh và shop bán hàng online trên toàn quốc.'}
      />
      <chakra.div mt={[4, 0]}>
          <ChakraCarousel gap={32} min={1} middle={1} max={1} indicator={'dot'}>
              {testimonialData.map((slide, sid) => (
                  <Box key={`slide-${sid}`} boxSize="full" flex="none">
                    <Stack
                        p={[0, '8px']}
                        textAlign="center"
                        w="full"
                        mb={1}
                    >
                      <Flex
                          justifyContent={'center'}
                          pos={'relative'}
                          _before={{
                            content: '""',
                            position: 'absolute',
                            width: '75%',
                            height: '1px',
                            left: 0,
                            right: 0,
                            margin: 'auto',
                            top: '45px',
                            borderTop: '1px solid rgba(0,0,0,.1)'
                          }}
                      >
                        <chakra.div zIndex={1}>
                          <Image
                              borderRadius={'50%'}
                              w={'90px'}
                              h={'90px'} src={slide.avatar}
                          />
                        </chakra.div>
                      </Flex>
                      <Flex justifyContent={'center'} pt={4}>
                        <Text fontSize="md" fontWeight={'bold'} pb={2}>{slide.name},</Text>
                        <Text fontSize="md" ml={1} maxW={'60%'}>{slide.job}</Text>
                      </Flex>
                      <chakra.div>
                        <Text fontSize="md" maxW={['100%', '65%']} mx={'auto'}>{slide.info}</Text>
                      </chakra.div>
                    </Stack>
                  </Box>
              ))}
          </ChakraCarousel>
      </chakra.div>
    </chakra.div>
  </chakra.div>
}