import { Menu, HeartHandshake } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Mission', href: '#mission' },
    { label: 'Donate', href: '#donate' },
    { label: 'Volunteer', href: '#volunteer' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-amber-200/30 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center gap-2">
              <div className="inline-flex items-center justify-center rounded-xl bg-amber-500/90 p-2 text-white shadow">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <span className="text-lg font-bold text-amber-900">Hope Foundation</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-amber-900/80 hover:text-amber-900 font-medium transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#donate" className="ml-2 inline-flex items-center rounded-full bg-amber-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-amber-700 transition-colors">
                Donate
              </a>
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-xl border border-amber-300/60 p-2 text-amber-900 hover:bg-amber-50"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle navigation"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-3 py-2 text-amber-900/90 hover:bg-amber-50"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#donate"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 font-semibold text-white bg-amber-600 hover:bg-amber-700"
                >
                  Donate
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
