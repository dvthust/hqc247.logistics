import {
  Button,
  chakra,
  Flex, FormControl, FormErrorMessage, Input,
  List,
  ListIcon,
  ListItem, Textarea,
  useToast,
} from '@chakra-ui/react';
import GeneralTitle from '@/components/title/GeneralTitle';
import {MdCheckCircle} from 'react-icons/md';
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import React from 'react';
import {useRouter} from 'next/router';

const schema = yup.object().shape({
  name: yup.string().
      required('Trường họ và tên không được để trống !').
      min(3, 'Trường họ và tên phải chứa ít nhất 3 ký tự !').
      max(255, 'Trường họ và tên không được lơn hơn 256 ký tự !'),
  email: yup.string().
      required('Trường email không được để trống !').
      min(3, 'Trường email phải chứa ít nhất 3 ký tự !').
      max(255, 'Trường email không được lơn hơn 256 ký tự !'),
  phone: yup.string().
      required('Trường số điện thoại không được để trống'),
  address: yup.string().
      required('Trường địa chỉ không được để trống'),
  content: yup.string().
      required('Trường nội dung không được để trống'),
});

export default function ContactInfoWrapper() {
  const router = useRouter();
  const toast = useToast();
  const {register, handleSubmit, formState: {
    errors, isSubmitting, isSubmitSuccessful}
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    toast({
      title: 'Thành công',
      description: "Yêu cầu của bạn đã được ghi nhận. Chúng tôi sẽ phản hồi lại trong thời gian sớm nhất",
      status: 'success',
      duration: 5000,
      isClosable: true,
      position: 'top'
    });
    router.push('/');
  };

  return <chakra.div bg={'white'}>
    <chakra.div maxW="1200px" mx="auto" px={2}>
      <Flex p={[4]} justifyContent={'center'}>
        <chakra.div maxW={['100%', '70%']}>
          <GeneralTitle
              title={'THÔNG TIN LIÊN HỆ'}
              subtitle={'Bộ phận chăm sóc khách hàng của chúng tôi hoạt động 24/7. Quý Khách hàng có thể liên hệ trực tiếp với chúng tôi bằng bất kỳ hình thức nào dưới đây:'}
          />
          <List spacing={3} mt={4}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='green.500' />
              Văn Phòng Hà Nội: 117-119 P. Bằng Liệt, Hoàng Liệt, Hoàng Mai, Hà Nội 10000, Việt Nam
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='green.500' />
              Văn Phòng TP HCM: Phan Huy Ích, P. 15, Q.Tân Bình, Hồ Chí Minh
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='green.500' />
              Văn Phòng Trung Quốc: 广西壮族自治区 崇左市 凭祥市 凭祥镇 皇龙居7栋17
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='green.500' />
              Hotline Miền Bắc: 096 232 1688 – 086 791 1688
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='green.500' />
              Hotline Miền Nam: 0395 488 506
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='green.500' />
              Email: hangquangchau24h.vn@gmail.com
            </ListItem>
          </List>
        </chakra.div>
      </Flex>
      <Flex p={[4]} justifyContent={'center'}>
        <chakra.div>
          <GeneralTitle
              title={'GỬI YÊU CẦU CHO CHÚNG TÔI'}
              subtitle={'Chuyên viên của chúng tôi sẽ liên hệ lại với quý khách ngay sau 30p để hoàn tất hồ sơ thủ tục vận chuyển hàng từ TQ'}
          />
          <form
              onSubmit={handleSubmit(onSubmit)}
          >
            <chakra.div mt={8}>
              <FormControl isInvalid={!!errors.name}>
                <Input
                    id="name"
                    placeholder="Họ và tên"
                    {...register('name')}
                />
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.email}>
                <Input
                    id="email"
                    mt={4}
                    type={'email'}
                    placeholder="Địa chỉ Email"
                    autoComplete="new-password"
                    {...register('email')}
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.email}>
                <Input
                    id="phone"
                    mt={4}
                    placeholder="Số điện thoại"
                    {...register('phone')}
                />
                <FormErrorMessage>
                  {errors.phone && errors.phone.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.address}>
                <Input
                    id="address"
                    mt={4}
                    placeholder="Địa chỉ"
                    {...register('address')}
                />
                <FormErrorMessage>
                  {errors.address && errors.address.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.content}>
                <Textarea
                    id={'content'}
                    mt={4}
                    rows={4}
                    placeholder="Nội dung"
                    {...register('content')}
                />
                <FormErrorMessage>
                  {errors.content && errors.content.message}
                </FormErrorMessage>
              </FormControl>
              <chakra.div textAlign={'center'}>
                <Button
                    my={8}
                    w={'150px'}
                    colorScheme="red"
                    isLoading={isSubmitting}
                    disabled={isSubmitSuccessful}
                    type="submit"
                >Gửi yêu cầu</Button>
              </chakra.div>
            </chakra.div>
          </form>
        </chakra.div>
      </Flex>
    </chakra.div>
  </chakra.div>
}