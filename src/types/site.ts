export type UserType = {
  title: string
  description: string
  action: string
}

export type DeliveryRequest = {
  pickupArea: string
  dropoffArea: string
  details: string
  receiverPhone: string
  currency: 'KWD'
}

export type OrderStatus =
  | 'pending'
  | 'accepted'
  | 'picked_up'
  | 'delivered'
  | 'cancelled'