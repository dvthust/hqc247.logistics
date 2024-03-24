import Head from 'next/head';
import {NextPageWithLayout} from '@/pages/_app';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import React, {ReactElement} from 'react';
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useRouter} from 'next/router';
import {
  AlertDialog, AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent, AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  chakra,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Text,
  useDisclosure, useToast,
} from '@chakra-ui/react';

const schema = yup.object().shape({
  email: yup.string().
      required('Trường email không được để trống !').
      min(3, 'Trường email phải chứa ít nhất 3 ký tự !').
      max(255, 'Trường email không được lơn hơn 256 ký tự !'),
  password: yup.string().
      required('Trường mật khẩu không được để trống').
      min(6, 'Mật khẩu không được nhỏ hơn 6 ký tự !'),
});

const InactiveAccountPage: NextPageWithLayout = () => {
  const router = useRouter();
  const toast = useToast();
  const {isOpen, onOpen, onClose} = useDisclosure();
  const cancelRef: any = React.useRef();
  const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    onOpen();
  };

  const onClickSubmitDeleteAccount = () => {
    toast({
      title: 'Thành công',
      description: "Yêu cầu xoá tài khoản của bạn đã được ghi nhận.",
      status: 'success',
      duration: 5000,
      isClosable: true,
      position: 'top'
    });
    onClose();
    router.push('/');
  }

  return (
      <>
        <Head>
          <title>Xoá tài khoản</title>
        </Head>
        <div>
          <chakra.div
              maxW="1200px"
              mx="auto"
              overflow={'hidden'}
          >
            <chakra.div
                className={'login-container'}
                my={8}
                display={'flex'}
                justifyContent={'center'}
            >
              <chakra.div
                  maxW={'500px'}
                  w={'100%'}
                  bgColor={'white'}
                  boxShadow={'0 3px 5px 0 rgb(0 1 1 / 10%)'}
                  p={'40px 60px 20px'}
              >
                <Heading
                    textAlign={'center'}
                    as={'h3'}
                    fontWeight={'600'}
                    fontSize={'xl'}
                >
                  Xoá tài khoản
                </Heading>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                >
                  <chakra.div mt={8}>
                    <FormControl isInvalid={!!errors.email}>
                      <Input
                          id="email"
                          mt={2}
                          type={'email'}
                          placeholder="Địa chỉ Email"
                          autoComplete="new-password"
                          {...register('email')}
                      />
                      <FormErrorMessage>
                        {errors.email && errors.email.message}
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!errors.password}>
                      <Input
                          id={'password'}
                          mt={4}
                          type={'password'}
                          placeholder="Mật khẩu"
                          autoComplete="new-password"
                          {...register('password')}
                      />
                      <FormErrorMessage>
                        {errors.password && errors.password.message}
                      </FormErrorMessage>
                    </FormControl>
                    <Button
                        my={8}
                        w={'100%'}
                        colorScheme="red"
                        isLoading={isSubmitting}
                        type="submit"
                    >Xoá tài khoản</Button>
                  </chakra.div>
                </form>
              </chakra.div>
            </chakra.div>
          </chakra.div>
        </div>

        <AlertDialog
            motionPreset="slideInBottom"
            leastDestructiveRef={cancelRef}
            onClose={onClose}
            isOpen={isOpen}
            isCentered
        >
          <AlertDialogOverlay/>

          <AlertDialogContent>
            <AlertDialogHeader>Xoá tài khoản?</AlertDialogHeader>
            <AlertDialogCloseButton/>
            <AlertDialogBody>
              <Text>Bạn chắc chắn vẫn muốn xoá tài khoản này của mình?</Text>
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Huỷ
              </Button>
              <Button colorScheme="red" ml={3} onClick={onClickSubmitDeleteAccount}>
                Xác nhận
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>
  );
};

InactiveAccountPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default InactiveAccountPage;