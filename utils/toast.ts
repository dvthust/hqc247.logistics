import { createStandaloneToast } from "@chakra-ui/react"

const toast: any = createStandaloneToast()
const defaultOptions = {
  title: '',
  position: 'top',
  variant: 'left-accent',
  duration: 5000,
  isClosable: true,
  status: 'success'
}

export const showToast = (options: any) => {
  toast({...defaultOptions, ...options})
}

export const showToastSuccess = (options: any) => {
  showToast({...options, status: 'success'})
}

export const showToastWarning = (options: any) => {
  showToast({...options, status: 'warning'})
}

export const showToastError = (options: any) => {
  showToast({...options, status: 'error'})
}

export const showToastInfo = (options: any) => {
  showToast({...options, status: 'info'})
}

export const showToastUpdateSuccess = (options: any) => {
  showToast({...options, status: 'success', description: 'Dữ liệu đã được cập nhật !'})
}