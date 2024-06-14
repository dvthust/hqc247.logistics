import {Box, Image, Heading, Flex} from "@chakra-ui/react";
import React, {useEffect, useRef} from "react";
import { register } from 'swiper/element/bundle'
import SiteLogo from "@/components/logos/SiteLogo";
import SiteLogoTruck from "@/components/logos/SiteLogoTruck";

register();

export default function BannerSlider(): JSX.Element {
    const swiperRef = useRef<any>(null);

    useEffect(() => {
        const swiperContainer = swiperRef.current;
        if (swiperContainer) {
            const swiperParams = {
                slidesPerView: 1,
                speed: 500,
                loop: true,
                autoplay: false,
                effect: "fade",
                fadeEffect: {
                    crossFade: true
                },
                navigation: {
                    enabled: true
                },
                injectStyles: [
                    `
                        div.swiper-button-prev {
                          color: white;
                          margin-left: 20px;
                        }
                        div.swiper-button-next {
                          color: white;
                          margin-right: 20px;
                        }
                    `
                ]
            }
            Object.assign(swiperContainer, swiperParams);
            swiperContainer?.initialize();

            swiperRef.current.addEventListener('slidechange', (e: any) => {
                console.log('slide changed');
            });
        }
    }, []);

    return <Box>
        <swiper-container ref={swiperRef} init={false}>
            <swiper-slide>
                <Box position={'relative'}>
                    <Box>
                        <Image
                            width={'100%'}
                            height={712}
                            src={'/images/banners/banner-hqc24h-001.jpg'}
                            alt={'Banner'}
                        />
                    </Box>
                    <Box
                        display={'none'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        position={'absolute'}
                        top={"80%"}
                        left={"50%"}
                        transform={"translate(-50%, -50%)"}
                    >
                        <Flex alignItems={'center'} flexDirection={'column'}>
                            <Heading size={{base: 'md', md: '2xl'}} mt={2} color={'white'}>Hqc24H Logistics</Heading>
                        </Flex>
                    </Box>
                </Box>
            </swiper-slide>
            <swiper-slide>
                <Box position={'relative'}>
                    <Box>
                        <Image
                            width={'100%'}
                            height={712}
                            src={'/images/banners/banner-hqc24h-002.jpg'}
                            alt={'Banner'}
                        />
                    </Box>
                </Box>
            </swiper-slide>
            <swiper-slide>
                <Box position={'relative'}>
                    <Box>
                        <Image
                            width={'100%'}
                            height={712}
                            src={'/images/banners/banner-hqc24h-003.jpg'}
                            alt={'Banner'}
                        />
                    </Box>
                </Box>
            </swiper-slide>
            <swiper-slide>
                <Box position={'relative'}>
                    <Box>
                        <Image
                            width={'100%'}
                            height={712}
                            src={'/images/banners/banner-hqc24h-004.jpg'}
                            alt={'Banner'}
                        />
                    </Box>
                </Box>
            </swiper-slide>
            <swiper-slide>
                <Box position={'relative'}>
                    <Box>
                        <Image
                            width={'100%'}
                            height={712}
                            src={'/images/banners/banner-hqc24h-005.jpg'}
                            alt={'Banner'}
                        />
                    </Box>
                </Box>
            </swiper-slide>
        </swiper-container>
    </Box>
}