import {
  Accordion,
  AccordionButton, AccordionItem,
  AccordionPanel, Box,
  chakra,
  Flex, Icon,
  Image, Text,
} from '@chakra-ui/react'
import GeneralTitle from '@/components/title/GeneralTitle'
import {HiOutlinePlus, HiOutlineMinus} from 'react-icons/hi'

const faqData = [
  {
    id: 1,
    title: 'Hệ thống kho bãi rộng',
    info: 'Hệ thống kho bãi rộng 2ha tại Hùng Vương, Sở Dầu, Hải Phòng. Hệ thống văn phòng công ty rộng 3000m tại 456 Lê Thánh Tông, Phường Đông Hải, Quận Hải An, Hải Phòng, Việt Nam'
  },
  {
    id: 2,
    title: 'Chúng tôi sở hữu một số lượng xe lớn',
    info: '35 sơmi rơ mooc loại 3 trục; 2 mooc rút có thể thay đổi chiều dài từ 14m – 25m; 5 fooc lùn chuyên chở các loại máy công trường lên tới 100 tấn; \n' +
        '02 chiếc xe cần cẩu với trọng tải từ 70-100 tấn. \n' +
        '5 đầu xe kéo mooc trọng tải 100 tấn -> 200 tấn và 6 mooc fooc, 5 moóc dài chuyên trở các loại hàng siêu trường siêu trọng, quá khổ dài từ 20m đến 45m và 2 bệ mâm có khả năng kéo dài tối đa đến 60m.'
  },
  {
    id: 3,
    title: 'Đội ngũ chuyên nghiệp',
    info: 'Đội ngũ nhân viên được đào tạo và có nhiều năm kinh nghiệm làm việc trong lĩnh vực vận tải giao nhận. \n' +
        'Đội ngũ lái xe lành nghề đã được tuyển chọn khắt khe và có phẩm chất tốt. \n' +
        'Chúng tôi hiểu biết kỹ càng pháp luật hải quan cũng như những quy định trong nghành giao nhận, vận tải.'
  },
  {
    id: 4,
    title: 'Chúng tôi có các đại lý nước ngoài với độ tin cậy cao',
    info: 'Chúng tôi đã lựa chọn rất kỹ càng các đại lý nước ngoài với độ tin cậy và an toàn cao. Mạng lưới đại lý ở nước ngoài của chúng tôi đều là các tập đoàn giao nhận lớn, đã hoạt động nhiều năm trong lĩnh vực giao nhận vận tải. Chúng tôi tất cả đều tham gia vào các tổ chức liên hiệp các nhà vận chuyển như WCA; FIATA…\n' +
        'Chúng tôi có quan hệ đặc biệt tốt với các hãng tàu lớn như: APL, Evergreen, “K”line, NYK, OOCL, COSCO, Zim, SITC, Maersk, Hapag-Lloyd…'
  },
  {
    id: 5,
    title: 'CÁC BƯỚC GIAO DỊCH KHI NHẬP HÀNG THẾ NÀO ?',
    info: 'Để đặt hàng bạn sẽ chọn sản phẩm và gửi link sản phẩm đó cho Hàng Quảng Châu 24H. Sau khi nhận link, chúng tôi sẽ liên hệ nhà cung cấp để đàm phán giá và chốt đơn hàng. Khi đã chốt được đơn hàng, bạn có thể làm theo hướng dẫn đặt hàng chi tiết của chúng tôi và chờ sản phẩm về tay chỉ sau vài ngày.'
  },
  {
    id: 6,
    title: 'THỜI GIAN VẬN CHUYỂN VỀ ĐẾN VIỆT NAM HẾT BAO LÂU ?',
    info: 'Khi đặt hàng, các shop Trung Quốc sẽ cần có 1 khoảng thời gian để chuẩn bị hàng và phát hàng. Hàng từ lúc đặt đến khi hàng về kho Hà Nội là 5-7 ngày; về HCM là 7-10 ngày.'
  },
  {
    id: 7,
    title: 'LỰA CHỌN NHÀ CUNG CẤP UY TÍN NHƯ NÀO ?',
    info: 'Thông thường các NCC trên sàn TMĐT sẽ được đánh giá qua lượt mua hàng và phản hồi về sản phẩm của khách hàng. Nếu muốn chọn đúng nhà cung cấp tốt, bạn nên xem lượt mua hàng và phản hồi của khách hàng để đánh giá và lựa chọn.'
  },
]

export default function FaqIntro() {

  return <chakra.div bg={'white'}>
    <chakra.div maxW="1200px" mx="auto" px={2}>
      <Flex>
        <Flex mt={4} flex={1} px={4} display={{base: 'none', lg: 'flex'}}>
          <Image w={'90%'} src={'/images/background/serviceleftimg.jpg'}/>
        </Flex>
        <Flex flex={1} pt={4} flexDirection={'column'}>
          <GeneralTitle
              title={'CÂU HỎI THƯỜNG GẶP'}
              subtitle={'Một số các câu hỏi thường gặp phải khi các bạn đang sử dụng dịch vụ , cũng như việc vận chuyển mua bán hàng hóa ....'}
          />
          <chakra.div
            height={'3px'}
            width={'100px'}
            margin={'10px auto'}
            pos={'relative'}
            bg={'#ffba00'}
            _before={{
              height: '3px',
              width: '50px',
              margin: '0 auto',
              position: 'absolute',
              background: '#898989',
              right: 0,
              top: 0,
              content: '""'
            }}
          />
          <chakra.div mt={4}>
            <Accordion allowToggle>
              {faqData.map(item => <AccordionItem key={item.id} my={2}>
                {({ isExpanded }) => (
                  <>
                    <chakra.h2
                        bg={'#3c414c'}
                        color={'white'}
                    >
                      <AccordionButton
                        _focus={{
                          boxShadow: 'none'
                        }}
                      >
                        <Box flex="1" textAlign="left" px={1}>
                          <Text fontSize={'sm'} casing={'uppercase'}>{item.title}</Text>
                        </Box>
                        {isExpanded ? (
                            <Icon boxSize={6} as={HiOutlineMinus} />
                        ) : (
                            <Icon boxSize={6} as={HiOutlinePlus} />
                        )}
                      </AccordionButton>
                    </chakra.h2>
                    <AccordionPanel pb={4} bg={'#f6f7f8'}>{item.info}</AccordionPanel>
                  </>
                )}
              </AccordionItem>)}
            </Accordion>
          </chakra.div>
        </Flex>
      </Flex>
    </chakra.div>
  </chakra.div>
}