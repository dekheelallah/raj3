import { useState } from 'react'
import { Alert } from '../components/Alert'
import { PrimaryButton } from '../components/PrimaryButton'
import { findStoredOrder } from '../lib/orderUtils'
import { orderStatusLabels } from '../lib/orderStatus'
import { isValidOrderNumber } from '../lib/validation'
import type { OrderStatus } from '../types/site'

export function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState('')
  const [status, setStatus] = useState<OrderStatus | null>(null)
  const [error, setError] = useState('')
  const [foundOrderInfo, setFoundOrderInfo] = useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!isValidOrderNumber(orderNumber)) {
      setStatus(null)
      setFoundOrderInfo('')
      setError('رقم الطلب يجب أن يكون بصيغة RJ-123456')
      return
    }

    const storedOrder = findStoredOrder(orderNumber.trim())

    if (!storedOrder) {
      setStatus(null)
      setFoundOrderInfo('')
      setError('لم يتم العثور على هذا الطلب في التخزين المؤقت لهذا المتصفح.')
      return
    }

    setError('')
    setStatus('pending')
    setFoundOrderInfo(
      `من ${storedOrder.pickupArea} إلى ${storedOrder.dropoffArea} — العملة ${storedOrder.currency}`,
    )
  }

  return (
    <main>
      <section className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center px-6 pb-16 pt-28">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
          <p className="mb-3 text-sm font-semibold text-cyan-300">
            تتبع الطلب
          </p>

          <h1 className="text-3xl font-bold">
            تابع حالة طلبك داخل الكويت
          </h1>

          <p className="mt-4 leading-8 text-slate-300">
            أدخل رقم طلب تم إنشاؤه من صفحة طلب التوصيل. البحث الآن يتم داخل التخزين المؤقت في هذا المتصفح فقط.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <label className="mb-2 block text-sm text-slate-300">
                رقم الطلب
              </label>

              <input
                type="text"
                value={orderNumber}
                onChange={(event) => setOrderNumber(event.target.value)}
                placeholder="مثال: RJ-123456"
                className={`w-full rounded-2xl border bg-slate-900 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 ${
                  error
                    ? 'border-red-400 focus:border-red-300'
                    : 'border-white/10 focus:border-cyan-300'
                }`}
              />

              {error && (
                <p className="mt-2 text-sm text-red-300">
                  {error}
                </p>
              )}
            </div>

            <div className="pt-2">
              <PrimaryButton>تتبع الطلب</PrimaryButton>
            </div>
          </form>

          <div className="mt-8">
            <Alert
              variant={status ? 'success' : 'info'}
              title={status ? orderStatusLabels[status] : 'بانتظار إدخال رقم طلب محفوظ'}
              description={
                foundOrderInfo ||
                'هذه ليست بيانات حقيقية من خادم بعد. لا نعتبر التتبع جاهزًا تجاريًا إلا بعد وجود قاعدة بيانات ونظام طلبات فعلي.'
              }
            />
          </div>
        </div>
      </section>
    </main>
  )
}