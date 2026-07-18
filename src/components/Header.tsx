import { useState } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import integrityLogo from '../assets/integrity-logo.jpeg'
import { trackCallClick, trackWhatsAppClick } from '../lib/analytics'

export default function Header() {
  const [open, setOpen] = useState(false)
  const nav = ['Services', 'How It Works', 'Service Area', 'Contact']

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-orange-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">T</span>
          </div>
          <div className="leading-tight">
            <p className="font-bold text-gray-900 text-sm leading-none">Tampa Bay Handyman Pro</p>
            <div className="flex items-center gap-1 mt-1">
              <img src={integrityLogo} alt="Integrity Property Solutions" className="h-3 w-3 object-contain rounded-sm" />
              <p className="text-[10px] text-gray-500 leading-none">by Integrity Property Solutions</p>
            </div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map(item => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
              className="text-sm text-gray-600 hover:text-orange-500 transition-colors font-medium">
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="tel:7276861410" onClick={() => trackCallClick('header_desktop')}
            className="hidden sm:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-bold text-sm transition-colors">
            <Phone size={15} />
            (727) 686-1410
          </a>
          <a href="tel:7276861410" onClick={() => trackCallClick('header_mobile')} className="sm:hidden bg-orange-500 p-2 rounded-lg text-white">
            <Phone size={18} />
          </a>
          <button className="md:hidden text-gray-600" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3">
          {nav.map(item => (
            <a key={item} href="#" onClick={() => setOpen(false)}
              className="block py-2.5 text-sm text-gray-700 font-medium border-b border-gray-100 last:border-0">
              {item}
            </a>
          ))}
          <a href="https://wa.me/17276861410" target="_blank" rel="noreferrer" onClick={() => trackWhatsAppClick('header_mobile_menu')}
            className="mt-3 flex items-center justify-center gap-2 bg-green-500 text-white py-2.5 rounded-lg font-bold text-sm">
            WhatsApp: (727) 686-1410
          </a>
        </div>
      )}
    </header>
  )
}
