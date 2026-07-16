import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import StarService from '../components/StarService'
import Services from '../components/Services'
import BeforeAfter from '../components/BeforeAfter'
import Reviews from '../components/Reviews'
import ContactForm from '../components/ContactForm'

interface CityPageProps {
  city: string
  county: string
  neighborhoods: string[]
  faqs: { q: string; a: string }[]
}

export default function CityPage({ city, county, neighborhoods, faqs }: CityPageProps) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* Exact same components as home */}
      <Hero city={city} />
      <HowItWorks />
      <StarService />
      <Services city={city} />
      <BeforeAfter />
      <Reviews city={city} />

      {/* City-specific section: neighborhoods + FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-2">{county}</p>
              <h2 className="text-3xl font-black text-gray-900 mb-4">Areas We Cover in {city}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We serve all neighborhoods in and around {city}, FL — same-day availability for most areas within 40 miles of our Palm Harbor base.
              </p>
              <div className="flex flex-wrap gap-2">
                {neighborhoods.map(n => (
                  <span key={n} className="bg-orange-50 text-orange-700 border border-orange-200 text-sm font-semibold px-3 py-1.5 rounded-full">{n}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-2">FAQ</p>
              <h2 className="text-3xl font-black text-gray-900 mb-6">Questions about {city}</h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <details key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden group">
                    <summary className="px-5 py-4 font-bold text-gray-900 text-sm cursor-pointer list-none flex items-center justify-between hover:bg-gray-50">
                      {faq.q}
                      <span className="text-orange-500 font-bold text-lg ml-4 flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-4 bg-gray-50">
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  )
}
