import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import PalmHarbor from './pages/PalmHarbor'
import Clearwater from './pages/Clearwater'
import Dunedin from './pages/Dunedin'
import TarponSprings from './pages/TarponSprings'
import SafetyHarbor from './pages/SafetyHarbor'

function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <StarService />
      <Services />
      <BeforeAfter />
      <Reviews />
      <ServiceArea />
      <ContactForm />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white font-sans">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/palm-harbor" element={<PalmHarbor />} />
          <Route path="/clearwater" element={<Clearwater />} />
          <Route path="/dunedin" element={<Dunedin />} />
          <Route path="/tarpon-springs" element={<TarponSprings />} />
          <Route path="/safety-harbor" element={<SafetyHarbor />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
