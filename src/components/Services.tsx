const services = [
  { img: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DrYCfsHjjiGVhlyTMhB1enKXnz/hf_20260627_052402_c50125cf-cab5-4fdd-87ee-12d241df84ad.png', name: 'Drywall Repair', price: 'from $75', desc: 'Holes, cracks, and water damage. Texture matching and touch-up paint included.' },
  { img: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DrYCfsHjjiGVhlyTMhB1enKXnz/hf_20260627_052405_0253344a-9a65-4f72-93fa-304190faad4e.png', name: 'Screen Repair', price: 'from $65', desc: 'Pool cages, windows, and doors — mesh repair or full replacement.' },
  { img: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DrYCfsHjjiGVhlyTMhB1enKXnz/hf_20260627_052409_e9c27d9d-00ad-408e-83e0-41386ddc703e.png', name: 'Electrical (Minor)', price: 'from $75', desc: 'Ceiling fans, light fixtures, outlets, and switches.' },
  { img: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DrYCfsHjjiGVhlyTMhB1enKXnz/hf_20260627_052413_1be78cde-0dad-4825-ad00-45f98e48a53b.png', name: 'TV Mounting', price: 'from $89', desc: 'Wall mount installation with full cable concealment included.' },
  { img: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DrYCfsHjjiGVhlyTMhB1enKXnz/hf_20260627_052417_bd29b9f8-4160-4785-9e04-3d5f743e12ae.png', name: 'Interior / Exterior Painting', price: 'from $150', desc: 'Rooms, walls, trim, doors, and home exterior.' },
  { img: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DrYCfsHjjiGVhlyTMhB1enKXnz/hf_20260627_052422_b54ff7d9-6419-4d48-9a24-7b78b92c5c39.png', name: 'Pressure Washing', price: 'from $120', desc: 'Driveways, patios, exterior siding, pool decks, and fences.' },
  { img: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DrYCfsHjjiGVhlyTMhB1enKXnz/hf_20260627_052425_89068956-9672-4d15-af65-7d645982011f.png', name: 'Fence Repair', price: 'from $95', desc: 'Repair and replacement of wood, vinyl, and aluminum fences.' },
  { img: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DrYCfsHjjiGVhlyTMhB1enKXnz/hf_20260627_052428_67734eca-2d73-4921-a35c-7c8c70c879ec.png', name: 'Minor Plumbing', price: 'from $75', desc: 'Faucets, toilets, garbage disposal, and leaking pipes.' },
]

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-2">Tampa Bay Area</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">All Our Services</h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto">Transparent pricing from the start. No separate diagnostic visit fee.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map(s => (
            <div key={s.name} className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all group cursor-default">
              <div className="h-40 overflow-hidden">
                <img src={s.img} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h3 className="font-bold text-gray-900 text-sm leading-snug">{s.name}</h3>
                  <span className="text-orange-500 font-black text-xs whitespace-nowrap flex-shrink-0 mt-0.5 bg-orange-50 px-2 py-0.5 rounded-full">{s.price}</span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 bg-orange-50 border border-orange-200 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-gray-900">Don't see what you need?</p>
            <p className="text-gray-600 text-sm">We do much more — call us and we'll let you know if we can help.</p>
          </div>
          <a href="tel:7276861410" className="flex-shrink-0 bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors">
            Call Now
          </a>
        </div>
      </div>
    </section>
  )
}
