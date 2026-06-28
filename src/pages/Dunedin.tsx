import CityPage from './CityPage'
import { commonServices } from './cityData'

export default function Dunedin() {
  return <CityPage city="Dunedin" county="Pinellas County" distance="5 miles away"
    description="Tampa Bay Handyman Pro serves Dunedin, FL with fast affordable home repair. From drywall and screen repair to painting and pressure washing — licensed, insured, and just minutes away."
    neighborhoods={['Downtown Dunedin','Dunedin Isles','Curlew Creek','Boot Ranch','Spanish Trails','Honeymoon Island area','Stirling Heights','Virginia Avenue','Edgewater Drive','Douglas Avenue']}
    services={commonServices}
    faqs={[
      { q: 'Do you offer handyman services in Dunedin, FL?', a: 'Yes — Dunedin is just 5 miles from our Palm Harbor base. We can often offer same-day service throughout Dunedin, from Downtown to the Honeymoon Island area.' },
      { q: 'What is the most common handyman job in Dunedin?', a: 'Screen repair is very common due to Dunedin\'s coastal location. Drywall repair, painting, and pressure washing are also popular among Dunedin homeowners.' },
      { q: 'How do I get a quote for handyman work in Dunedin?', a: 'Call (727) 686-1410 or send a WhatsApp. We respond within 1 hour and provide a free estimate, often the same day.' },
      { q: 'Do you work in historic Downtown Dunedin?', a: 'Absolutely. We serve all of Dunedin including the historic downtown district, waterfront properties, and all surrounding residential neighborhoods.' },
    ]} />
}
