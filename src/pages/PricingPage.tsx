import { PrimaryButton } from '../components/PrimaryButton'

export function PricingPage() {
  return (
    <main>
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 pb-16 pt-28">
        <div className="text-center">
          <p className="mb-4 text-sm font-semibold text-cyan-300">
            الأسعار والاشتراكات
          </p>

          <h1 className="text-3xl font-bold md:text-5xl">
            تسعير مبدئي بالدينار الكويتي KWD
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            هذه الصفحة واجهة أولية فقط. الأسعار النهائية تحتاج دراسة تشغيلية فعلية داخل الكويت، وربط لاحق مع الدفع والتقارير.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold text-cyan-300">
              عميل
            </p>

            <h2 className="mt-3 text-2xl font-bold">
              حسب الطلب
            </h2>

            <p className="mt-4 text-4xl font-bold">
              KWD
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              تكلفة التوصيل تُحسب لاحقًا حسب المنطقة والمسافة ونوع الطلب.
            </p>

            <div className="mt-6">
              <PrimaryButton>اطلب توصيل</PrimaryButton>
            </div>
          </article>

          <article className="rounded-3xl border border-cyan-300/40 bg-cyan-400/10 p-6">
            <p className="text-sm font-semibold text-cyan-300">
              مندوب
            </p>

            <h2 className="mt-3 text-2xl font-bold">
              حساب مندوب
            </h2>

            <p className="mt-4 text-4xl font-bold">
              لاحقًا
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              نحدد لاحقًا هل يكون التسجيل مجانيًا أو باشتراك شهري أو عمولة على الطلبات.
            </p>

            <div className="mt-6">
              <PrimaryButton variant="secondary">سجّل كمندوب</PrimaryButton>
            </div>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold text-cyan-300">
              شركات
            </p>

            <h2 className="mt-3 text-2xl font-bold">
              حلول مخصصة
            </h2>

            <p className="mt-4 text-4xl font-bold">
              KWD
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              للشركات والمتاجر التي تحتاج طلبات توصيل متكررة داخل الكويت.
            </p>

            <div className="mt-6">
              <PrimaryButton variant="secondary">تواصل معنا</PrimaryButton>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}