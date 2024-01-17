import {Flex, HStack, IconButton, useColorModeValue} from '@chakra-ui/react'
import MenuItem from '@/components/headers/pc/MenuItem'
import {
  URL_HNDC_BUSINESS,
  URL_HNDC_CONTACT,
  URL_HNDC_HOMEPAGE,
  URL_HNDC_INTRODUCTION,
  URL_HNDC_SERVICE
} from '@/constants/urls'
import {AiOutlineMenu} from 'react-icons/ai'
import React from 'react'

export default function HeaderMenuPc({mobileNav}: any) {

  return <Flex display={{ base: "none", lg: "flex" }} pos={'relative'}>
    <HStack spacing="0">
      <MenuItem title={'Trang chủ'} url={URL_HNDC_HOMEPAGE} />
      <MenuItem title={'Giới thiệu công ty'} url={URL_HNDC_INTRODUCTION} />
      <MenuItem title={'Dịch vụ'} url={URL_HNDC_SERVICE} />
      <MenuItem title={'Kinh doanh thương mại'} url={URL_HNDC_BUSINESS} />
      <MenuItem title={'Liên hệ'} url={URL_HNDC_CONTACT} />
      <IconButton
        display={{ base: "flex", lg: "none" }}
        aria-label="Open menu"
        fontSize="20px"
        color={useColorModeValue("gray.800", "inherit")}
        variant="ghost"
        icon={<AiOutlineMenu />}
        onClick={mobileNav.onOpen}
        _hover={{}}
        _focus={{}}
        _active={{}}
      />
    </HStack>
  </Flex>
}