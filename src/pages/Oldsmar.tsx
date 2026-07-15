import CityPage from './CityPage'
export default function Oldsmar() {
  return <CityPage city="Oldsmar" county="Pinellas County"
    neighborhoods={['Downtown Oldsmar','East Lake Woodlands border','Forest Lakes','Eastlake','Pinehurst Meadows','Oldsmar Landing','Canterbury','Bayside Bridge area','Cypress Landing','Feather Sound border']}
    faqs={[
      { q: 'Do you provide handyman services in Oldsmar, FL?', a: 'Yes — we cover all of Oldsmar, just 14 miles from our Palm Harbor base. Same-day availability for most jobs in the area.' },
      { q: 'What handyman services are most requested in Oldsmar?', a: 'Drywall repair, ceiling fan and light fixture installation, and pressure washing are the most requested services in Oldsmar. Screen repair is also popular near the water.' },
      { q: 'Do you offer free estimates in Oldsmar?', a: 'Yes. Free estimates on every job. Call (727) 686-1410 or WhatsApp us — we typically respond within 1 hour.' },
      { q: 'Are you bilingual for Oldsmar customers?', a: 'Yes. We are fully bilingual and serve both English and Spanish-speaking homeowners throughout Oldsmar and Tampa Bay.' },
    ]} />
}
