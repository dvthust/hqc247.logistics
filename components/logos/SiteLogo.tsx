import {URL_HNDC_HOMEPAGE} from '@/constants/urls'
import NextLink from '@/components/links/NextLink'
import {Image} from '@chakra-ui/react'

export default function SiteLogo() {

  return <NextLink href={URL_HNDC_HOMEPAGE}>
    <Image
        h={['45px', '50px']}
        src={'/images/logos/icon_yenchina.png'}
        fallbackSrc={'/images/logos/icon_yenchina.png'}
        alt={'Logo'}
    />
  </NextLink>
}