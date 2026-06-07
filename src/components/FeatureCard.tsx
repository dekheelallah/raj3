type FeatureCardProps = {
  title: string
}

export function FeatureCard({ title }: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
      {title}
    </div>
  )
}