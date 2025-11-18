export default function Volunteer() {
  return (
    <section id="volunteer" className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-amber-200 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop"
                alt="Volunteers packing donations"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-amber-900">Volunteer with us</h2>
            <p className="mt-3 text-amber-900/80">Join a warm, supportive community making a real difference. From weekend events to mentoring, there’s a role for every schedule and skill set.</p>

            <div className="mt-6 grid gap-3">
              {[
                'Food distribution and meal prep',
                'After-school tutoring and mentoring',
                'Community outreach and events',
                'Fundraising and partnerships',
              ].map((t) => (
                <div key={t} className="rounded-xl border border-amber-200 bg-white px-4 py-3">
                  <p className="text-amber-900">{t}</p>
                </div>
              ))}
            </div>

            <a href="#contact" className="mt-6 inline-flex items-center rounded-full bg-amber-600 px-5 py-3 text-white font-semibold shadow hover:bg-amber-700">
              Sign up to volunteer
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
