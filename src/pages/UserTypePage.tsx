import { PrimaryButton } from '../components/PrimaryButton'
import { userTypes } from '../lib/siteData'

export function UserTypePage() {
  return (
    <main>
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 pb-16 pt-28">
        <div className="text-center">
          <p className="mb-4 text-sm font-semibold text-cyan-300">
            اختر نوع الحساب
          </p>

          <h1 className="text-3xl font-bold md:text-5xl">
            كيف تريد استخدام راجع؟
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            اختر هل تريد طلب خدمة توصيل كعميل، أو استقبال وتنفيذ الطلبات كمندوب داخل الكويت.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {userTypes.map((type, index) => (
            <article
              key={type.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl"
            >
              <h2 className="text-2xl font-bold">{type.title}</h2>

              <p className="mt-4 leading-8 text-slate-300">
                {type.description}
              </p>

              <div className="mt-6">
                <PrimaryButton variant={index === 0 ? 'primary' : 'secondary'}>
                  {type.action}
                </PrimaryButton>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}