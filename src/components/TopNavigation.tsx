import React, { useState } from 'react';

function TopNavigation() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

  return (
    <div className='top-navigation-section'>
      <nav>
        <div className="top-navigation">
          <div>
            <a href="/">
              <img className='logo' alt="Green Scenery Logo" src="../assets/images/logo-no-bg.png"/>  
            </a>
          </div>
          <div className={`top-menu ${isMenuOpen ? 'open-menu-mobile' : ''}`}>
            <div><a href="/About">ABOUT US</a></div>
            <div><a href="/WhatsGrowing">WHAT'S GROWING</a></div>
            <div><a href="/Faq">FAQ</a></div>
            <div><a href="/Contact">CONTACT</a></div>
            <div><a href="/Blog">BLOG</a></div>
          </div>
          <div className="burger-menu" onClick={toggleMenu}>
            <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default TopNavigation;