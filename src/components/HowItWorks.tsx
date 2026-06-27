import { Phone, ClipboardList, Wrench } from 'lucide-react'

const steps = [
  { num: '01', icon: Phone, title: 'Contact Us', desc: 'Call, send a WhatsApp or fill out the form. We respond in under 1 hour on business days.', detail: 'Mon – Sat · 7am – 7pm' },
  { num: '02', icon: ClipboardList, title: 'Get Your Estimate', desc: 'We give you a clear price before we start. No hidden costs, no surprises when we finish.', detail: 'Free estimate within 24 hours' },
  { num: '03', icon: Wrench, title: 'We Do the Work', desc: 'Our technician arrives on time, completes the job cleanly, and leaves everything in order.', detail: 'Satisfaction guarantee included' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-2">Simple & Transparent</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">How Does It Work?</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">No hassle. From the moment you contact us to when the job is done, the process is straightforward.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 relative">
          <div className="hidden md:block absolute top-14 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-0.5 bg-orange-200 z-0" />
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.num} className="relative bg-white rounded-2xl p-7 border border-gray-200 shadow-sm z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={22} className="text-white" />
                  </div>
                  <span className="text-4xl font-black text-gray-100">{step.num}</span>
                </div>
                <h3 className="font-black text-gray-900 text-xl mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{step.desc}</p>
                <div className="flex items-center gap-2 bg-orange-50 rounded-lg px-3 py-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                  <p className="text-orange-700 text-xs font-semibold">{step.detail}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
