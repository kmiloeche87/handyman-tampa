import { trackCallClick, trackWhatsAppClick } from '../lib/analytics'

const cityLinks = ['Palm Harbor','Dunedin','Clearwater','Tarpon Springs','Safety Harbor','Largo','Oldsmar','St. Petersburg','Tampa','Lutz','Brandon','New Port Richey']
const serviceLinks = ['Drywall Repair Palm Harbor','Screen Repair Clearwater','Ceiling Fan Installation','Minor Plumbing Palm Harbor','Pressure Washing Clearwater','Interior Painting Dunedin','TV Mounting Palm Harbor','Fence Repair Tarpon Springs']
const cityPaths: Record<string,string> = {
  'Palm Harbor': '/palm-harbor',
  'Clearwater': '/clearwater',
  'Dunedin': '/dunedin',
  'Tarpon Springs': '/tarpon-springs',
  'Safety Harbor': '/safety-harbor',
}

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">T</span>
              </div>
              <span className="text-white font-black">Tampa Bay Handyman Pro</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">Professional handyman serving Palm Harbor and all of Tampa Bay. Bilingual. Licensed & Insured.</p>
            <div className="space-y-1">
              <p className="text-gray-500 text-xs">📍 2595 Tampa Rd Ste Q</p>
              <p className="text-gray-500 text-xs">Palm Harbor, FL 34684</p>
              <p className="text-gray-500 text-xs">📋 License #: HI12345678</p>
              <p className="text-gray-500 text-xs">🛡️ Fully Insured · $1M coverage</p>
              <p className="text-gray-500 text-xs">✅ Background checked</p>
            </div>
          </div>
          <div>
            <p className="text-white font-bold text-sm mb-4">Services</p>
            <ul className="space-y-2">
              {serviceLinks.map(s => (
                <li key={s}><a href="#services" className="text-gray-500 hover:text-orange-400 text-xs transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-white font-bold text-sm mb-4">Cities We Serve</p>
            <ul className="space-y-2">
              {cityLinks.map(c => (
                <li key={c}>
                  {cityPaths[c]
                    ? <a href={cityPaths[c]} className="text-gray-500 hover:text-orange-400 text-xs transition-colors">Handyman in {c}, FL</a>
                    : <a href="#service-area" className="text-gray-500 hover:text-orange-400 text-xs transition-colors">Handyman in {c}, FL</a>
                  }
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-white font-bold text-sm mb-4">Contact</p>
            <div className="space-y-3">
              <a href="tel:7276861410" onClick={() => trackCallClick('footer')} className="block text-orange-400 font-bold text-sm hover:text-orange-300 transition-colors">📞 (727) 686-1410</a>
              <a href="https://wa.me/17276861410" onClick={() => trackWhatsAppClick('footer')} className="block text-green-400 font-bold text-sm hover:text-green-300 transition-colors">💬 WhatsApp</a>
              <a href="mailto:info@tampabayhandymanpro.com" className="block text-gray-400 text-xs hover:text-white transition-colors">✉️ info@tampabayhandymanpro.com</a>
              <div className="pt-2">
                <p className="text-gray-500 text-xs">Mon – Fri: 7am – 7pm</p>
                <p className="text-gray-500 text-xs">Sat: 8am – 5pm</p>
              </div>
              <div className="flex gap-3 pt-2">
                {['Facebook','Nextdoor','Yelp','Google'].map(s => (
                  <a key={s} href="#" className="text-gray-600 hover:text-white text-[10px] font-bold transition-colors">{s}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">© 2025 Tampa Bay Handyman Pro LLC — All rights reserved</p>
          <p className="text-gray-700 text-xs">Palm Harbor, FL 34684 · Serving Pinellas & Hillsborough Counties</p>
        </div>
      </div>
    </footer>
  )
}
