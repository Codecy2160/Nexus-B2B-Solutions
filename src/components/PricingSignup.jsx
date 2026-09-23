import Navbar from './Navbar.jsx'
import PricingTable from './PricingTable.jsx'

export default function PricingSignup() {
  return (
    <>
      <Navbar />
      <main className="signup-page">
        <section className="signup-intro">
          <div className="wrap">
            <p className="eyebrow">NexusTech plans</p>
            <h1>Choose your plan, then get moving.</h1>
            <p className="sub">Start with a 14-day free trial. No credit card required.</p>
          </div>
        </section>

        <section className="signup-content">
          <div className="wrap signup-grid">
            <div>
              <h2>Compare plans</h2>
              <PricingTable showCta={false} />
            </div>
            <form className="signup-form" onSubmit={(event) => event.preventDefault()}>
              <h2>Start your free trial</h2>
              <label htmlFor="name">Full name</label>
              <input id="name" name="name" type="text" autoComplete="name" required />
              <label htmlFor="email">Work email</label>
              <input id="email" name="email" type="email" autoComplete="email" required />
              <label htmlFor="company">Company name</label>
              <input id="company" name="company" type="text" autoComplete="organization" required />
              <button className="cta-button" type="submit">Create account</button>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}