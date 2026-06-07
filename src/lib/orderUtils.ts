import type { DeliveryRequest } from '../types/site'

export type StoredOrder = DeliveryRequest & {
  orderNumber: string
  createdAt: string
}

const ORDERS_STORAGE_KEY = 'raj3_orders'

export function generateOrderNumber() {
  const randomNumber = Math.floor(100000 + Math.random() * 900000)

  return `RJ-${randomNumber}`
}

export function saveOrder(order: StoredOrder) {
  const existingOrders = getStoredOrders()

  localStorage.setItem(
    ORDERS_STORAGE_KEY,
    JSON.stringify([...existingOrders, order]),
  )
}

export function getStoredOrders(): StoredOrder[] {
  const storedOrders = localStorage.getItem(ORDERS_STORAGE_KEY)

  if (!storedOrders) {
    return []
  }

  return JSON.parse(storedOrders) as StoredOrder[]
}

export function findStoredOrder(orderNumber: string) {
  return getStoredOrders().find((order) => order.orderNumber === orderNumber)
}