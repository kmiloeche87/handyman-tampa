const cities = [
  { name: 'Tampa', note: 'Main location' },
  { name: 'South Tampa', note: 'Fast response' },
  { name: 'Brandon', note: 'Full coverage' },
  { name: 'Riverview', note: 'Full coverage' },
  { name: 'St. Petersburg', note: 'Full coverage' },
  { name: 'Clearwater', note: 'Full coverage' },
  { name: 'Wesley Chapel', note: 'Full coverage' },
  { name: 'Lutz', note: 'Full coverage' },
  { name: "Land O' Lakes", note: 'Full coverage' },
  { name: 'Temple Terrace', note: 'Full coverage' },
  { name: 'Plant City', note: 'Check availability' },
  { name: 'Ruskin', note: 'Check availability' },
]

export default function ServiceArea() {
  return (
    <section id="service-area" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-2">Tampa Bay Area</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Do We Serve Your Area?</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We cover the entire Tampa Bay area. Response in under 1 hour for emergencies in South Tampa and Brandon. Same day across the entire metro area.
            </p>
            <div className="grid grid-cols-2 gap-2 mb-6">
              {cities.map(c => (
                <div key={c.name} className="flex items-center gap-2.5 py-2 border-b border-gray-100 last:border-0">
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${c.note === 'Main location' ? 'bg-orange-500' : c.note === 'Fast response' ? 'bg-orange-300' : c.note === 'Full coverage' ? 'bg-green-400' : 'bg-gray-300'}`} />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{c.name}</p>
                    <p className="text-[11px] text-gray-400">{c.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 text-xs">
              {[{ color: 'bg-orange-500', label: 'Main location' }, { color: 'bg-green-400', label: 'Full coverage' }, { color: 'bg-gray-300', label: 'Check availability' }].map(l => (
                <div key={l.label} className="flex items-center gap-1.5">
                  <div className={`w-2.5 h-2.5 rounded-full ${l.color}`} />
                  <span className="text-gray-500">{l.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-100 rounded-2xl h-56 flex items-center justify-center border border-gray-200 relative overflow-hidden">
              <div className="text-center z-10">
                <div className="text-4xl mb-2">🗺️</div>
                <p className="text-gray-500 text-sm font-medium">Tampa Bay Coverage Map</p>
                <p className="text-gray-400 text-xs">Google Maps embed goes here</p>
              </div>
              <div className="absolute top-8 left-[40%] w-4 h-4 bg-orange-500 rounded-full border-2 border-white shadow" />
              <div className="absolute top-[45%] left-[30%] w-3 h-3 bg-green-400 rounded-full border-2 border-white shadow" />
              <div className="absolute top-[35%] left-[60%] w-3 h-3 bg-green-400 rounded-full border-2 border-white shadow" />
              <div className="absolute top-[60%] left-[50%] w-3 h-3 bg-green-400 rounded-full border-2 border-white shadow" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { zone: 'South Tampa · Brandon', time: '< 1 hour', color: 'border-orange-200 bg-orange-50', textColor: 'text-orange-600' },
                { zone: 'Full metro area', time: 'Same day', color: 'border-green-200 bg-green-50', textColor: 'text-green-700' },
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
                <p className="font-bold text-sm">Outside our area?</p>
                <p className="text-gray-400 text-xs mt-0.5">Call us anyway — we evaluate each case based on distance and type of work.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
