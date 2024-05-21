import {chakra, Link, Text} from '@chakra-ui/react'
import SupportItem from './SupportItem'

export default function SupportInfo() {

  return <chakra.div
      bgColor={'#fff'}
      textAlign={'center'}
      boxShadow={'0 3px 5px 0 rgb(0 1 1 / 10%)'}
      className={'support-info-wrapper'}
      px={4}
  >
    <chakra.div borderBottom={'1px solid rgba(0,0,0,.125)'} py={4}>
      <Text
          textAlign={'center'}
          casing={'uppercase'}
          fontWeight={'600'}
          fontSize={'md'}
      >HỖ TRỢ KHÁCH HÀNG</Text>
    </chakra.div>
    <chakra.div
        pt={4}
        pb={2}
        display={'inline-flex'}
        flexDirection={'column'}
        justifyContent={'center'}
    >
      <SupportItem bgColor={'#f7b200'} bgColorHover={'#d39e00'}>
        <Link
            display={'flex'}
            isExternal
            alignItems={'center'}
            justifyContent={'center'}
            href={'tel:0395488506'}
            title={'0395.488.506'}
        >
          <span className={'icon sprite call-icon'} />
          <Text ml={1}>0395.488.506</Text>
        </Link>
      </SupportItem>
      <SupportItem color={'white'} bgColor={'#0068ff'} bgColorHover={'#0062cc'}>
        <Link
            display={'flex'}
            isExternal
            alignItems={'center'}
            justifyContent={'center'}
            target={'_blank'}
            href="https://zalo.me/0395488506"
            title={'0395.488.506'}
        >
          <span className={'icon sprite zalo-icon'} />
          <Text ml={1}>Chat Zalo</Text>
        </Link>
      </SupportItem>
      <SupportItem color={'white'} bgColor={'#0084ff'} bgColorHover={'#0069ca'}>
        <Link
            display={'flex'}
            isExternal
            alignItems={'center'}
            justifyContent={'center'}
            title={'YenChina'}
            target={'_blank'}
            href="https://www.messenger.com/t/yenchina.vn"
        >
          <span className={'icon sprite facebook-messenger-icon'} />
          <Text ml={1}>Chat Facebook</Text>
        </Link>
      </SupportItem>
    </chakra.div>
  </chakra.div>
}