export function TermsPage() {
  return (
    <main>
      <section className="mx-auto min-h-screen w-full max-w-4xl px-6 pb-16 pt-28">
        <p className="mb-3 text-sm font-semibold text-cyan-300">
          الشروط والأحكام
        </p>

        <h1 className="text-3xl font-bold md:text-5xl">
          شروط استخدام منصة راجع
        </h1>

        <div className="mt-8 space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 leading-8 text-slate-300">
          <p>
            هذه صياغة أولية وليست مستندًا قانونيًا نهائيًا. قبل الإطلاق التجاري يجب مراجعة الشروط مع مختص قانوني داخل الكويت.
          </p>

          <section>
            <h2 className="mb-2 text-xl font-bold text-white">
              نطاق الخدمة
            </h2>
            <p>
              منصة راجع مخصصة مبدئيًا لتسهيل طلبات التوصيل داخل دولة الكويت فقط، بين العملاء والمندوبين.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-white">
              مسؤولية المستخدم
            </h2>
            <p>
              يلتزم المستخدم بإدخال بيانات صحيحة، وعدم استخدام المنصة لأي طلب مخالف للقوانين أو الأنظمة المعمول بها.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-white">
              مسؤولية المندوب
            </h2>
            <p>
              يلتزم المندوب بتنفيذ الطلبات المقبولة منه بأمانة، واحترام مواعيد التوصيل، والمحافظة على الطلبات أثناء النقل.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-white">
              الدفع والرسوم
            </h2>
            <p>
              جميع الأسعار والرسوم المستقبلية ستكون بالدينار الكويتي KWD، وسيتم توضيحها قبل تأكيد الطلب عند إضافة نظام الدفع.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-white">
              ملاحظة مهمة
            </h2>
            <p>
              المشروع الحالي لا يعتبر جاهزًا تجاريًا قبل إضافة تسجيل فعلي، قاعدة بيانات، نظام دفع، حماية، وسياسات نهائية.
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}