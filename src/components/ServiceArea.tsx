import { Link } from 'react-router-dom'

const cities = [
  { name: 'Palm Harbor', note: 'Main location', dot: 'bg-orange-500', miles: 'Base' },
  { name: 'Dunedin', note: 'Full coverage', dot: 'bg-green-400', miles: '5 mi' },
  { name: 'Clearwater', note: 'Full coverage', dot: 'bg-green-400', miles: '9 mi' },
  { name: 'Tarpon Springs', note: 'Full coverage', dot: 'bg-green-400', miles: '10 mi' },
  { name: 'Safety Harbor', note: 'Full coverage', dot: 'bg-green-400', miles: '12 mi' },
  { name: 'Oldsmar', note: 'Full coverage', dot: 'bg-green-400', miles: '14 mi' },
  { name: 'Largo', note: 'Full coverage', dot: 'bg-green-400', miles: '15 mi' },
  { name: 'Seminole', note: 'Full coverage', dot: 'bg-green-400', miles: '18 mi' },
  { name: 'New Port Richey', note: 'Full coverage', dot: 'bg-green-400', miles: '20 mi' },
  { name: 'St. Petersburg', note: 'Full coverage', dot: 'bg-green-400', miles: '22 mi' },
  { name: 'Tampa', note: 'Full coverage', dot: 'bg-green-400', miles: '24 mi' },
  { name: 'Lutz', note: 'Full coverage', dot: 'bg-green-400', miles: '28 mi' },
  { name: 'Land O\' Lakes', note: 'Full coverage', dot: 'bg-green-400', miles: '32 mi' },
  { name: 'Brandon', note: 'Full coverage', dot: 'bg-green-400', miles: '35 mi' },
  { name: 'Wesley Chapel', note: 'Check availability', dot: 'bg-gray-300', miles: '38 mi' },
  { name: 'Riverview', note: 'Check availability', dot: 'bg-gray-300', miles: '38 mi' },
]

const cityLinks = [
  { name: 'Palm Harbor', path: '/palm-harbor' },
  { name: 'Clearwater', path: '/clearwater' },
  { name: 'Dunedin', path: '/dunedin' },
  { name: 'Tarpon Springs', path: '/tarpon-springs' },
  { name: 'Safety Harbor', path: '/safety-harbor' },
  { name: 'Largo', path: '/largo' },
  { name: 'Oldsmar', path: '/oldsmar' },
]

export default function ServiceArea() {
  return (
    <section id="service-area" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-2">Palm Harbor, FL · Pinellas County</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Do We Serve Your Area?</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Based at <strong>2595 Tampa Rd, Palm Harbor, FL 34684</strong>. We cover a 40-mile radius — all of Pinellas County, most of Hillsborough, and parts of Pasco County.
            </p>

            <div className="grid grid-cols-2 gap-2 mb-6">
              {cities.map(c => (
                <div key={c.name} className="flex items-center gap-2.5 py-2 border-b border-gray-100 last:border-0">
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${c.dot}`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">{c.name}</p>
                    <p className="text-[11px] text-gray-400">{c.note} · {c.miles}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 text-xs mb-6">
              {[
                { color: 'bg-orange-500', label: 'Main location' },
                { color: 'bg-green-400', label: 'Full coverage' },
                { color: 'bg-gray-300', label: 'Check availability' },
              ].map(l => (
                <div key={l.label} className="flex items-center gap-1.5">
                  <div className={`w-2.5 h-2.5 rounded-full ${l.color}`} />
                  <span className="text-gray-500">{l.label}</span>
                </div>
              ))}
            </div>

            {/* City page links */}
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Handyman services by city</p>
              <div className="flex flex-wrap gap-2">
                {cityLinks.map(c => (
                  <Link key={c.name} to={c.path}
                    className="text-xs font-semibold text-orange-500 hover:text-orange-600 bg-orange-50 hover:bg-orange-100 border border-orange-200 px-3 py-1.5 rounded-full transition-colors">
                    Handyman in {c.name} →
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {/* Google Maps embed */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                title="Tampa Bay Handyman Pro — Palm Harbor FL"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.8!2d-82.7374258!3d28.0679469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDA0JzA0LjYiTiA4MsKwNDQnMTQuNyJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { zone: 'Palm Harbor · Clearwater · Dunedin', time: '< 30 min', color: 'border-orange-200 bg-orange-50', textColor: 'text-orange-600' },
                { zone: 'Full 40-mile radius', time: 'Same day', color: 'border-green-200 bg-green-50', textColor: 'text-green-700' },
              ].map(c => (
                <div key={c.zone} className={`rounded-xl p-4 border ${c.color}`}>
                  <p className={`text-xl font-black ${c.textColor}`}>{c.time}</p>
                  <p className="text-gray-600 text-xs font-medium mt-0.5">{c.zone}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-950 rounded-xl p-4 text-white flex items-center gap-4">
              <div className="text-3xl">📍</div>
              <div>
                <p className="font-bold text-sm">2595 Tampa Rd Ste Q</p>
                <p className="text-gray-400 text-xs">Palm Harbor, FL 34684</p>
                <p className="text-gray-500 text-xs mt-0.5">Outside our area? Call us — we evaluate every case.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
