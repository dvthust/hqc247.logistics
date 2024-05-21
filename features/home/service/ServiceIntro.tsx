import {chakra, Text} from '@chakra-ui/react';
import GeneralTitle from '@/components/title/GeneralTitle';

const serviceData = [
  {
    id: 1,
    title: 'Vận chuyển đường bộ',
    icon: 'sprite os-cart-icon',
    info: 'YenChina Logistics chuyên vận chuyển các loại hàng Container 20, container 40, hàng quá khổ, hàng siêu trường, siêu trọng, các loại hàng rời, các loại hàng thiết bị, kết cấu thép, tôn tấm, thiếc, kẽm, chì, các loại hàng bao, kiện…'
  },
  {
    id: 2,
    title: 'Vận chuyển đường biển',
    icon: 'sprite os-truck',
    info: 'Với YenChina Logistics, khách hàng có được sự lựa chọn linh hoạt và rộng rãi các dịch vụ vận chuyển đường biển. Chúng tôi cung ứng dịch vụ vận tải hàng nguyên công ten nơ, hàng gom, hàng rời và dịch vụ môi giới tàu.'
  },
  {
    id: 4,
    title: 'VẬN CHUYỂN ĐƯỜNG SẮT',
    icon: 'sprite os-exchange-rate',
    info: 'YenChina Logistics cung ứng dịch vụ vận chuyển đường sắt hàng gom theo lịch trình nhất định, vận chuyển nguyên toa xe, hàng không nguyên toa, đặc biệt là vận chuyển hàng quốc tế nhập xuất tuyến Trung Quốc và các nước trong khối OECD.'
  },
  {
    id: 3,
    title: 'Ghép nhóm đánh hàng',
    icon: 'sprite os-truck-together',
    info: 'YenChina Logistics cam kết và đảm bảo hàng hóa của quý khách sẽ về Việt Nam trong thời gian nhanh nhất.'
  },
]

export default function ServiceIntro() {

  return <chakra.div
      maxW="1200px"
      mx="auto"
      p={2}
      pt={[0, 6]}
  >
    <GeneralTitle title={'DỊCH VỤ CỦA CHÚNG TÔI'} />
    <chakra.div textAlign={'center'}>
      <span className="icon sprite os-hr-truck-icon our-service-hr" />
      <Text fontSize={'sm'}>Chọn ngay hệ thống website chất lượng, uy tín, đa dạng mặt hàng với nhiều mẫu mã và giá cả hợp lí, vận chuyển nhanh chóng, thanh toán tiện lợi</Text>
    </chakra.div>
    <chakra.div
        display={'flex'}
        flexWrap={'wrap'}
        py={4}
    >
      {serviceData.map(item => <chakra.div
          key={item.id}
          maxW={['100%', '50%']}
          display={'flex'}
          p={['5px', '15px']}
      >
        <chakra.div
            display={'flex'}
            alignItems={'center'}
            px={'15px'}
            py={'30px'}
            bg={'white'}
            boxShadow={'0 3px 16px 4px #f1f4f2'}
            transition={'all .3s linear'}
            _hover={{
              boxShadow: '0 0 10px 3px rgb(24 116 193 / 20%)'
            }}
        >
          <chakra.div display={{base: 'none', lg: 'block'}} className={item.icon} />
          <chakra.div px={4} w={{base: '100%', lg: '80%'}}>
            <Text fontSize={'xl'} fontWeight={'500'} textAlign={'center'}>{item.title}</Text>
            <Text textAlign={'justify'} pt={{base: 2, lg: 0}}>{item.info}</Text>
          </chakra.div>
        </chakra.div>
      </chakra.div>)
      }
    </chakra.div>
  </chakra.div>
}