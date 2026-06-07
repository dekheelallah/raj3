import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <main>
      <section className="mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center justify-center px-6 pb-16 pt-28 text-center">
        <p className="mb-4 text-sm font-semibold text-cyan-300">
          404
        </p>

        <h1 className="text-3xl font-bold md:text-5xl">
          الصفحة غير موجودة
        </h1>

        <p className="mt-5 max-w-xl leading-8 text-slate-300">
          الرابط الذي فتحته غير صحيح أو لم يتم إنشاء هذه الصفحة بعد.
        </p>

        <Link
          to="/"
          className="mt-8 rounded-2xl bg-cyan-400 px-6 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          العودة للرئيسية
        </Link>
      </section>
    </main>
  )
}