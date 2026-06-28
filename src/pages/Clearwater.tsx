import CityPage from './CityPage'
export default function Clearwater() {
  return <CityPage city="Clearwater" county="Pinellas County"
    neighborhoods={['Clearwater Beach','Downtown Clearwater','Countryside','Belleair','Harbor Oaks','Imperial Point','Skycrest','Coachman','Dunedin Isles','Eagle Estates']}
    faqs={[
      { q: 'Do you provide handyman services throughout Clearwater, FL?', a: 'Yes — we serve all of Clearwater including Clearwater Beach, Countryside, and Belleair. Just 9 miles from our Palm Harbor base so same-day service is available.' },
      { q: 'What handyman services are most requested in Clearwater?', a: 'Screen and pool cage repair are very popular. Drywall repair, pressure washing, and ceiling fan installation are also highly requested throughout Clearwater.' },
      { q: 'Do you offer free estimates in Clearwater?', a: 'Yes. Free estimates for all jobs. Call (727) 686-1410 or WhatsApp — we respond within 1 hour.' },
      { q: 'Are you bilingual?', a: 'Yes. We are fully bilingual and serve both English and Spanish-speaking homeowners throughout Clearwater and Tampa Bay.' },
    ]} />
}
