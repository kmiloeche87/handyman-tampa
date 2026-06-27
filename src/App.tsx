import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import StarService from './components/StarService'
import Services from './components/Services'
import BeforeAfter from './components/BeforeAfter'
import Reviews from './components/Reviews'
import ServiceArea from './components/ServiceArea'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <Hero />
      <HowItWorks />
      <StarService />
      <Services />
      <BeforeAfter />
      <Reviews />
      <ServiceArea />
      <ContactForm />
      <Footer />
    </div>
  )
}
