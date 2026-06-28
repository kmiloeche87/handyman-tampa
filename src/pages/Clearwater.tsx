import CityPage from './CityPage'
import { commonServices } from './cityData'

export default function Clearwater() {
  return <CityPage city="Clearwater" county="Pinellas County" distance="9 miles away"
    description="Need a reliable handyman in Clearwater, FL? Tampa Bay Handyman Pro offers fast professional home repairs — drywall, screen, painting, pressure washing and more. Licensed, insured, bilingual."
    neighborhoods={['Clearwater Beach','Downtown Clearwater','Countryside','Belleair','Harbor Oaks','Imperial Point','Skycrest','Coachman','Dunedin Isles','Eagle Estates']}
    services={commonServices}
    faqs={[
      { q: 'Do you provide handyman services throughout Clearwater, FL?', a: 'Yes — we serve all of Clearwater including Clearwater Beach, Countryside, and Belleair. Just 9 miles from our Palm Harbor base so same-day service is available.' },
      { q: 'What handyman services are most requested in Clearwater?', a: 'Screen and pool cage repair are very popular due to Florida weather. Drywall repair, pressure washing, and ceiling fan installation are also highly requested.' },
      { q: 'Do you offer free estimates in Clearwater?', a: 'Yes. Free estimates for all jobs in Clearwater. Call (727) 686-1410 or send a WhatsApp — we respond within 1 hour.' },
      { q: 'Are you bilingual? Do you speak Spanish?', a: 'Yes. We are bilingual and serve both English and Spanish-speaking homeowners throughout Clearwater and Tampa Bay.' },
    ]} />
}
