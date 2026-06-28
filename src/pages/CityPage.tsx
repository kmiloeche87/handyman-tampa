import { useState } from 'react'
import { Phone, MessageSquare, CheckCircle, Star, Shield, Clock, ArrowRight } from 'lucide-react'

interface CityPageProps {
  city: string
  county: string
  distance: string
  description: string
  neighborhoods: string[]
  services: { name: string; price: string; desc: string; img: string }[]
  faqs: { q: string; a: string }[]
}

const reviews = [
  { name: 'Robert T.', stars: 5, text: 'Showed up on time, fair price, and finished when promised. Highly recommend.', service: 'Drywall Repair' },
  { name: 'Ana P.', stars: 5, text: 'Fixed two ceiling fans and a leaking faucet in 2 hours. Charged exactly what was quoted.', service: 'Electrical + Plumbing' },
  { name: 'James M.', stars: 5, text: 'Incredible pressure washing job. Driveway looks brand new. Hiring again.', service: 'Pressure Washing' },
  { name: 'Maria S.', stars: 5, text: 'Professional, bilingual, and honest. Found my go-to handyman for good.', service: 'Screen Repair' },
]

export default function CityPage({ city, county, distance, description, neighborhoods, services, faqs }: CityPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const whatsappMsg = encodeURIComponent(
    `Hi! I need handyman services in ${city}, FL.\n\nCan you help me with a free estimate?`
  )

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO — same dark style as main ── */}
      <section className="bg-gray-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)', backgroundSize: '18px 18px' }} />
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Rating badge */}
              <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 rounded-full px-4 py-1.5 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} size={13} className="fill-orange-400 text-orange-400" />)}
                </div>
                <span className="text-orange-300 text-sm font-semibold">4.9/5 · 214 Google reviews</span>
              </div>

              <p className="text-orange-400 font-bold text-sm uppercase tracking-widest mb-3">{county} · Tampa Bay Area</p>
              <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
                Trusted Handyman<br />
                in <span className="text-orange-400">{city}, FL</span>
              </h1>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">{description}</p>

              {/* Trust pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  { icon: Shield, text: 'Licensed & Insured' },
                  { icon: CheckCircle, text: 'Background Checked' },
                  { icon: CheckCircle, text: 'Bilingual' },
                  { icon: Clock, text: distance },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-1.5 bg-white/10 border border-white/10 rounded-full px-3 py-1.5">
                    <Icon size={12} className="text-orange-400" />
                    <span className="text-sm font-medium text-gray-200">{text}</span>
                  </div>
                ))}
              </div>

              {/* Offer */}
              <div className="bg-orange-500/15 border border-orange-500/30 rounded-xl px-4 py-3 mb-7 inline-block">
                <p className="text-orange-300 text-sm font-semibold">🎯 Free estimate in {city} — guaranteed within 24 hours</p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:7276861410"
                  className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-colors">
                  <Phone size={15} /> Call (727) 686-1410
                </a>
                <a href={`https://wa.me/17276861410?text=${whatsappMsg}`} target="_blank" rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-colors">
                  <MessageSquare size={15} /> WhatsApp
                </a>
              </div>
            </div>

            {/* Right: floating review card + stats */}
            <div className="relative hidden md:block">
              <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700">
                <div className="h-56 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="text-7xl mb-2">🔧</div>
                    <p className="text-gray-400 text-sm">Serving {city}, FL</p>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white text-gray-900 rounded-xl px-4 py-2.5 shadow-lg">
                    <p className="font-black text-xl leading-none text-orange-500">{distance}</p>
                    <p className="text-xs text-gray-600 font-medium">from our base</p>
                  </div>
                </div>
                <div className="p-4 bg-gray-800">
                  <p className="font-bold text-white">Tampa Bay Handyman Pro</p>
                  <p className="text-gray-400 text-sm">Palm Harbor, FL · Licensed Contractor · Bilingual</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-2xl px-4 py-3 max-w-[200px]">
                <div className="flex mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={11} className="fill-orange-400 text-orange-400" />)}
                </div>
                <p className="text-gray-800 text-xs font-medium leading-snug">"On time, fair price, and great quality work in {city}."</p>
                <p className="text-gray-500 text-[11px] mt-1">— Local homeowner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID — same as main ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-2">{city}, FL</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Our Services in {city}</h2>
            <p className="text-gray-500 mt-3 max-w-lg mx-auto">Same-day or next-day service. Transparent pricing — no hidden fees.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map(s => (
              <div key={s.name} className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all group">
                <div className="h-40 overflow-hidden">
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="font-bold text-gray-900 text-sm leading-snug">{s.name}</h3>
                    <span className="text-orange-500 font-black text-xs whitespace-nowrap bg-orange-50 px-2 py-0.5 rounded-full">{s.price}</span>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-orange-50 border border-orange-200 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-gray-900">Don't see what you need?</p>
              <p className="text-gray-600 text-sm">We do much more in {city} — call us and we'll let you know if we can help.</p>
            </div>
            <a href="tel:7276861410" className="flex-shrink-0 bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors">
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ── NEIGHBORHOODS ── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-2">Coverage</p>
              <h2 className="text-3xl font-black text-gray-900 mb-4">Areas We Serve in {city}</h2>
              <p className="text-gray-600 mb-6">We cover all neighborhoods and communities in and around {city}, FL — same-day availability for most areas.</p>
              <div className="flex flex-wrap gap-2">
                {neighborhoods.map(n => (
                  <span key={n} className="bg-orange-50 text-orange-700 border border-orange-200 text-sm font-semibold px-3 py-1.5 rounded-full">{n}</span>
                ))}
              </div>
            </div>
            <div className="bg-gray-950 rounded-2xl p-8 text-white">
              <p className="text-orange-400 font-bold text-sm uppercase tracking-widest mb-4">Response time</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white/5 rounded-xl p-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center font-black text-white">1h</div>
                  <div>
                    <p className="font-bold text-white">Response within 1 hour</p>
                    <p className="text-gray-400 text-sm">Mon–Fri 7am–7pm, Sat 8am–5pm</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/5 rounded-xl p-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center font-black text-white text-xs">SAME</div>
                  <div>
                    <p className="font-bold text-white">Same or next-day service</p>
                    <p className="text-gray-400 text-sm">Available throughout {city}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/5 rounded-xl p-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center font-black text-white text-xs">FREE</div>
                  <div>
                    <p className="font-bold text-white">Free estimate</p>
                    <p className="text-gray-400 text-sm">No obligation, no hidden fees</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS — same style as main ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-2">What They Say</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Trusted in {city} & Tampa Bay</h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <p className="text-4xl font-black text-gray-900">4.9</p>
                <div className="flex justify-center">
                  {[...Array(5)].map((_, i) => <Star key={i} size={13} className="fill-orange-400 text-orange-400" />)}
                </div>
                <p className="text-gray-500 text-xs">214 reviews</p>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {reviews.map(r => (
              <div key={r.name} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center font-bold text-orange-600 text-sm">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{r.name}</p>
                    <p className="text-gray-400 text-xs">📍 {city}, FL</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(r.stars)].map((_, i) => <Star key={i} size={13} className="fill-orange-400 text-orange-400" />)}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">"{r.text}"</p>
                <span className="text-xs bg-gray-100 text-gray-600 font-medium px-2.5 py-1 rounded-full">{r.service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-2">FAQ</p>
            <h2 className="text-3xl font-black text-gray-900">Questions about {city}</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-bold text-gray-900 text-sm">{faq.q}</span>
                  <span className="text-orange-500 font-bold text-lg flex-shrink-0">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 bg-gray-50">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL — dark like main ── */}
      <section className="py-16 bg-gray-950 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-orange-400 font-bold text-sm uppercase tracking-widest mb-3">Get Started Today</p>
          <h2 className="text-3xl md:text-4xl font-black mb-4">Ready for Service in {city}?</h2>
          <p className="text-gray-400 mb-6">Call or WhatsApp — we respond in under 1 hour on business days. Free estimate, no obligation.</p>
          <p className="text-4xl font-black text-orange-400 mb-8">(727) 686-1410</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:7276861410"
              className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-black px-8 py-4 rounded-xl transition-colors">
              <Phone size={18} /> Call Now
            </a>
            <a href={`https://wa.me/17276861410?text=${whatsappMsg}`} target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl transition-colors">
              <MessageSquare size={18} /> WhatsApp
            </a>
            <a href="/"
              className="flex items-center justify-center gap-2 border border-gray-700 hover:border-orange-500 text-gray-400 hover:text-white font-bold px-8 py-4 rounded-xl transition-colors">
              All Services <ArrowRight size={16} />
            </a>
          </div>
          <p className="text-gray-600 text-sm mt-6">Based in Palm Harbor, FL · {distance} from {city} · Serving all of Tampa Bay</p>
        </div>
      </section>

    </div>
  )
}
