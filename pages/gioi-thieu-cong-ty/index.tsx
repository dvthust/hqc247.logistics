import Head from 'next/head'
import Sidebar from '@/components/Sidebar'
import {chakra, Heading, Text} from '@chakra-ui/react'
import BreadcrumbContainer from '@/components/BreadcrumbContainer'
import {ReactElement} from "react";
import DefaultLayout from "@/components/layouts/DefaultLayout";

export default function IntroductionPage () {
  return <>
    <Head>
      <title>Giới thiệu về Hqc24H Logistics</title>
    </Head>
    <BreadcrumbContainer
        d={{base: 'none', lg: 'flex'}}
        px={'15px'}
        items={[
          {name: `Giới thiệu về Hqc24H Logistics`}
        ]}
    />
    <chakra.div>
      <chakra.div
          maxW="1200px"
          mx="auto"
          mb={{base: 4, lg: 8}}
      >
        <chakra.div
            display={'flex'}
            mt={{base: 4, lg: 6}}
            flexDirection={{base: 'column', lg: 'row'}}
            className="app-wrapper"
        >
          <chakra.div
              px={{base: 0, lg: '15px'}}
              maxW={'861px'}
              w={'100%'}
              className="content-wrapper"
          >
            <chakra.div
                p={{base: '15px 20px', lg: '40px 60px'}}
                bgColor={'#fff'}
                boxShadow={'0 3px 5px 0 rgb(0 1 1 / 10%)'}
                className={'post-wrapper'}
            >
              <Heading as="h1" size="lg">Giới thiệu về Hqc24H Logistics</Heading>
              <chakra.div pt={'30px'}>
                <Text fontWeight={'600'}>
                  Bài viết này chúng tôi sẽ giới thiệu Hqc24H Logistics là gì, mục đích hướng tới, sứ mệnh và tầm nhìn về ngành dịch vụ logistics nói chung và Order hàng trung quốc nói riêng.
                </Text>
              </chakra.div>
              <chakra.div className={'post-content'} pt={'15px'}>
                <Heading size={'sm'}>GIỚI THIỆU CÔNG TY</Heading>
                <Text mt={2}>
                  Tầm nhìn và sứ mệnh: Chúng tôi là chuyên gia trong lĩnh vực vận tải và giao nhận. Thế mạnh của chúng tôi là vận chuyển những lô hàng siêu trường siêu trọng cho các dự án, nhà máy lớn. Chúng tôi sẽ ngày càng chuyên nghiệp hơn nữa để đáp ứng mọi nhu cầu vận chuyển của khách hàng và trở thành doanh nghiệp dẫn đầu trong lĩnh vực vận tải đường bộ và đường thủy. Doanh nghiệp càng lớn mạnh hơn với sự phát triển của các lĩnh vực kinh doanh các loại xe, thiết bị phụ tùng chuyên nghành vận tải; kinh doanh cây xăng xe vận tải đầu kéo; kinh doanh cây xăng, xăng dầu.
                </Text>

                <Heading size={'sm'} mt={4}>CHÚNG TÔI CUNG CẤP CÁC DỊCH VỤ SAU:</Heading>
                <Text fontWeight={'600'} mt={4}>1. Dịch vụ vận chuyển:</Text>

                * Vận chuyển đường bộ

                – Vận chuyển hàng dự án, siêu trường, siêu trọng
                – Vận chuyển RO-RO (thiết bị và phương tiện có bánh xe)
                – Vận chuyển hàng lạnh

                * Vận chuyển đường biển

                * Vận chuyển đường sắt

                * Thủ tục hải quan xuất nhập khẩu

                * Cho thuê kho bãi

                * Cho thuê cần cẩu từ 25 đến 200 tấn

                <Text fontWeight={'600'} mt={4}>2. Kinh doanh thương mại:</Text>

                * Cung cấp vật tư, thiết bị, phụ tùng chuyên ngành giao thông vận tải

                * Cung cấp xe đầu kéo các loại nhập khẩu từ Mỹ

                * Cung cấp xe sơ mi rơ mooc các loại nhập khẩu từ Trung Quốc

                * Cung cấp xe con và xe nhập khẩu đã qua sử dụng

                * Cho thuê văn phòng

                * Kinh doanh xăng dầu

                <Heading size={'sm'} mt={4}>CHÚNG TÔI CAM KẾT:</Heading>
                <Text mt={2}>
                  Chúng tôi cam kết tất cả các đơn hàng đều được xử lý ngay lập tức với tinh thần trách nhiệm cao nhất. Quy trình làm việc chuyên nghiệp khép kín không cho phép chậm trễ ở bất cứ khâu nào.
                </Text>
                <Text>Hàng hóa đi và đến đúng thời gian yêu cầu. Đội ngũ làm việc 24/7.</Text>
                <Text>Phương án vận chuyển luôn được tối ưu, an toàn và tiết kiệm chi phí nhất.</Text>
                <Text>Chúng tôi kinh doanh xe nhập khẩu chính hãng, chất lượng và giá cả có bảo hành.</Text>
              </chakra.div>
            </chakra.div>
          </chakra.div>
          <chakra.div
              mt={{base: 4, lg: 0}}
              px={{base: 0, lg: '15px'}}
              w={{base: '100%', lg: '325px'}}
              className="sidebar-wrapper"
          >
            <Sidebar  />
          </chakra.div>
        </chakra.div>
      </chakra.div>
    </chakra.div>
  </>
}

IntroductionPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
};