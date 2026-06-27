const cityLinks = ['Tampa','South Tampa','Brandon','Riverview','St. Petersburg','Clearwater','Wesley Chapel','Lutz',"Land O' Lakes",'Temple Terrace']
const serviceLinks = ['Drywall Repair Tampa','Screen Repair Tampa','Ceiling Fan Installation','Minor Plumbing Tampa','Pressure Washing Tampa','Interior Painting Tampa','TV Mounting Tampa','Fence Repair Tampa']

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
              <span className="text-white font-black">Tampa Fix Pro</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">Professional handyman serving Tampa Bay since 2009. Bilingual. Licensed & Insured.</p>
            <div className="space-y-1">
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
                <li key={c}><a href="#service-area" className="text-gray-500 hover:text-orange-400 text-xs transition-colors">Handyman in {c}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-white font-bold text-sm mb-4">Contact</p>
            <div className="space-y-3">
              <a href="tel:7276861410" className="block text-orange-400 font-bold text-sm hover:text-orange-300 transition-colors">📞 (727) 686-1410</a>
              <a href="https://wa.me/17276861410" className="block text-green-400 font-bold text-sm hover:text-green-300 transition-colors">💬 WhatsApp</a>
              <a href="mailto:info@tampafixpro.com" className="block text-gray-400 text-xs hover:text-white transition-colors">✉️ info@tampafixpro.com</a>
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
          <p className="text-gray-600 text-xs">© 2025 Tampa Fix Pro LLC — All rights reserved</p>
          <p className="text-gray-700 text-xs">Serving the Greater Tampa Bay Area · Hillsborough & Pinellas Counties</p>
        </div>
      </div>
    </footer>
  )
}
