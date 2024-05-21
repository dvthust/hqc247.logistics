import React from 'react'
import {chakra, Flex, Text, Icon, useColorModeValue} from "@chakra-ui/react";
import {
    FaFacebook,
    FaPhoneVolume,
    FaPinterest,
    FaTwitter,
    FaYoutube,
} from 'react-icons/fa'
import {URL_HNDC_FB_FANPAGE, URL_HNDC_YOUTUBE} from "@/constants/urls";
import SocialBtn from "@/components/buttons/SocialBtn";

export default function TopHeader() {
    const cl = useColorModeValue("white", "gray.800")

    return <React.Fragment>
        <chakra.header
            display={{base: 'none', lg:'block'}}
            w="full"
            color={cl}
            fontSize={'sm'}
            fontWeight={'500'}
            bgGradient={'linear-gradient(-180deg,#0249AA,#1e73be)'}
            overflowY="hidden"
            borderBottomWidth={1}
            borderBottomColor={useColorModeValue("gray.100", "gray.900")}
        >
            <chakra.div h="2.4rem" mx="auto" maxW="1200px">
                <Flex
                    w="full"
                    h="full"
                    px="6"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Flex alignItems="center">
                        <Icon boxSize={'0.85em'} as={FaPhoneVolume} />
                        <Text px={1}>Hotline: {'0395.488.506'}</Text>
                    </Flex>
                    <Flex>
                        <Flex
                            px={1}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Flex justifyContent={'center'}>
                                <SocialBtn width={25} height={25} href={URL_HNDC_FB_FANPAGE} label={'Facebook'}
                                           bgColor={'#3b5998'}>
                                    <FaFacebook color={'white'}/>
                                </SocialBtn>
                                <SocialBtn width={25} height={25} href={'#'} label={'Twitter'} bgColor={'#1da1f2'}>
                                    <FaTwitter/>
                                </SocialBtn>
                                <SocialBtn width={25} height={25} href={'#'} label={'Pinterest'} bgColor={'#cb2027'}>
                                    <FaPinterest/>
                                </SocialBtn>
                                <SocialBtn width={25} height={25} href={URL_HNDC_YOUTUBE} label={'Youtube'}
                                           bgColor={'red'}>
                                    <FaYoutube/>
                                </SocialBtn>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </chakra.div>
        </chakra.header>
    </React.Fragment>
}