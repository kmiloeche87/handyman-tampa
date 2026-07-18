import { Shield, CheckCircle } from 'lucide-react'
import { trackCallClick, trackWhatsAppClick } from '../lib/analytics'

const mosaicPhotos = [
  { url: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DrYCfsHjjiGVhlyTMhB1enKXnz/hf_20260627_052402_c50125cf-cab5-4fdd-87ee-12d241df84ad.png', label: 'Drywall' },
  { url: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DrYCfsHjjiGVhlyTMhB1enKXnz/hf_20260627_052405_0253344a-9a65-4f72-93fa-304190faad4e.png', label: 'Screen Repair' },
  { url: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DrYCfsHjjiGVhlyTMhB1enKXnz/hf_20260627_052417_bd29b9f8-4160-4785-9e04-3d5f743e12ae.png', label: 'Painting' },
  { url: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DrYCfsHjjiGVhlyTMhB1enKXnz/hf_20260627_052428_67734eca-2d73-4921-a35c-7c8c70c879ec.png', label: 'Plumbing' },
  { url: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DrYCfsHjjiGVhlyTMhB1enKXnz/hf_20260627_052422_b54ff7d9-6419-4d48-9a24-7b78b92c5c39.png', label: 'Pressure Wash' },
  { url: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DrYCfsHjjiGVhlyTMhB1enKXnz/hf_20260627_052425_89068956-9672-4d15-af65-7d645982011f.png', label: 'Fence' },
]

export default function Hero({ city = "Tampa Bay" }: { city?: string }) {
  return (
    <section className="bg-orange-500 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] min-h-[520px]">
          <div className="flex flex-col justify-between px-8 py-12 md:px-12 md:py-16 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-600/40 rounded-full px-4 py-1.5 mb-6">
                <span className="text-orange-100 text-xs font-bold">Free Estimates · Same-Day Service Available</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
                We Fix<br />
                Your Home.<br />
                <span className="text-orange-200">{city}.</span>
              </h1>
              <p className="text-orange-100 text-base md:text-lg leading-relaxed mb-6 max-w-md">
                Drywall · Screen Repair · Painting · Plumbing · Electrical · Fence · Pressure Washing — same day or next day service.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  { icon: Shield, text: 'Licensed & Insured' },
                  { icon: CheckCircle, text: 'Background Checked' },
                  { icon: CheckCircle, text: 'Bilingual' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-1.5 bg-orange-600/30 border border-orange-400/30 rounded-full px-3 py-1.5">
                    <Icon size={12} className="text-orange-200" />
                    <span className="text-orange-100 text-xs font-semibold">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-orange-200 text-xs font-bold uppercase tracking-widest mb-1">Call Now</p>
              <p className="text-white font-black text-3xl md:text-4xl mb-5 tracking-tight">(727) 686-1410</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:7276861410" onClick={() => trackCallClick('hero')}
                  className="flex items-center justify-center gap-2 bg-white hover:bg-orange-50 text-orange-600 font-black px-6 py-3.5 rounded-xl text-sm transition-colors shadow-lg">
                  📞 Call Now
                </a>
                <a href="https://wa.me/17276861410" target="_blank" rel="noreferrer" onClick={() => trackWhatsAppClick('hero')}
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-colors">
                  💬 WhatsApp
                </a>
                <a href="#contact"
                  className="flex items-center justify-center gap-2 bg-orange-600/40 hover:bg-orange-600/60 border border-orange-400/40 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-colors">
                  Free Estimate →
                </a>
              </div>
              <div className="mt-5 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <p className="text-orange-200 text-xs font-semibold">Available today · Response in under 1 hour</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-3 gap-0.5 bg-orange-700 min-h-[360px] md:min-h-0">
            {mosaicPhotos.map((photo, i) => (
              <div key={i} className="relative overflow-hidden group">
                <img src={photo.url} alt={photo.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ minHeight: '120px' }} />
                <div className="absolute bottom-0 inset-x-0 bg-black/50 py-1.5 px-2">
                  <p className="text-white text-[10px] font-bold">{photo.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-white"
        style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }} />
    </section>
  )
}
