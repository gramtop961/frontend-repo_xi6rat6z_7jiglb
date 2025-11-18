export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-amber-900">About Us</h2>
            <p className="mt-4 text-amber-900/80">
              We are a community-driven charity dedicated to creating opportunities for children and families. Through nutrition, education, and empowerment programs, we aim to break cycles of poverty and build brighter futures.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-3xl font-extrabold text-amber-800">15+</p>
                <p className="text-sm text-amber-800/70">Years serving communities</p>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-3xl font-extrabold text-amber-800">25</p>
                <p className="text-sm text-amber-800/70">Active programs</p>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-3xl font-extrabold text-amber-800">300+</p>
                <p className="text-sm text-amber-800/70">Volunteers</p>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-3xl font-extrabold text-amber-800">40k</p>
                <p className="text-sm text-amber-800/70">Meals provided annually</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="aspect-square rounded-3xl overflow-hidden ring-1 ring-amber-200 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1573497161161-c3e73707e25b?q=80&w=1400&auto=format&fit=crop"
                alt="Team of diverse volunteers"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
