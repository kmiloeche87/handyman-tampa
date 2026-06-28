import CityPage from './CityPage'
export default function SafetyHarbor() {
  return <CityPage city="Safety Harbor" county="Pinellas County"
    neighborhoods={['Downtown Safety Harbor','Baranoff Estates','Bayshore Estates','Coachman Ridge','Harbor Woods','Lake Chautauqua','Northwood Estates','Safety Harbor Marina','Green Springs','Marshall Street area']}
    faqs={[
      { q: 'Do you serve Safety Harbor, FL?', a: 'Yes — Safety Harbor is about 12 miles from our Palm Harbor base. We provide same-day or next-day handyman service throughout the city.' },
      { q: 'What handyman services do you offer in Safety Harbor?', a: 'Drywall repair, screen repair, ceiling fans, TV mounting, painting, pressure washing, fence repair, minor plumbing, and general home maintenance.' },
      { q: 'How do I schedule a handyman in Safety Harbor?', a: 'Call (727) 686-1410 or send a WhatsApp. We respond within 1 hour and can usually schedule the same or next day.' },
    ]} />
}
