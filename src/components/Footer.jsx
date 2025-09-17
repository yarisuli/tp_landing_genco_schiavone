import React from 'react';
import ContactForm from './ContactForm';
import './Footer.css';

const Footer = () => {
  return (
    <div id="footer-section" className="footer-section">
      <div className="footer-content">
        <div className="logo-section">
          <div className="main-logo">
            <div className="logo-placeholder">
              <img src="/logodhc.png"/>
            </div>
          </div>
          <div className="mini-logos">
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank" rel="noopener noreferrer" className="mini-logo-link">
              <div className="mini-logo">
                <img src="ig.png" alt="Instagram" /> 
              </div>
            </a>
            <a href="https://youtu.be/6_hl8AB7Uf0?si=HHgVwiO5Ld6c6aS7" target="_blank" rel="noopener noreferrer" className="mini-logo-link">
              <div className="mini-logo">
                <img src="telegram.png" alt="Telegram" /> 
              </div>
            </a>
            <a href="https://youtu.be/NATSpYWERIE?si=2VPFp8fr7sk7B99Z" target="_blank" rel="noopener noreferrer" className="mini-logo-link">
              <div className="mini-logo">
                <img src="gmail.png" alt="Gmail" /> 
              </div>
            </a>
          </div>
        </div>
        <div className="contact-section">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Footer;
