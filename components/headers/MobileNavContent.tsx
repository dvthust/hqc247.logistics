import {
  chakra,
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  useBreakpointValue
} from '@chakra-ui/react'
import SiteLogoTruck from '@/components/logos/SiteLogoTruck'
import UserNavContent from '@/components/headers/nav-content/UserNavContent'

export default function MobileNavContent({mobileNav, data}: any) {
  const drawerPlacement: any = useBreakpointValue({ base: "left", lg: "right" })

  return <Drawer
    size={['xs']}
    placement={drawerPlacement}
    onClose={mobileNav.onClose}
    isOpen={mobileNav.isOpen}
  >
    <DrawerOverlay />
    <DrawerContent>
      <DrawerHeader
        px={1} py={3}
        borderBottomWidth="1px"
        borderBottomColor={'gray.50'}
      >
        <Flex justifyContent={'space-between'}>
          <CloseButton
            aria-label="Close menu"
            justifySelf="self-start"
            onClick={mobileNav.onClose}
          />
          <SiteLogoTruck />
          <chakra.div/>
        </Flex>
      </DrawerHeader>
      <DrawerBody px={0} py={1}>
        <Flex alignItems="center" py={2} justifyContent={'center'}>
          <Flex>
            <Text display={'flex'}>Hotline:</Text>
            <Text ml={1} color={'red'}>{data?.contact_hotline || '035.365.1688'}</Text>
          </Flex>
        </Flex>

        <UserNavContent mobileNav={mobileNav} />
      </DrawerBody>
    </DrawerContent>
  </Drawer>
}