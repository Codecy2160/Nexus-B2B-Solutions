export default function Navbar() {
  return (
    <nav>
      <div className="wrap nav-inner">
        <a className="brand" href="/#top">NexusTech</a>
        <ul className="nav-links">
          <li className="hide-mobile"><a href="/#demo">Calculator</a></li>
          <li className="hide-mobile"><a href="/#pricing">Tiers</a></li>
          <li><a className="nav-cta" href="/pricing-signup">Get Started</a></li>
        </ul>
      </div>
    </nav>
  )
}
