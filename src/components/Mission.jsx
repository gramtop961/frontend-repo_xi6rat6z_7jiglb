export default function Mission() {
  const items = [
    {
      title: 'Nourish',
      text: 'Provide nutritious meals and food security for vulnerable families.',
      icon: '🍎',
    },
    {
      title: 'Educate',
      text: 'Support learning through after‑school programs and scholarships.',
      icon: '📚',
    },
    {
      title: 'Empower',
      text: 'Develop skills and confidence with mentorship and training.',
      icon: '🤝',
    },
  ]

  return (
    <section id="mission" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-900">Our Mission</h2>
          <p className="mt-3 text-amber-900/80 max-w-2xl mx-auto">
            We exist to uplift communities with practical, compassionate programs that meet immediate needs and build long‑term resilience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="rounded-3xl border border-amber-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl">{item.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-amber-900">{item.title}</h3>
              <p className="mt-2 text-amber-900/80">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
