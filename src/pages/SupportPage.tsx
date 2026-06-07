import { PrimaryButton } from '../components/PrimaryButton'

export function SupportPage() {
  return (
    <main>
      <section className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center px-6 pb-16 pt-28">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
          <p className="mb-3 text-sm font-semibold text-cyan-300">
            الدعم
          </p>

          <h1 className="text-3xl font-bold">
            كيف نقدر نساعدك؟
          </h1>

          <p className="mt-4 leading-8 text-slate-300">
            هذه صفحة دعم أولية. لاحقًا نضيف تذاكر دعم، أسئلة شائعة، وربط مع البريد أو واتساب الأعمال.
          </p>

          <form className="mt-8 space-y-4">
            <div>
              <label className="mb-2 block text-sm text-slate-300">
                الاسم
              </label>
              <input
                type="text"
                placeholder="اكتب اسمك"
                className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                رقم الهاتف الكويتي
              </label>
              <input
                type="tel"
                placeholder="+965"
                className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                الرسالة
              </label>
              <textarea
                rows={5}
                placeholder="اكتب رسالتك..."
                className="w-full resize-none rounded-2xl border border-white/10 bg-slate-900 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
              />
            </div>

            <div className="pt-2">
              <PrimaryButton>إرسال</PrimaryButton>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}