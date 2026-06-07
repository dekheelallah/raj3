import type { OrderStatus } from '../types/site'

export const orderStatusLabels: Record<OrderStatus, string> = {
  pending: 'بانتظار قبول المندوب',
  accepted: 'تم قبول الطلب',
  picked_up: 'تم استلام الطلب',
  delivered: 'تم التوصيل',
  cancelled: 'تم إلغاء الطلب',
}