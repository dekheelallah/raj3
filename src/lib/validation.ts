import { appConfig } from './config'

export function isKuwaitiPhoneNumber(phone: string) {
  const cleanedPhone = phone.trim()
  const phonePattern = new RegExp(
    `^\\${appConfig.phonePrefix}\\d{${appConfig.phoneDigits}}$`,
  )

  return phonePattern.test(cleanedPhone)
}

export function isValidOrderNumber(orderNumber: string) {
  return /^RJ-\d{6}$/.test(orderNumber.trim())
}