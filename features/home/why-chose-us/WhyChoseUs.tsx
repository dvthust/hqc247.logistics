import {chakra, Flex, Image, Text} from '@chakra-ui/react'
import GeneralTitle from '@/components/title/GeneralTitle'
import ReasonItem from '@/features/home/why-chose-us/ReasonItem'
import {RiShoppingBasketLine} from 'react-icons/ri'
import {FaUserAlt, FaTruckMoving, FaLaptop, FaMapMarkerAlt, FaGift} from 'react-icons/fa'

const wcuData = [
  {
    id: 1,
    title: 'Cam kết đặt hàng',
    desc: 'Cam kết hoàn trả lại 100% tiền hàng nếu mất hoặc vỡ trong quá trình vận chuyển.',
    icon: RiShoppingBasketLine,
    type: 'left'
  },
  {
    id: 2,
    title: 'Cam kết bồi thường',
    desc: 'Cam kết bồi thường gấp 10 lần số tiền chênh lệch nếu nhân viên tự tăng giá đơn hàng hoặc phí vận chuyển.',
    icon: FaTruckMoving,
    iconSize: '45px',
    type: 'left'
  },
  {
    id: 3,
    title: 'Thời gian vận chuyển',
    desc: 'Thời gian vận chuyển ổn định chuẩn xác, Từ 2 – 4 ngày kể từ khi nhận hàng của shop.',
    icon: FaMapMarkerAlt,
    iconSize: '40px',
    type: 'left'
  },
  {
    id: 4,
    title: 'Thời gian báo giá',
    desc: 'Báo giá trong 8h kể từ lúc xuống đơn và đặt hàng trong 8h kể từ lúc khách hàng đặt cọc hoặc thanh toán.',
    icon: FaUserAlt,
    iconSize: '40px',
    type: 'right'
  },
  {
    id: 5,
    title: 'Tỉ giá',
    desc: 'Tỷ giá ổn định chuẩn xác 100% theo ngân hàng Công Thương Việt Nam, rẻ nhất thị trường order hàng hiện nay.',
    icon: FaLaptop,
    iconSize: '45px',
    type: 'right'
  },
  {
    id: 6,
    title: 'Cam kết hỗ trợ',
    desc: 'Chúng tôi phát triển công nghệ để hỗ trợ Quý khách đặt hàng và tra cứu đơn hàng 24/7.',
    icon: FaGift,
    iconSize: '40px',
    type: 'right'
  }
];

const wcuBotData = [
  {
    id: 1,
    desc: 'DỄ DÀNG TẠO VÀO QUẢN LÝ ĐƠN HÀNG, TÌM NGUỒN HÀNG, TƯ VẤN MIỄN PHÍ',
    icon: '/images/icons/icon_11.png'
  },
  {
    id: 2,
    desc: 'ĐẢM BẢO 100% HÀNG HÓA, ĐỀN BÙ KHI CÓ SAI SÓT, THẤT LẠC',
    icon: '/images/icons/icon21.png'
  },
  {
    id: 3,
    desc: 'GIAO HÀNG TẬN NƠI, NHANH CHÓNG DÙ ĐƠN HÀNG CHỈ CÓ 1 SẢN PHẨM',
    icon: '/images/icons/icon31.png'
  },
]

export default function WhyChoseUs() {

  return <>
    <chakra.div pt={6} maxW="1200px" mx="auto">
      <GeneralTitle title={'DỊCH VỤ CỦA CHÚNG TÔI'} />
      <chakra.div
          display={['flex']}
          flexWrap={'wrap'}
          alignItems={'center'}
          mt={8}
      >
        <chakra.div flex={1} px={'40px'}>
          {wcuData.map(item => item.type === 'left' && <ReasonItem
              key={item.id}
              {...item}
          />)}
        </chakra.div>
        <chakra.div
            display={{base: 'none', lg: 'block'}}
            flex={1}
        >
          <Image src={'/images/background/girl-wcu.png'} w={'100%'} />
        </chakra.div>
        <chakra.div flex={1} px={'40px'}>
          {wcuData.map(item => item.type === 'right' && <ReasonItem key={item.id} {...item} />)}
        </chakra.div>
      </chakra.div>
    </chakra.div>
    <chakra.div bg={'#0249AA'}>
      <Flex
          px={{base: 4, md: 1, lg: 4}}
          pt={4}
          pb={3}
          maxW="1200px"
          mx="auto"
          flexWrap={'wrap'}
      >
        {wcuBotData.map(item => <Flex
                key={item.id}
                flex={1}
            >
          <chakra.div
              bg={{
                base: `url(${item.icon}) no-repeat 0`,
                md: `none`,
                lg: `url(${item.icon}) no-repeat 0`
              }}
              padding={{base: '30px 30px 30px 120px', md: '30px 10px 30px 10px', lg: '30px 30px 30px 120px'}}
          >
            <Text color={item.id %2 ? 'white' :'red.400'} fontSize={'md'} fontWeight={'500'}>{item.desc}</Text>
          </chakra.div>
        </Flex>
        )}
      </Flex>
    </chakra.div>
  </>
}