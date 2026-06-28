import CityPage from './CityPage'

export default function Dunedin() {
  return <CityPage
    city="Dunedin"
    county="Pinellas County"
    distance="5 miles from base"
    description="Tampa Bay Handyman Pro serves Dunedin, FL with fast and affordable home repair services. From drywall and screen repair to painting and pressure washing — licensed, insured, and just minutes away."
    neighborhoods={['Downtown Dunedin', 'Dunedin Isles', 'Curlew Creek', 'Boot Ranch', 'Spanish Trails', 'Honeymoon Island area', 'Stirling Heights', 'Virginia Avenue', 'Douglas Avenue', 'Edgewater Drive']}
    services={['Drywall Repair', 'Screen & Pool Cage Repair', 'Ceiling Fan & Light Installation', 'TV Mounting', 'Interior Painting', 'Exterior Painting & Touch-up', 'Pressure Washing', 'Fence Repair', 'Minor Plumbing', 'Carpentry & Trim Work']}
    faqs={[
      { q: 'Do you serve Dunedin, FL for handyman repairs?', a: 'Yes — Dunedin is just 5 miles from our Palm Harbor base. We can often offer same-day service throughout Dunedin, from Downtown to Honeymoon Island area neighborhoods.' },
      { q: 'What is the most common handyman job in Dunedin?', a: 'Screen repair is very common due to Dunedin\'s coastal location and frequent storms. Drywall repair, painting, and pressure washing are also popular among Dunedin homeowners.' },
      { q: 'How do I get a quote for handyman work in Dunedin?', a: 'Simply call (727) 686-1410 or send us a WhatsApp message. We will respond within 1 hour and provide a free estimate, often the same day.' },
      { q: 'Do you work in the historic Downtown Dunedin area?', a: 'Absolutely. We serve all of Dunedin including the historic downtown district, waterfront properties, and all surrounding residential neighborhoods.' },
    ]}
  />
}
