import {chakra, Flex} from '@chakra-ui/react'
import MenuMobileItem from '@/components/headers/mb/MenuMobileItem'
import {URL_HNDC_BUSINESS, URL_HNDC_CONTACT, URL_HNDC_HOMEPAGE, URL_HNDC_SERVICE} from '@/constants/urls'
import NavSocialInfo from '@/components/headers/nav-content/NavSocialInfo'

export default function UserNavContent({mobileNav}: any) {

  return <>
    <Flex
      alignItems={'center'}
      borderBottom={'1px solid #ccc'}
      bgColor={'#fff'}
      pb={2}
      mt={2}
    >
      <chakra.div flex={1} px={2}>
        <MenuMobileItem
          px={1}
          color={'#004f8b'}
          bgColor={'#fff'}
          title={'Trang chủ'}
          url={URL_HNDC_HOMEPAGE}
          onClick={mobileNav.onClose}
        />
      </chakra.div>
      <NavSocialInfo />
    </Flex>

    <Flex flexDirection={'column'} mt={2}>
      <chakra.div pl={'26px'}>
        <Flex
          bgColor={'#fff'}
          flexWrap={'wrap'}
        >
          <MenuMobileItem onClick={mobileNav.onClose} title={'Giới thiệu công ty'} url={URL_HNDC_HOMEPAGE} />
          <MenuMobileItem onClick={mobileNav.onClose} title={'Dịch vụ'} url={URL_HNDC_SERVICE} />
          <MenuMobileItem onClick={mobileNav.onClose} title={'Kinh doanh thương mại'} url={URL_HNDC_BUSINESS} />
          <MenuMobileItem onClick={mobileNav.onClose} title={'Liên hệ'} url={URL_HNDC_CONTACT} />
        </Flex>
      </chakra.div>
    </Flex>
  </>
}