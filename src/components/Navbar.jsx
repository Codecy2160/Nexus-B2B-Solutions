export default function Navbar() {
  return (
    <nav>
      <div className="wrap nav-inner">
        <a className="brand" href="#top">NexusTech</a>
        <ul className="nav-links">
          <li className="hide-mobile"><a href="#demo">Calculator</a></li>
          <li className="hide-mobile"><a href="#pricing">Pricing</a></li>
          <li><a className="nav-cta" href="#demo">Try it</a></li>
        </ul>
      </div>
    </nav>
  )
}
