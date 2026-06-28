import CityPage from './CityPage'
import { commonServices } from './cityData'

export default function TarponSprings() {
  return <CityPage city="Tarpon Springs" county="Pinellas County" distance="10 miles away"
    description="Looking for a handyman in Tarpon Springs, FL? Tampa Bay Handyman Pro provides reliable home repairs — bilingual (English & Spanish), licensed, insured, available same-day or next-day."
    neighborhoods={['Sponge Docks area','Tarpon Springs Downtown','Lakeview Estates','Harbor Oaks','Pointe Alexis','Anclote','Beckett Way','Forest Hills','Lake Tarpon area','Sunset Hills']}
    services={commonServices}
    faqs={[
      { q: 'Do you offer handyman services in Tarpon Springs, FL?', a: 'Yes — Tarpon Springs is about 10 miles from our Palm Harbor base. We serve all of Tarpon Springs including the Sponge Docks area and all surrounding neighborhoods.' },
      { q: 'Do you speak Spanish for Tarpon Springs customers?', a: 'Yes. Our team is fully bilingual in English and Spanish. We proudly serve the diverse community of Tarpon Springs.' },
      { q: 'How much does handyman service cost in Tarpon Springs?', a: 'Rates start at $75/hour. Most common jobs cost between $75–$200 depending on the repair. We always provide a free estimate before starting.' },
      { q: 'Can you handle water damage drywall repair in Tarpon Springs?', a: 'Yes. Florida humidity causes frequent water damage. We specialize in drywall repair, water stain removal, texture matching, and painting throughout Tarpon Springs.' },
    ]} />
}
