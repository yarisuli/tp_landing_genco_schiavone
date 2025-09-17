import './Header.css'

function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        // behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <button className="nav-btn" onClick={() => scrollToSection('comment-carousel-section')}>Clients</button>
        <button className="nav-btn" onClick={() => scrollToSection('new-section')}>Graphs</button>
        <button className="nav-btn" onClick={() => scrollToSection('footer-section')}>Us</button>
        <button className="nav-btn" onClick={() => scrollToSection('footer-section')}>Support</button>
        <button className="nav-btn">Log In</button>
        <button className="nav-btn signup-btn">Sign Up</button>
      </nav>
    </header>
  )
}

export default Header
