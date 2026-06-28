import CityPage from './CityPage'
import { commonServices } from './cityData'

export default function SafetyHarbor() {
  return <CityPage city="Safety Harbor" county="Pinellas County" distance="12 miles away"
    description="Tampa Bay Handyman Pro provides professional handyman services in Safety Harbor, FL. Fast response, upfront pricing, licensed and insured — from small repairs to bigger projects."
    neighborhoods={['Downtown Safety Harbor','Baranoff Estates','Bayshore Estates','Coachman Ridge','Harbor Woods','Marshall Street area','Lake Chautauqua','Northwood Estates','Safety Harbor Marina','Green Springs']}
    services={commonServices}
    faqs={[
      { q: 'Do you serve Safety Harbor, FL?', a: 'Yes — Safety Harbor is about 12 miles from our Palm Harbor base. We provide same-day or next-day handyman service throughout Safety Harbor.' },
      { q: 'What handyman services do you offer in Safety Harbor?', a: 'Drywall repair, screen repair, ceiling fans, TV mounting, painting, pressure washing, fence repair, minor plumbing, and general home maintenance.' },
      { q: 'How do I schedule a handyman in Safety Harbor?', a: 'Call (727) 686-1410 or send a WhatsApp. We respond within 1 hour on business days and can usually schedule the same or next day.' },
    ]} />
}
