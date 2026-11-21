import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

const nav = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'Company' },
  { to: '/fees', label: 'Fees' },
  { to: '/contact', label: 'Contact' },
] as const

function navClass({ isActive }: { isActive: boolean }) {
  return [
    'text-xs font-medium tracking-label uppercase',
    isActive ? 'text-ink' : 'text-ink-soft hover:text-ink',
  ].join(' ')
}

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-paper text-ink">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 md:px-8">
          <Link to="/" className="shrink-0">
            <img
              src="/images/logo-word.png"
              alt="Novi"
              className="h-10 w-auto md:h-11"
            />
          </Link>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            {nav.map((item) => (
              <NavLink key={item.to} to={item.to} end={'end' in item ? item.end : false} className={navClass}>
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="bg-ink px-4 py-3 text-xs font-medium tracking-label text-paper uppercase hover:opacity-90"
            >
              Discuss a property
            </Link>
          </nav>

          <button
            type="button"
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 border border-line md:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="block h-px w-5 bg-ink" />
            <span className="block h-px w-5 bg-ink" />
            <span className="block h-px w-5 bg-ink" />
          </button>
        </div>

        {menuOpen ? (
          <nav
            className="border-t border-line px-5 py-4 md:hidden"
            aria-label="Mobile"
          >
            <ul className="flex flex-col gap-4">
              {nav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={'end' in item ? item.end : false}
                    className={navClass}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  className="inline-flex bg-ink px-4 py-3 text-xs font-medium tracking-label text-paper uppercase"
                >
                  Discuss a property
                </Link>
              </li>
            </ul>
          </nav>
        ) : null}
      </header>

      <main id="content">
        <Outlet />
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-12 md:px-8">
          <div className="md:col-span-5">
            <img
              src="/images/logo-word.png"
              alt="Novi"
              className="h-7 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm text-ink-soft">
              People · Property · Better tomorrow
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="text-xs font-medium tracking-label text-ink-soft uppercase">
              Visit
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={'end' in item ? item.end : false}
                    className={({ isActive }) =>
                      isActive ? 'hover:underline' : 'hover:underline'
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="text-xs font-medium tracking-label text-ink-soft uppercase">
              Reach us
            </p>
            <a className="mt-3 block hover:underline" href="tel:+64275026999">
              +64 275026999
            </a>
            <a
              className="mt-1 block hover:underline"
              href="mailto:hello@noviliving.co.nz"
            >
              hello@noviliving.co.nz
            </a>
            <a
              className="mt-1 block text-sm text-ink-soft hover:underline"
              href="https://noviliving.co.nz"
            >
              noviliving.co.nz
            </a>
          </div>
        </div>
        <div className="border-t border-line">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs tracking-label text-ink-soft uppercase md:flex-row md:justify-between md:px-8">
            <p>Novi Living</p>
            <p>Residential property management</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
