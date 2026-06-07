export function PrivacyPolicyPage() {
  return (
    <main>
      <section className="mx-auto min-h-screen w-full max-w-4xl px-6 pb-16 pt-28">
        <p className="mb-3 text-sm font-semibold text-cyan-300">
          سياسة الخصوصية
        </p>

        <h1 className="text-3xl font-bold md:text-5xl">
          سياسة الخصوصية لمنصة راجع
        </h1>

        <div className="mt-8 space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 leading-8 text-slate-300">
          <p>
            هذه صفحة أولية وليست صياغة قانونية نهائية. قبل الإطلاق التجاري يجب مراجعة السياسة قانونيًا وربطها بطريقة جمع البيانات الفعلية.
          </p>

          <section>
            <h2 className="mb-2 text-xl font-bold text-white">
              البيانات التي قد نجمعها
            </h2>
            <p>
              قد تشمل البيانات الاسم، رقم الهاتف الكويتي، نوع الحساب، تفاصيل الطلب، ومعلومات الدعم عند استخدام المنصة.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-white">
              استخدام البيانات
            </h2>
            <p>
              نستخدم البيانات لتقديم خدمات التوصيل، إدارة الطلبات، تحسين التجربة، والتواصل مع المستخدم عند الحاجة.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-white">
              الدفع والعمليات المالية
            </h2>
            <p>
              عند إضافة الدفع لاحقًا، سيتم التعامل مع المدفوعات عبر مزود دفع مرخص مثل Tap Payments أو MyFatoorah، ولا يجب تخزين بيانات البطاقات داخل المشروع مباشرة.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-white">
              ملاحظة مهمة
            </h2>
            <p>
              المشروع الحالي واجهة أولية فقط، ولا يعتبر جاهزًا تجاريًا قبل إضافة التسجيل الفعلي، قاعدة البيانات، الدفع، الأمان، وسياسات قانونية مكتملة.
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}