export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-orange-50 to-white"></div>
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-amber-200 blur-3xl opacity-40"></div>
        <div className="absolute top-40 -left-20 h-64 w-64 rounded-full bg-orange-200 blur-3xl opacity-40"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-amber-900">
              A kinder world starts with small acts of hope
            </h1>
            <p className="mt-5 text-lg text-amber-900/80">
              Your support helps us provide food, education, and community programs for families in need.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#donate" className="inline-flex items-center rounded-full bg-amber-600 px-5 py-3 text-white font-semibold shadow hover:bg-amber-700 transition-colors">
                Donate Now
              </a>
              <a href="#volunteer" className="inline-flex items-center rounded-full border border-amber-300 px-5 py-3 text-amber-900 font-semibold hover:bg-amber-50 transition-colors">
                Become a Volunteer
              </a>
            </div>
            <p className="mt-4 text-sm text-amber-800/70">
              100% of donations fund programs. Admin costs covered by sponsors.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl bg-white shadow-lg ring-1 ring-amber-200 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1400&auto=format&fit=crop"
                alt="Smiling volunteers helping at a community event"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white/90 px-4 py-3 shadow ring-1 ring-amber-200">
              <p className="text-sm font-semibold text-amber-900">Over 10,000 lives impacted</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
