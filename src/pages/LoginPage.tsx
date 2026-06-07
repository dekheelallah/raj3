import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PhoneInput } from '../components/PhoneInput'
import { PrimaryButton } from '../components/PrimaryButton'
import { isKuwaitiPhoneNumber } from '../lib/validation'

export function LoginPage() {
  const [phone, setPhone] = useState('')
  const isPhoneInvalid = phone !== '' && !isKuwaitiPhoneNumber(phone)

  return (
    <main>
      <section className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center px-6 pb-16 pt-28">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
          <p className="mb-3 text-sm font-semibold text-cyan-300">
            تسجيل الدخول
          </p>

          <h1 className="text-3xl font-bold">
            دخول إلى حسابك في راجع
          </h1>

          <p className="mt-4 leading-8 text-slate-300">
            استخدم رقم هاتف كويتي يبدأ بـ +965. لاحقًا سنربط الدخول بقاعدة بيانات ونظام تحقق آمن.
          </p>

          <form className="mt-8 space-y-4">
            <PhoneInput
              label="رقم الهاتف الكويتي"
              value={phone}
              onChange={setPhone}
            />

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                كلمة المرور
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
              />
            </div>

            <div className="pt-2">
              <PrimaryButton disabled={isPhoneInvalid}>
                دخول
              </PrimaryButton>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-slate-300">
            ما عندك حساب؟{' '}
            <Link to="/register" className="font-semibold text-cyan-300 hover:text-cyan-200">
              أنشئ حساب جديد
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}