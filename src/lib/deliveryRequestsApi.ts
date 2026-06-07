import { generateOrderNumber } from './orderUtils'
import { supabase } from './supabaseClient'
import type { DeliveryRequest } from '../types/site'

export async function createDeliveryRequest(deliveryRequest: DeliveryRequest) {
  const orderNumber = generateOrderNumber()

  const { data, error } = await supabase
    .from('delivery_requests')
    .insert({
      order_number: orderNumber,
      pickup_area: deliveryRequest.pickupArea,
      dropoff_area: deliveryRequest.dropoffArea,
      details: deliveryRequest.details,
      receiver_phone: deliveryRequest.receiverPhone,
      currency: deliveryRequest.currency,
      status: 'pending',
    })
    .select()
    .single()

  if (error) {
    throw error
  }

  return data
}

export async function findDeliveryRequestByOrderNumber(orderNumber: string) {
  const { data, error } = await supabase
    .from('delivery_requests')
    .select('*')
    .eq('order_number', orderNumber)
    .single()

  if (error) {
    throw error
  }

  return data
}