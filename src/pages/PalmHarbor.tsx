import CityPage from './CityPage'
export default function PalmHarbor() {
  return <CityPage city="Palm Harbor" county="Pinellas County"
    neighborhoods={['Crystal Beach','Ozona','Lansbrook','Lake Tarpon','Innisbrook','Curlew','Tarpon Lake','Westlake Village','Fox Lake','Highland Lakes']}
    faqs={[
      { q: 'Do you serve all of Palm Harbor, FL?', a: 'Yes — we cover all of Palm Harbor including Crystal Beach, Ozona, and Lansbrook. We are based here at 2595 Tampa Rd, so same-day service is usually available.' },
      { q: 'How much does a handyman cost in Palm Harbor?', a: 'Rates start at $75/hour. Most small jobs cost between $75–$150. We always provide a free estimate before starting any work.' },
      { q: 'Are you licensed and insured in Florida?', a: 'Yes. Fully licensed and insured in Florida. All technicians are background-checked and bilingual (English/Spanish).' },
      { q: 'How quickly can you come to Palm Harbor?', a: 'Since we are based in Palm Harbor, we can often respond the same day within 1 hour during business hours (Mon–Fri 7am–7pm, Sat 8am–5pm).' },
    ]} />
}
