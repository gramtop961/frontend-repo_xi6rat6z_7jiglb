import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    // In a real app, send to backend. Here we just simulate success
    setTimeout(() => setStatus('Thank you! We will be in touch soon.'), 800)
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-amber-900">Contact us</h2>
            <p className="mt-3 text-amber-900/80">Questions, partnerships, or want to get involved? We’d love to hear from you.</p>

            <div className="mt-6 space-y-3 text-amber-900/90">
              <p><span className="font-semibold">Email:</span> hello@hopefoundation.org</p>
              <p><span className="font-semibold">Phone:</span> (555) 123-4567</p>
              <p><span className="font-semibold">Address:</span> 123 Hope Street, Community City</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-3xl border border-amber-200 p-6 bg-amber-50/60">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-amber-800">First name</label>
                <input required className="mt-1 w-full rounded-xl border border-amber-300 bg-white px-3 py-2 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-amber-800">Last name</label>
                <input required className="mt-1 w-full rounded-xl border border-amber-300 bg-white px-3 py-2 outline-none" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-amber-800">Email</label>
                <input type="email" required className="mt-1 w-full rounded-xl border border-amber-300 bg-white px-3 py-2 outline-none" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-amber-800">Message</label>
                <textarea rows="4" required className="mt-1 w-full rounded-xl border border-amber-300 bg-white px-3 py-2 outline-none" />
              </div>
            </div>
            <button type="submit" className="mt-4 inline-flex items-center rounded-full bg-amber-600 px-5 py-3 text-white font-semibold shadow hover:bg-amber-700">
              Send message
            </button>
            {status && <p className="mt-3 text-amber-800/80">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
