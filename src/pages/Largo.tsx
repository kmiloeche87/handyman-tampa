import CityPage from './CityPage'
export default function Largo() {
  return <CityPage city="Largo" county="Pinellas County"
    neighborhoods={['Downtown Largo','Belleair Bluffs area','Ridgecrest','Bardmoor','East Bay','Whitney Estates','Cypress Woods','Anona','Rosery','Highpoint']}
    faqs={[
      { q: 'Do you provide handyman services in Largo, FL?', a: 'Yes — we serve all of Largo including Downtown Largo, Bardmoor, and East Bay. Largo is about 15 miles from our Palm Harbor base, with same-day service available for most jobs.' },
      { q: 'What handyman services are most requested in Largo?', a: 'Drywall repair, ceiling fan installation, and screen/lanai repair are among the most requested services in Largo. Pressure washing and minor plumbing fixes are also common.' },
      { q: 'Do you offer free estimates in Largo?', a: 'Yes. Free estimates for every job in Largo. Call (727) 686-1410 or WhatsApp us — we respond within 1 hour.' },
      { q: 'Are you licensed and insured for work in Largo?', a: 'Yes. We are fully licensed and insured, serving homeowners throughout Largo and all of Pinellas County.' },
    ]} />
}
