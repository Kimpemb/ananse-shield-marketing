import Nav from './components/Nav'
import Hero from './components/Hero'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import TrustArchitecture from './components/TrustArchitecture'
import AvailableNow from './components/AvailableNow'
import WhatsNext from './components/WhatsNext'
import MarketsTable from './components/MarketsTable'
import { About, CTA } from './components/About'
import Waitlist from './components/Waitlist'
import Footer from './components/Footer'
import Reveal from './components/Reveal'

function App() {
  return (
    <div className="min-h-screen bg-night font-body text-warm">
      <Nav />
      <Hero />
      <Reveal><Problem /></Reveal>
      <HowItWorks />
      <TrustArchitecture />
      <Reveal><AvailableNow /></Reveal>
      <Reveal><WhatsNext /></Reveal>
      <Reveal><MarketsTable /></Reveal>
      <Reveal><About /></Reveal>
      <Reveal><CTA /></Reveal>
      <Reveal><Waitlist /></Reveal>
      <Footer />
    </div>
  )
}

export default App