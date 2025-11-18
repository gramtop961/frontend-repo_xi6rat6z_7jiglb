import { useState } from 'react'

export default function Donate() {
  const [amount, setAmount] = useState('50')

  const preset = ['25', '50', '100', '250']

  const onSubmit = (e) => {
    e.preventDefault()
    const url = `https://donate.stripe.com/test_${amount}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="donate" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-amber-900">Your gift changes lives</h2>
            <p className="mt-3 text-amber-900/80">Every contribution funds programs that deliver direct impact to families. Choose an amount to get started.</p>

            <form onSubmit={onSubmit} className="mt-6 rounded-3xl border border-amber-200 p-6 bg-amber-50/60">
              <div className="flex flex-wrap gap-2">
                {preset.map((p) => (
                  <button
                    type="button"
                    key={p}
                    onClick={() => setAmount(p)}
                    className={`rounded-full px-4 py-2 font-semibold border ${amount===p? 'bg-amber-600 text-white border-amber-600' : 'bg-white text-amber-900 border-amber-300 hover:bg-amber-100'}`}
                  >
                    ${p}
                  </button>
                ))}
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-amber-800">Custom amount</label>
                <div className="mt-1 flex items-center rounded-xl border border-amber-300 bg-white px-3">
                  <span className="text-amber-700 mr-1">$</span>
                  <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value.replace(/[^0-9]/g,''))}
                    inputMode="numeric"
                    className="w-full py-2 outline-none text-amber-900"
                    placeholder="50"
                    aria-label="Donation amount"
                  />
                </div>
              </div>

              <button type="submit" className="mt-5 inline-flex items-center rounded-full bg-amber-600 px-5 py-3 text-white font-semibold shadow hover:bg-amber-700">
                Donate securely
              </button>
              <p className="mt-2 text-xs text-amber-800/70">You will be redirected to our secure payment partner.</p>
            </form>
          </div>

          <div>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-amber-200 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop"
                alt="Child smiling while receiving school supplies"
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
