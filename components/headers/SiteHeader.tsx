import React from 'react'
import { chakra, Flex, HStack, IconButton, useColorModeValue, useDisclosure, } from '@chakra-ui/react'
import { useViewportScroll } from 'framer-motion'
import { AiOutlineMenu } from 'react-icons/ai'
import SiteLogo from '@/components/logos/SiteLogo'
import MobileNavContent from '@/components/headers/MobileNavContent'
import HeaderMenuPc from '@/components/headers/pc/HeaderMenuPc'

export default function SiteHeader () {
  const mobileNav = useDisclosure()
  const bg = useColorModeValue('white', 'gray.800')
  const ref: any = React.useRef()
  const [y, setY] = React.useState(0)
  const { height = 0 } = ref.current ? ref.current.getBoundingClientRect() : {}

  const { scrollY } = useViewportScroll()
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()))
  }, [scrollY])

  return (
    <React.Fragment>
      <chakra.header
        ref={ref}
        shadow={y > height ? 'sm' : undefined}
        transition="box-shadow 0.2s"
        bg={bg}
        w="full"
        overflowY="hidden"
        borderBottomWidth={1}
        borderBottomColor={useColorModeValue('gray.100', 'gray.900')}
      >
        <chakra.div h={['4.2rem', '4.8rem']} mx="auto" maxW="1200px">
          <Flex
            w="full"
            h="full"
            px={[2, 6]}
            alignItems="center"
            justifyContent={{ base: 'center', lg: 'space-between' }}
          >
            <Flex align="flex-start">
              <IconButton
                position={'absolute'}
                left={0}
                top={'0.8rem'}
                display={{ base: 'flex', lg: 'none' }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue('gray.800', 'inherit')}
                variant="ghost"
                icon={<AiOutlineMenu/>}
                onClick={mobileNav.onOpen}
                _hover={{}}
                _focus={{}}
                _active={{}}
              />
              <HStack>
                <SiteLogo/>
              </HStack>
            </Flex>
            <HeaderMenuPc mobileNav={mobileNav}/>
          </Flex>
          <MobileNavContent mobileNav={mobileNav}/>
        </chakra.div>
      </chakra.header>
    </React.Fragment>
  )
}