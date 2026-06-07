import { useState } from 'react'
import { Alert } from '../components/Alert'
import { PhoneInput } from '../components/PhoneInput'
import { PrimaryButton } from '../components/PrimaryButton'
import { appConfig } from '../lib/config'
import { createDeliveryRequest } from '../lib/deliveryRequestsApi'
import { kuwaitAreas } from '../lib/kuwaitAreas'
import { isKuwaitiPhoneNumber } from '../lib/validation'
import type { DeliveryRequest } from '../types/site'

export function DeliveryRequestPage() {
  const [createdOrderNumber, setCreatedOrderNumber] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [deliveryRequest, setDeliveryRequest] = useState<DeliveryRequest>({
    pickupArea: '',
    dropoffArea: '',
    details: '',
    receiverPhone: '',
    currency: appConfig.currency,
  })

  const isReceiverPhoneInvalid =
    deliveryRequest.receiverPhone !== '' &&
    !isKuwaitiPhoneNumber(deliveryRequest.receiverPhone)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (
      deliveryRequest.pickupArea === '' ||
      deliveryRequest.dropoffArea === '' ||
      deliveryRequest.details.trim() === '' ||
      deliveryRequest.receiverPhone.trim() === ''
    ) {
      setCreatedOrderNumber('')
      setErrorMessage('أكمل بيانات الطلب قبل الإرسال.')
      return
    }

    if (!isKuwaitiPhoneNumber(deliveryRequest.receiverPhone)) {
      setCreatedOrderNumber('')
      setErrorMessage('رقم هاتف المستلم غير صحيح.')
      return
    }

    try {
      setIsSubmitting(true)
      setErrorMessage('')

      const createdOrder = await createDeliveryRequest(deliveryRequest)

      setCreatedOrderNumber(createdOrder.order_number)
    } catch {
      setCreatedOrderNumber('')
      setErrorMessage('تعذر حفظ الطلب في قاعدة البيانات. تأكد من إعدادات Supabase.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main>
      <section className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center px-6 pb-16 pt-28">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
          <p className="mb-3 text-sm font-semibold text-cyan-300">
            طلب توصيل
          </p>

          <h1 className="text-3xl font-bold">
            أنشئ طلب توصيل داخل {appConfig.country}
          </h1>

          <p className="mt-4 leading-8 text-slate-300">
            اختر مناطق الاستلام والتسليم من قائمة مناطق {appConfig.country} فقط.
            رقم هاتف المستلم يجب أن يكون كويتيًا ويبدأ بـ {appConfig.phonePrefix}.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-slate-300">
                منطقة الاستلام
              </label>

              <select
                value={deliveryRequest.pickupArea}
                onChange={(event) =>
                  setDeliveryRequest({
                    ...deliveryRequest,
                    pickupArea: event.target.value,
                  })
                }
                className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-4 text-white outline-none transition focus:border-cyan-300"
              >
                <option value="">اختر منطقة الاستلام</option>
                {kuwaitAreas.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                منطقة التسليم
              </label>

              <select
                value={deliveryRequest.dropoffArea}
                onChange={(event) =>
                  setDeliveryRequest({
                    ...deliveryRequest,
                    dropoffArea: event.target.value,
                  })
                }
                className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-4 text-white outline-none transition focus:border-cyan-300"
              >
                <option value="">اختر منطقة التسليم</option>
                {kuwaitAreas.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm text-slate-300">
                تفاصيل الطلب
              </label>

              <textarea
                rows={5}
                value={deliveryRequest.details}
                onChange={(event) =>
                  setDeliveryRequest({
                    ...deliveryRequest,
                    details: event.target.value,
                  })
                }
                placeholder="اكتب تفاصيل التوصيل..."
                className="w-full resize-none rounded-2xl border border-white/10 bg-slate-900 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
              />
            </div>

            <PhoneInput
              label="رقم هاتف المستلم"
              value={deliveryRequest.receiverPhone}
              onChange={(value) =>
                setDeliveryRequest({
                  ...deliveryRequest,
                  receiverPhone: value,
                })
              }
            />

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                العملة
              </label>

              <input
                type="text"
                value={deliveryRequest.currency}
                readOnly
                className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-4 text-slate-400 outline-none"
              />
            </div>

            <div className="pt-2 md:col-span-2">
              <PrimaryButton disabled={isReceiverPhoneInvalid || isSubmitting}>
                {isSubmitting ? 'جاري إرسال الطلب...' : 'إرسال الطلب'}
              </PrimaryButton>
            </div>
          </form>

          {errorMessage && (
            <div className="mt-6">
              <Alert
                variant="error"
                title="تعذر إرسال الطلب"
                description={errorMessage}
              />
            </div>
          )}

          {createdOrderNumber && (
            <div className="mt-6">
              <Alert
                variant="success"
                title={`تم إنشاء وحفظ الطلب: ${createdOrderNumber}`}
                description="تم حفظ الطلب الآن في Supabase. هذه خطوة أقرب للنظام الحقيقي، لكنها لا تزال بدون تسجيل دخول أو صلاحيات نهائية."
              />
            </div>
          )}
        </div>
      </section>
    </main>
  )
}