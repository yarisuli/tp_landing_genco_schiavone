import './Header.css'

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <button className="nav-btn">Clients</button>
        <button className="nav-btn">Graphs</button>
        <button className="nav-btn">Us</button>
        <button className="nav-btn">Support</button>
        <button className="nav-btn">Log In</button>
        <button className="nav-btn signup-btn">Sign Up</button>
      </nav>
    </header>
  )
}

export default Header
