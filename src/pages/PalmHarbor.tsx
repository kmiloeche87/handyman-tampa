import CityPage from './CityPage'

export default function PalmHarbor() {
  return <CityPage
    city="Palm Harbor"
    county="Pinellas County"
    distance="Local"
    description="Tampa Bay Handyman Pro is your local handyman in Palm Harbor, FL. We provide same-day repairs, drywall, screen repair, painting, pressure washing and more — with upfront pricing and no hidden fees."
    neighborhoods={['Crystal Beach', 'Ozona', 'Lansbrook', 'Lake Tarpon', 'Innisbrook', 'Curlew', 'Tarpon Lake', 'Westlake Village', 'Fox Lake', 'Highland Lakes']}
    services={['Drywall Repair & Patching', 'Screen Repair & Pool Cages', 'Ceiling Fan Installation', 'TV Mounting', 'Interior & Exterior Painting', 'Pressure Washing', 'Fence Repair & Replacement', 'Minor Plumbing', 'Carpentry & Trim', 'Handyman Odd Jobs']}
    faqs={[
      { q: 'Do you serve all of Palm Harbor, FL?', a: 'Yes — we cover all of Palm Harbor including Crystal Beach, Ozona, Lansbrook, and all surrounding communities. We are based in Palm Harbor at 2595 Tampa Rd, so we can often offer same-day service.' },
      { q: 'How much does a handyman cost in Palm Harbor?', a: 'Our rates start at $75/hour with a 1-hour minimum. Most small jobs like drywall repair or ceiling fan installation cost between $75–$150. We always provide a free estimate before starting any work.' },
      { q: 'Are you licensed and insured in Florida?', a: 'Yes. Tampa Bay Handyman Pro is fully licensed and insured in the state of Florida. All our technicians are background-checked and bilingual (English/Spanish).' },
      { q: 'How quickly can you come to Palm Harbor?', a: 'Since we are based in Palm Harbor, we can often respond the same day. We typically respond to all inquiries within 1 hour during business hours (Mon–Fri 7am–7pm, Sat 8am–5pm).' },
    ]}
  />
}
