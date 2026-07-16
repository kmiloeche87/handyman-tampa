import { useState, useEffect } from 'react'
import { CheckCircle, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const cases = [
  {
    id: 1,
    damage: 'Water Damage Stain',
    location: 'Ceiling · Living Room',
    zone: 'South Tampa',
    desc: 'Roof leak stain accumulated from rain. 24-inch brown ring with irregular edges.',
    before: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DrYCfsHjjiGVhlyTMhB1enKXnz/hf_20260627_060012_0107d02d-c6ed-4bdd-9cfb-cac193cf6aa8.png',
    after: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DrYCfsHjjiGVhlyTMhB1enKXnz/hf_20260627_060015_c5f6906b-4f85-4e31-828c-c3819a5d0a8b.png',
    time: '1 day',
    result: 'Sealed, skim coated and touch-up painted',
  },
  {
    id: 2,
    damage: 'Impact Hole',
    location: 'Wall · Hallway',
    zone: 'Brandon',
    desc: '6-inch hole from furniture impact during move. Irregular edges with exposed drywall core.',
    before: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DrYCfsHjjiGVhlyTMhB1enKXnz/hf_20260627_060019_696bdc26-84c9-4259-8183-2a3e757ccd93.png',
    after: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DrYCfsHjjiGVhlyTMhB1enKXnz/hf_20260627_060022_d656fbfa-c286-4348-9bf9-074148b17d45.png',
    time: '4 hours',
    result: 'Patch, compound and color-matched paint',
  },
  {
    id: 3,
    damage: 'Settlement Cracks',
    location: 'Corner · Bedroom',
    zone: 'Riverview',
    desc: 'Diagonal cracks from window frame due to typical Florida foundation movement.',
    before: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DrYCfsHjjiGVhlyTMhB1enKXnz/hf_20260627_060025_66b388fb-ec18-4da9-8012-9cb4aec42bce.png',
    after: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DrYCfsHjjiGVhlyTMhB1enKXnz/hf_20260627_060130_0761c811-e3a9-41a3-b5f4-03436d4e11cf.png',
    time: '3 hours',
    result: 'Flexible sealant, compound and repaint',
  },
  {
    id: 4,
    damage: 'Popcorn Ceiling with Mold',
    location: 'Ceiling · Bathroom',
    zone: 'Clearwater',
    desc: 'Popcorn texture ceiling with mold spots from humidity buildup in bathroom without ventilation.',
    before: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DrYCfsHjjiGVhlyTMhB1enKXnz/hf_20260627_060032_2ca01df5-9ad6-4ef7-b373-6922f6e920f9.png',
    after: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DrYCfsHjjiGVhlyTMhB1enKXnz/hf_20260627_060035_291e6778-706d-450d-97b1-790bfac98db2.png',
    time: '1 day',
    result: 'Popcorn removal, skim coat and anti-mold paint',
  },
  {
    id: 5,
    damage: 'Widespread Nail Pops',
    location: 'Wall · Hallway',
    zone: 'Wesley Chapel',
    desc: 'Over 20 visible nail pops on hallway wall from thermal expansion of the structure.',
    before: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DrYCfsHjjiGVhlyTMhB1enKXnz/hf_20260627_060038_26512e44-3c99-41e6-bd1e-d8c5d4b38c2b.png',
    after: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DrYCfsHjjiGVhlyTMhB1enKXnz/hf_20260627_060041_73ae5c89-e0a7-464c-8b45-4b11d640c402.png',
    time: '2 hours',
    result: 'Nails re-set, compound and touch-up paint',
  },
]

const features = [
  'Texture matching to blend with existing finish',
  'Touch-up paint in base color included',
  'Done in 1–2 days depending on area',
  '12-month workmanship guarantee',
]

export default function StarService() {
  const [current, setCurrent] = useState(0)
  const [showAfter, setShowAfter] = useState(true)
  const [animating, setAnimating] = useState(false)
  const [phase, setPhase] = useState(0)

  const goTo = (idx: number) => {
    if (animating) return
    setAnimating(true)
    setShowAfter(true)
    setPhase(0)
    setTimeout(() => {
      setCurrent(idx)
      setAnimating(false)
    }, 300)
  }

  const prev = () => goTo((current - 1 + cases.length) % cases.length)
  const next = () => goTo((current + 1) % cases.length)

  // Cycle: AFTER 2.5s → BEFORE 2.5s → next case AFTER ...
  useEffect(() => {
    const t = setTimeout(() => {
      if (phase === 0) {
        setShowAfter(false)
        setPhase(1)
      } else {
        setShowAfter(true)
        setPhase(0)
        setCurrent(c => (c + 1) % cases.length)
      }
    }, 2500)
    return () => clearTimeout(t)
  }, [phase, current])

  const c = cases[current]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Servicio estrella · #1 más solicitado en Tampa</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* LEFT: carrusel de imágenes */}
          <div>
            {/* Main image with before/after toggle */}
            <div
              className={`relative rounded-2xl overflow-hidden bg-gray-900 cursor-pointer transition-opacity duration-300 ${animating ? 'opacity-0' : 'opacity-100'}`}
              style={{ aspectRatio: '4/3' }}
              onClick={() => setShowAfter(v => !v)}
            >
              {/* BEFORE */}
              <img
                src={c.before}
                alt={`${c.damage} in ${c.zone}, FL — before repair`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${showAfter ? 'opacity-0' : 'opacity-100'}`}
              />
              {/* AFTER */}
              <img
                src={c.after}
                alt={`${c.damage} in ${c.zone}, FL — after repair`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${showAfter ? 'opacity-100' : 'opacity-0'}`}
              />

              {/* Status label */}
              <div className={`absolute top-4 left-4 text-xs font-black px-3 py-1.5 rounded-full transition-all duration-300 ${showAfter ? 'bg-orange-500 text-white' : 'bg-gray-900/70 text-white backdrop-blur-sm'}`}>
                {showAfter ? '✓ AFTER' : 'BEFORE'}
              </div>

              {/* Toggle button */}
              <button
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-bold px-3 py-1.5 rounded-full hover:bg-white transition-colors shadow"
                onClick={e => { e.stopPropagation(); setShowAfter(v => !v) }}
              >
                {showAfter ? '← See damage' : 'See result →'}
              </button>

              {/* Nav arrows */}
              <button
                onClick={e => { e.stopPropagation(); prev() }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/40 hover:bg-black/70 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={e => { e.stopPropagation(); next() }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/40 hover:bg-black/70 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronRight size={18} />
              </button>

              {/* Ficha técnica overlay bottom */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent px-4 pt-8 pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-black text-sm">{c.damage}</p>
                    <p className="text-gray-300 text-xs">{c.location} · {c.zone}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-orange-400 font-black text-sm">{c.time}</p>
                    <p className="text-gray-400 text-xs">job time</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-2 mt-3">
              {cases.map((cs, i) => (
                <button
                  key={cs.id}
                  onClick={() => goTo(i)}
                  className={`flex-1 rounded-lg overflow-hidden transition-all duration-200 ${i === current ? 'ring-2 ring-orange-500 ring-offset-1' : 'opacity-50 hover:opacity-80'}`}
                  style={{ aspectRatio: '4/3' }}
                >
                  <img src={cs.before} alt={`${cs.damage} in ${cs.zone}, FL`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Ficha técnica detalle */}
            <div className={`mt-4 bg-gray-50 border border-gray-200 rounded-xl p-4 transition-opacity duration-300 ${animating ? 'opacity-0' : 'opacity-100'}`}>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Job Record #{String(c.id).padStart(3, '0')}</p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">{c.desc}</p>
              <div className="flex items-center gap-2 bg-orange-50 rounded-lg px-3 py-2">
                <CheckCircle size={13} className="text-orange-500 flex-shrink-0" />
                <p className="text-orange-700 text-xs font-semibold">{c.result}</p>
              </div>
            </div>
          </div>

          {/* RIGHT: copy + features */}
          <div className="bg-gray-950 rounded-3xl p-8 md:p-10 h-full flex flex-col justify-between">
            <div>
              <p className="text-orange-400 text-sm font-bold uppercase tracking-widest mb-2">Drywall · Tampa Bay</p>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                Drywall &<br />Wall Repair
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                Water damage, holes, settlement cracks, nail pops, popcorn ceilings — we repair it invisibly. The finish matches the original perfectly, and no one will ever know there was damage.
              </p>

              {/* Dot indicators */}
              <div className="flex gap-2 mb-6">
                {cases.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-orange-500 w-6' : 'bg-gray-600 w-1.5'}`}
                  />
                ))}
              </div>

              <ul className="space-y-2.5 mb-8">
                {features.map(f => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle size={15} className="text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Precio + CTA */}
            <div>
              <div className="flex items-baseline gap-2 mb-5">
                <span className="text-gray-500 text-sm">desde</span>
                <span className="text-white font-black text-4xl">$75</span>
                <span className="text-gray-500 text-sm">· materials included</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:7276861410"
                  className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-3 rounded-xl text-sm transition-colors flex-1">
                  Get Your Free Estimate
                  <ArrowRight size={15} />
                </a>
                <a href="#contacto"
                  className="flex items-center justify-center text-gray-400 hover:text-white text-sm font-medium transition-colors border border-gray-700 hover:border-gray-500 px-5 py-3 rounded-xl">
                  WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
