import { useState } from 'react'
import { Phone, MessageSquare, Clock } from 'lucide-react'

const WHATSAPP_NUMBER = '17276861410'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', need: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Please enter your name'
    if (!form.phone.trim()) e.phone = 'Please enter your phone number'
    if (!form.need.trim()) e.need = 'Please tell us what you need'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    const msg = encodeURIComponent(
      `Hi! I'm reaching out from your website.\n\n` +
      `👤 *Name:* ${form.name}\n` +
      `📞 *Phone:* ${form.phone}\n` +
      `🔧 *I need:* ${form.need}\n\n` +
      `Can you help me with a free estimate?`
    )
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank')
  }

  const field = (id: 'name' | 'phone' | 'need', label: string, placeholder: string, type = 'text') => (
    <div>
      <label className="block text-sm font-semibold text-gray-300 mb-1.5">{label}</label>
      {id === 'need' ? (
        <textarea rows={3} placeholder={placeholder} value={form[id]}
          onChange={e => setForm({ ...form, [id]: e.target.value })}
          className={`w-full bg-gray-800 border rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-orange-500 transition-colors resize-none ${errors[id] ? 'border-red-500' : 'border-gray-700'}`} />
      ) : (
        <input type={type} placeholder={placeholder} value={form[id]}
          onChange={e => setForm({ ...form, [id]: e.target.value })}
          className={`w-full bg-gray-800 border rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-orange-500 transition-colors ${errors[id] ? 'border-red-500' : 'border-gray-700'}`} />
      )}
      {errors[id] && <p className="text-red-400 text-xs mt-1">{errors[id]}</p>}
    </div>
  )

  return (
    <section id="contact" className="py-16 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-orange-400 font-bold text-sm uppercase tracking-widest mb-2">Get Started Today</p>
            <h2 className="text-3xl md:text-4xl font-black mb-2">Request Your Free Estimate</h2>
            <p className="text-gray-400 mb-7">Fill out the form and we'll open WhatsApp with your message ready — just hit send.</p>
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {field('name', 'Your name', 'e.g. John Smith')}
              {field('phone', 'Your phone number', '(727) 686-1410', 'tel')}
              {field('need', 'What do you need repaired or installed?', 'e.g. I have a large hole in my living room wall and need a ceiling fan installed...')}
              <button type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-black py-4 rounded-xl text-base transition-colors flex items-center justify-center gap-2">
                <MessageSquare size={18} />
                Send via WhatsApp →
              </button>
              <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-4">
                <p className="text-gray-400 text-xs font-semibold mb-2 uppercase tracking-wider">Preview of the message that will be sent</p>
                <div className="bg-green-900/30 border border-green-800/40 rounded-lg p-3 space-y-1">
                  <p className="text-green-300 text-xs">Hi! I'm reaching out from your website.</p>
                  <p className="text-green-300 text-xs">👤 <span className="font-bold">Name:</span> <span className="text-gray-300">{form.name || 'your name'}</span></p>
                  <p className="text-green-300 text-xs">📞 <span className="font-bold">Phone:</span> <span className="text-gray-300">{form.phone || 'your phone'}</span></p>
                  <p className="text-green-300 text-xs">🔧 <span className="font-bold">I need:</span> <span className="text-gray-300">{form.need || 'your description'}</span></p>
                  <p className="text-green-300 text-xs mt-1">Can you help me with a free estimate?</p>
                </div>
              </div>
              <p className="text-gray-500 text-xs text-center">Your information is private. We never share it with anyone.</p>
            </form>
          </div>
          <div className="space-y-4 pt-2">
            <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-4">Or reach us directly</p>
            <a href="tel:7276861410" className="flex items-center gap-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-2xl p-5 transition-colors">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone size={22} className="text-white" />
              </div>
              <div>
                <p className="text-gray-400 text-xs font-medium">Call now</p>
                <p className="text-white font-black text-xl">(727) 686-1410</p>
              </div>
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer"
              className="flex items-center gap-4 bg-gray-800 hover:bg-green-900/30 border border-gray-700 hover:border-green-600/50 rounded-2xl p-5 transition-colors">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <MessageSquare size={22} className="text-white" />
              </div>
              <div>
                <p className="text-gray-400 text-xs font-medium">WhatsApp (English & Spanish)</p>
                <p className="text-white font-black text-xl">Message us now →</p>
              </div>
            </a>
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Clock size={16} className="text-orange-400" />
                <p className="text-white font-bold text-sm">Business Hours</p>
              </div>
              <div className="space-y-1.5">
                {[['Monday – Friday', '7:00 am – 7:00 pm'], ['Saturday', '8:00 am – 5:00 pm'], ['Sunday', 'Emergencies only']].map(([day, hrs]) => (
                  <div key={day} className="flex justify-between text-sm">
                    <span className="text-gray-400">{day}</span>
                    <span className="text-white font-medium">{hrs}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-orange-500/15 border border-orange-500/30 rounded-xl px-4 py-3">
              <p className="text-orange-300 text-sm font-semibold">⏰ Limited availability this week — call today to secure your appointment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
