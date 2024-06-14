import Head from 'next/head'
import Sidebar from '@/components/Sidebar'
import {chakra, Heading, Image, Wrap, WrapItem, Flex, List, ListItem, ListIcon} from '@chakra-ui/react'
import BreadcrumbContainer from '@/components/BreadcrumbContainer'
import {ReactElement} from "react";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import {MdCheckCircle} from "react-icons/md";

export default function BusinessPage () {
  return <>
    <Head>
      <title>Kinh doanh thương mại</title>
    </Head>
    <BreadcrumbContainer
        d={{base: 'none', lg: 'flex'}}
        px={'15px'}
        items={[
          {name: `Giới thiệu về Hqc24H`}
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
              <Heading as="h1" size="lg" textAlign={"center"}>Kinh doanh thương mại</Heading>
              <Flex className={'post-content'} pt={'15px'} mt={4}>
                <Wrap maxW={{base: "100%", md: '40%'}}>
                  <WrapItem>
                    <Image src={'/images/other/f3.jpg'} alt={'Kinh doanh'} />
                  </WrapItem>
                  <WrapItem>
                  <Image src={'/images/other/van-tai.png'} alt={'Kinh doanh'} />
                  </WrapItem>
                </Wrap>
                <chakra.div ml={{base: 0, md: 8}}>
                  <List spacing={3}>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color='green.500' />
                      Cung cấp vật tư, thiết bị, phụ tùng chuyên ngành giao thông vận tải
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color='green.500' />
                      Cung cấp xe đầu kéo các loại nhập khẩu từ Mỹ
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color='green.500' />
                      Cung cấp xe sơ mi rơ mooc các loại nhập khẩu từ Trung Quốc
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color='green.500' />
                      Cung cấp xe con và xe nhập khẩu đã qua sử dụng
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color='green.500' />
                      Cho thuê văn phòng
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color='green.500' />
                      Kinh doanh xăng dầu
                    </ListItem>
                  </List>
                </chakra.div>
              </Flex>
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

BusinessPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
};