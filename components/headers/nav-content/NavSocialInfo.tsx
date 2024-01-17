import { chakra, Flex, Icon } from '@chakra-ui/react'
import SocialBtn from '@/components/buttons/SocialBtn'
import { URL_HNDC_FB_FANPAGE, URL_HNDC_YOUTUBE } from '@/constants/urls'
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function NavSocialInfo() {

  return <chakra.div flex={1} px={2}>
    <Flex
      justifyContent={'center'}
      alignItems={'center'}
    >
      <SocialBtn
        width={'26px'}
        height={'26px'}
        href={URL_HNDC_FB_FANPAGE}
        label={'Facebook'}
        bgColor={'#3b5998'}
      >
        <Icon as={FaFacebookF} boxSize={'12px'} color={'white'} />
      </SocialBtn>
      <SocialBtn
        width={'26px'}
        height={'26px'}
        href={URL_HNDC_YOUTUBE}
        label={'Youtube'}
        bgColor={'red'}
      >
        <Icon as={FaYoutube} boxSize={'14px'} color={'white'} />
      </SocialBtn>
      <SocialBtn
        width={'26px'}
        height={'26px'}
        href={'#'}
        label={'Twitter'}
        bgColor={'#1da1f2'}
      >
        <Icon as={FaTwitter} boxSize={'14px'} color={'white'} />
      </SocialBtn>
    </Flex>
  </chakra.div>
}