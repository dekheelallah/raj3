import { FeatureCard } from '../components/FeatureCard'
import { PrimaryButton } from '../components/PrimaryButton'
import { platformFeatures, userTypes } from '../lib/siteData'

export function HomePage() {
  return (
    <main>
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-6 pb-16 pt-28 text-center">
        <p className="mb-4 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
          راجع — داخل الكويت فقط
        </p>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
          اطلب توصيلك داخل الكويت بسهولة ووضوح
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
          منصة تربط العملاء بالمندوبين لتنفيذ طلبات التوصيل داخل الكويت، مع تجربة عربية
          احترافية قابلة للتوسع لاحقًا للدفع والتتبع والتطبيقات.
        </p>

        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          {userTypes.map((type, index) => (
            <PrimaryButton
              key={type.title}
              variant={index === 0 ? 'primary' : 'secondary'}
            >
              {type.action}
            </PrimaryButton>
          ))}
        </div>

        <div className="mt-10 grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {platformFeatures.map((feature) => (
            <FeatureCard key={feature} title={feature} />
          ))}
        </div>
      </section>
    </main>
  )
}