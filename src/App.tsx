import Nav from './components/Nav'
import Hero from './components/Hero'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import TrustArchitecture from './components/TrustArchitecture'
import AvailableNow from './components/AvailableNow'
import WhatsNext from './components/WhatsNext'
import MarketsTable from './components/MarketsTable'
import { About, CTA } from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-night font-body text-warm">
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <TrustArchitecture />
      <AvailableNow />
      <WhatsNext />
      <MarketsTable />
      <About />
      <CTA />
      <Footer />
    </div>
  )
}

export default App