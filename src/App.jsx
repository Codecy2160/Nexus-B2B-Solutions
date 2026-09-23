import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ROICalculator from './components/ROICalculator.jsx'
import PricingTable from './components/PricingTable.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <section id="demo">
        <div className="wrap">
          <h2>What would you save?</h2>
          <p className="lead">Move the sliders to match your team. The estimate updates as you go.</p>
          <ROICalculator />
        </div>
      </section>
      <section id="pricing">
        <div className="wrap">
          <h2>Pick the right tier</h2>
          <p className="lead">Both tiers run on the same core system — Growth adds automation for multi-branch teams.</p>
          <PricingTable />
        </div>
      </section>
      <footer>
        <div className="wrap">
          <p>Course activity build, scoped from a larger promotional case study.</p>
        </div>
      </footer>
    </>
  )
}
