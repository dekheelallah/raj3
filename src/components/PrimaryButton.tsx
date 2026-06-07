type PrimaryButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

export function PrimaryButton({
  children,
  variant = 'primary',
  disabled = false,
}: PrimaryButtonProps) {
  const baseClasses =
    'rounded-2xl px-6 py-4 font-semibold transition focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-950'

  const variantClasses = {
    primary: 'bg-cyan-400 text-slate-950 hover:bg-cyan-300',
    secondary: 'border border-white/15 text-white hover:bg-white/10',
  }

  const disabledClasses = disabled
    ? 'cursor-not-allowed opacity-50 hover:bg-cyan-400'
    : ''

  return (
    <button
      type="submit"
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${disabledClasses}`}
    >
      {children}
    </button>
  )
}