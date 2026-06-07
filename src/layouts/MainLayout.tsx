import { Link, Outlet } from 'react-router-dom'
import { navigationLinks } from '../lib/siteData'

export function MainLayout() {
  const visibleLinks = navigationLinks.slice(0, 4)
  const footerLinks = navigationLinks.slice(4)

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          <Link to="/" className="text-xl font-bold text-white">
            راجع
          </Link>

          <nav className="hidden items-center gap-5 text-sm text-slate-300 lg:flex">
            {visibleLinks.map((link) => (
              <Link key={link.href} to={link.href} className="transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/register"
              className="hidden rounded-xl border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 sm:inline-flex"
            >
              إنشاء حساب
            </Link>

            <Link
              to="/login"
              className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              دخول
            </Link>
          </div>
        </div>
      </header>

      <Outlet />

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 راجع. منصة توصيل داخل الكويت.</p>

          <nav className="flex flex-wrap gap-4">
            {footerLinks.map((link) => (
              <Link key={link.href} to={link.href} className="transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  )
}