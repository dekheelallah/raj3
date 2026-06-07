export function ProjectStatusPage() {
  return (
    <main>
      <section className="mx-auto min-h-screen w-full max-w-4xl px-6 pb-16 pt-28">
        <p className="mb-3 text-sm font-semibold text-cyan-300">
          حالة المشروع
        </p>

        <h1 className="text-3xl font-bold md:text-5xl">
          راجع — نسخة أولية قابلة للتطوير
        </h1>

        <div className="mt-8 space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 leading-8 text-slate-300">
          <section>
            <h2 className="mb-2 text-xl font-bold text-white">
              ما تم إنجازه
            </h2>
            <p>
              تم إنشاء موقع React + Vite + TypeScript + Tailwind CSS مع دعم العربية RTL،
              وصفحات أساسية، تحقق من أرقام الكويت، طلب توصيل، وتتبع تجريبي باستخدام التخزين المؤقت.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-white">
              ما لم يتم إنجازه بعد
            </h2>
            <p>
              لا توجد قاعدة بيانات حقيقية، لا يوجد تسجيل دخول فعلي، لا يوجد دفع إلكتروني،
              لا توجد لوحة إدارة، ولا توجد حماية إنتاجية أو ربط API.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-white">
              ملاحظة مهمة
            </h2>
            <p>
              التخزين الحالي داخل localStorage مناسب للاختبار فقط. لا تعتمد عليه لحفظ طلبات حقيقية
              أو بيانات عملاء أو مدفوعات.
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}