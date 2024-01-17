import {
  Box,
  Flex,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Icon,
} from '@chakra-ui/react'
import {
  FaFacebook,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'
import SiteLogo from '@/components/logos/SiteLogo'
import {FaHome, FaPhoneVolume, FaRegEnvelope} from 'react-icons/fa'
import {
  URL_HNDC_BUSINESS,
  URL_HNDC_FB_FANPAGE,
  URL_HNDC_HOMEPAGE,
  URL_HNDC_INTRODUCTION, URL_HNDC_SERVICE,
  URL_HNDC_YOUTUBE,
} from '@/constants/urls'
import SocialBtn from '@/components/buttons/SocialBtn'
import FooterLink from './FooterLink'

const ListHeader = ({children}: any) => {
  return (
      <Text textAlign={'center'} fontWeight={'500'} fontSize={['xs', 'sm']}
            mb={2}>
        {children}
      </Text>
  )
}

const AddressHn = ({address, email, phone}: any) => {

  return <Box>
    <Text fontSize={'md'} fontWeight={500} ml={1}>Hà Nội</Text>
    <chakra.div pt={1}>
      <Flex alignItems={'center'}>
        <Icon as={FaHome} mr={1}/>
        <Text fontSize={'sm'}> {address ||
        'KDT Tây Nam Linh Đàm, Hoàng liệt, Hoàng Mai, HN'}</Text>
      </Flex>
      <Flex alignItems={'center'} py={1}>
        <Icon as={FaPhoneVolume} mr={1}/>
        <Text fontSize={'sm'}>{phone || '035.365.1688'}</Text>
      </Flex>
      <Flex alignItems={'center'}>
        <Icon boxSize={'14px'} as={FaRegEnvelope} mr={1}/>
        <Text fontSize={'sm'}>{email || "hangnoidiachina.vn@gmail.com"}</Text>
      </Flex>
    </chakra.div>
  </Box>
}

const AddressHcm = ({address, phone}: any) => {

  return <Box>
    <Text fontSize={'md'} fontWeight={500} ml={1}>Hồ Chí Minh</Text>
    <chakra.div pt={2}>
      <Flex alignItems={'center'}>
        <Icon as={FaHome} mr={1}/>
        <Text fontSize={'sm'}>{address || 'Phan Huy Ích, Phường 15, Quận Tân Bình, Hồ Chí Minh'}</Text>
      </Flex>
      <Flex alignItems={'center'} py={1}>
        <Icon as={FaPhoneVolume} mr={1}/>
        <Text fontSize={'sm'}>{phone || '035.365.1688'}</Text>
      </Flex>
    </chakra.div>
  </Box>
}

export default function Footer() {

  return (
      <Box
          bgImage={`url('/images/background/footer-bg.jpg')`}
          bgPosition={'0 50%'}
          color={'white'}
      >
        <Container as={Stack} maxW={'1200px'} py={10}>
          <SimpleGrid
              templateColumns={{sm: '1fr 1fr', lg: '1fr 1fr 1fr'}}
              spacing={4}>
            <Stack spacing={6}>
              <Box mt={-1}>
                <SiteLogo/>
              </Box>
              <Text>
                Hqc247 Logistics là công ty chuyên nghiệp trong lĩnh vực Logistics. Hqc247 Logistics cung cấp cho khách hàng tất cả các dịch vụ liên quan đến giao nhận, vận tải như: Vận tải đường hàng không, vận tải đường biển, dịch vụ gom hang, vận tải đường bộ, dịch vụ kho bãi, dịch vụ khai Hải quan, dịch vụ vận chuyển hàng dự án.
              </Text>
            </Stack>
            <chakra.div>
              <ListHeader>THÔNG TIN HỮU ÍCH</ListHeader>
              <Flex justifyContent={'center'} mt={4}>
                <Stack align={'flex-start'}>
                  <FooterLink title={'Trang chủ'} href={URL_HNDC_HOMEPAGE}/>
                  <FooterLink title={'Giới thiệu công ty'} href={URL_HNDC_INTRODUCTION}/>
                  <FooterLink title={'Dịch vụ'} href={URL_HNDC_SERVICE}/>
                  <FooterLink title={'Kinh doanh thương mại'} href={URL_HNDC_BUSINESS}/>
                </Stack>
              </Flex>
              <Flex justifyContent={'center'} mt={8}>
                <SocialBtn href={URL_HNDC_FB_FANPAGE} label={'Facebook'}
                           bgColor={'#3b5998'}>
                  <FaFacebook color={'white'}/>
                </SocialBtn>
                <SocialBtn href={'#'} label={'Twitter'} bgColor={'#1da1f2'}>
                  <FaTwitter/>
                </SocialBtn>
                <SocialBtn href={'#'} label={'Pinterest'} bgColor={'#cb2027'}>
                  <FaPinterest/>
                </SocialBtn>
                <SocialBtn href={URL_HNDC_YOUTUBE} label={'Youtube'}
                           bgColor={'red'}>
                  <FaYoutube/>
                </SocialBtn>
              </Flex>
            </chakra.div>
            <Stack spacing={6}>
              <Box mt={-1}>
                <Text>Địa chỉ</Text>
              </Box>
              <>
                <AddressHn
                    address={'Số 15 , ngõ 61 ,Cổ Linh, Thạch Bàn, Long Biên, HN'}
                    email={'hqc247.logistics@gmail.com'}
                    phone={'035.747.1688'}
                />
                <AddressHcm
                    address={"Lê Văn Sỹ - P1 - Q.Tân Bình, Hồ Chí Minh"}
                    phone={"037.286.1688"}
                />
              </>
            </Stack>
          </SimpleGrid>
        </Container>
        <Flex
            alignItems={'center'}
            justifyContent={'center'}
            borderTop={'1px solid #232951'}
            py={'20px'}
            flexDirection={['column', 'row']}
        >
          <Text color={'white'}>© 2015 - 2024 Copyright</Text>
          <Link href={URL_HNDC_HOMEPAGE} color={'red'}
                pl={1}>Hqc247</Link>
          <Text color={'white'} ml={1}>Tất cả các quyền được bảo lưu</Text>
        </Flex>
      </Box>
  )
}