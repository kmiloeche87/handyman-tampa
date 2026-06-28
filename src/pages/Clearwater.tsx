import CityPage from './CityPage'

export default function Clearwater() {
  return <CityPage
    city="Clearwater"
    county="Pinellas County"
    distance="9 miles from base"
    description="Need a reliable handyman in Clearwater, FL? Tampa Bay Handyman Pro offers fast, professional home repairs — drywall, screen repair, painting, pressure washing and more. Licensed, insured, and bilingual."
    neighborhoods={['Clearwater Beach', 'Downtown Clearwater', 'Countryside', 'Dunedin Isles', 'Belleair', 'Harbor Oaks', 'Eagle Estates', 'Imperial Point', 'Skycrest', 'Coachman']}
    services={['Drywall Repair & Patching', 'Screen & Pool Cage Repair', 'Ceiling Fan Installation', 'TV Mounting & Cable Concealment', 'Interior & Exterior Painting', 'Pressure Washing Driveways & Patios', 'Fence Repair', 'Minor Plumbing', 'Door & Window Repair', 'General Home Maintenance']}
    faqs={[
      { q: 'Do you provide handyman services throughout Clearwater, FL?', a: 'Yes — we serve all of Clearwater including Clearwater Beach, Countryside, Belleair, and surrounding neighborhoods. We are just 9 miles from Palm Harbor so same-day service is available.' },
      { q: 'What handyman services are most requested in Clearwater?', a: 'Screen repair and pool cage repair are extremely popular in Clearwater due to the Florida weather. Drywall repair, pressure washing, and ceiling fan installation are also highly requested.' },
      { q: 'Do you offer free estimates in Clearwater?', a: 'Yes. We provide free estimates for all jobs in Clearwater. Call (727) 686-1410 or send a WhatsApp and we will get back to you within 1 hour.' },
      { q: 'Are you bilingual? Do you speak Spanish?', a: 'Yes. Our team is bilingual — we serve both English and Spanish-speaking homeowners throughout Clearwater and the entire Tampa Bay area.' },
    ]}
  />
}
