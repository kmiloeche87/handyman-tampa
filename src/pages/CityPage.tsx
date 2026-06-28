import { Phone, MessageSquare, CheckCircle, Star } from 'lucide-react'

interface CityPageProps {
  city: string
  county: string
  distance: string
  description: string
  neighborhoods: string[]
  services: string[]
  faqs: { q: string; a: string }[]
}

export default function CityPage({ city, county, distance, description, neighborhoods, services, faqs }: CityPageProps) {
  const whatsappMsg = encodeURIComponent(
    `Hi! I found you online and need handyman services in ${city}, FL.\n\nCan you help me with a free estimate?`
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-orange-400 text-sm font-bold uppercase tracking-widest mb-3">{county} · Tampa Bay Area</p>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            Trusted Handyman in<br /><span className="text-orange-400">{city}, FL</span>
          </h1>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl">{description}</p>
          <div className="flex flex-wrap gap-3 mb-8">
            {['Licensed & Insured', 'Background Checked', 'Bilingual', 'Free Estimate'].map(t => (
              <div key={t} className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1.5">
                <CheckCircle size={13} className="text-orange-400" />
                <span className="text-sm font-medium">{t}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:7276861410" className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-black px-6 py-3.5 rounded-xl transition-colors">
              <Phone size={16} /> Call (727) 686-1410
            </a>
            <a href={`https://wa.me/17276861410?text=${whatsappMsg}`} target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3.5 rounded-xl transition-colors">
              <MessageSquare size={16} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 mb-2">Our Services in {city}</h2>
          <p className="text-gray-500 mb-8">Same-day or next-day service available throughout {city} and surrounding areas.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map(s => (
              <div key={s} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                <CheckCircle size={18} className="text-orange-500 flex-shrink-0" />
                <span className="font-semibold text-gray-900 text-sm">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 mb-2">Areas We Serve in {city}</h2>
          <p className="text-gray-500 mb-6">We cover all neighborhoods and communities in and around {city}, FL.</p>
          <div className="flex flex-wrap gap-2">
            {neighborhoods.map(n => (
              <span key={n} className="bg-orange-50 text-orange-700 border border-orange-200 text-sm font-semibold px-3 py-1.5 rounded-full">{n}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="text-center">
              <p className="text-5xl font-black text-gray-900">4.9</p>
              <div className="flex justify-center my-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-orange-400 text-orange-400" />)}
              </div>
              <p className="text-gray-500 text-xs">214 reviews</p>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-black text-gray-900">Trusted by {city} Homeowners</h2>
              <p className="text-gray-500 text-sm mt-1">Rated 4.9/5 on Google · Nextdoor Favorite · Yelp 4.8</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Frequently Asked Questions — {city}</h2>
          <div className="space-y-4">
            {faqs.map(faq => (
              <div key={faq.q} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <p className="font-bold text-gray-900 mb-2">{faq.q}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-14 px-4 bg-gray-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-3">Ready to Get Started in {city}?</h2>
          <p className="text-gray-400 mb-6">Call us or send a WhatsApp — we respond in under 1 hour on business days.</p>
          <p className="text-4xl font-black text-orange-400 mb-6">(727) 686-1410</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:7276861410" className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-black px-8 py-4 rounded-xl transition-colors">
              <Phone size={18} /> Call Now
            </a>
            <a href={`https://wa.me/17276861410?text=${whatsappMsg}`} target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl transition-colors">
              <MessageSquare size={18} /> WhatsApp
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-4">Based in Palm Harbor, FL · Serving {city} and all of Tampa Bay</p>
        </div>
      </section>
    </div>
  )
}
