import get from 'lodash/get'
import DeviceDetector from "ua-parser-js"

export const isDev = () => {
  return process.env.NODE_ENV === 'development'
}

export const isBrowser = () => typeof window !== "undefined"

export const isMobile = (userAgent = "") => {
  const device = DeviceDetector(userAgent)
  if (device.device.type && (device.device.type === "mobile" || device.device.type === "tablet")) {
    return true
  }

  return false
}

export const dataGet = (object: any, path: any, defaultValue = null) => {
  return get(object, path, defaultValue)
}

export const formatMoneyVn = (money: any) => {
  money = parseInt(money)
  return (money?.toLocaleString('vi-VN') || 0) + ' đ'
}

export const formatMoneyVnBefore = (money: any) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(money)
}

export const formatMoneyCn = (money: any) => {
  return new Intl.NumberFormat('zh-CN', {
    style: 'currency',
    currency: 'CNY'
  }).format(money)
}

export const utf8_to_b64 = (str: string) => {
  return window.btoa(unescape(encodeURIComponent( str )))
}

export const roundNumber = (num: any) => {
  const m = Number((Math.abs(num) * 100).toPrecision(15))
  return Math.round(m) / 100 * Math.sign(num)
}

export const containNumber = (str: string) => {
  return /^\d+$/.test(str)
}

export const b64_to_utf8 = (str: string) => {
  return decodeURIComponent(escape(window.atob( str )))
}

export const percentage = (x: any, y: any) => {
  return 100 / (y / x)
}
