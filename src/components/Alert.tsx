type AlertProps = {
  title: string
  description: string
  variant?: 'success' | 'error' | 'info'
}

export function Alert({ title, description, variant = 'info' }: AlertProps) {
  const variantClasses = {
    success: 'border-cyan-300/30 bg-cyan-400/10 text-cyan-300',
    error: 'border-red-400/30 bg-red-400/10 text-red-300',
    info: 'border-white/10 bg-slate-900 text-slate-300',
  }

  return (
    <div className={`rounded-2xl border p-5 ${variantClasses[variant]}`}>
      <p className="text-sm font-semibold">
        {title}
      </p>

      <p className="mt-2 leading-8 text-slate-300">
        {description}
      </p>
    </div>
  )
}