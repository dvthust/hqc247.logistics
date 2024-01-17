import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  chakra, Icon,
} from '@chakra-ui/react'
import {ChevronRightIcon} from '@chakra-ui/icons'
import {FaHome} from 'react-icons/fa'

export default function BreadcrumbContainer({items, ...rest}: any) {

  return <chakra.div bg={'#f6f6f6'}>
    <chakra.div py={4} maxW={'1200px'} mx={'auto'} {...rest}>
      <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="#555555" />}>
        <BreadcrumbItem>
          <Icon as={FaHome} mr={2} />
          <BreadcrumbLink href="/" color={'#555555'}>Trang chủ</BreadcrumbLink>
        </BreadcrumbItem>
        {items.map((item: any, index: any) => {
          return <BreadcrumbItem
              key={index}
              isCurrentPage={items.length === index + 1}
              color={items.length === index + 1 ? '#898989' : '#555555'}
          >
            <BreadcrumbLink href={item?.link}>{item?.name}</BreadcrumbLink>
          </BreadcrumbItem>
        })}
      </Breadcrumb>
    </chakra.div>
  </chakra.div>
}