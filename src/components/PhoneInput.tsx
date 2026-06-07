import { appConfig } from '../lib/config'
import { isKuwaitiPhoneNumber } from '../lib/validation'

type PhoneInputProps = {
  label: string
  value: string
  onChange: (value: string) => void
}

export function PhoneInput({ label, value, onChange }: PhoneInputProps) {
  const isPhoneValid = value === '' || isKuwaitiPhoneNumber(value)

  return (
    <div>
      <label className="mb-2 block text-sm text-slate-300">
        {label}
      </label>

      <input
        type="tel"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={`${appConfig.phonePrefix}XXXXXXXX`}
        className={`w-full rounded-2xl border bg-slate-900 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 ${
          isPhoneValid
            ? 'border-white/10 focus:border-cyan-300'
            : 'border-red-400 focus:border-red-300'
        }`}
      />

      {!isPhoneValid && (
        <p className="mt-2 text-sm text-red-300">
          رقم الهاتف يجب أن يبدأ بـ {appConfig.phonePrefix} وبعده {appConfig.phoneDigits} أرقام.
        </p>
      )}
    </div>
  )
}