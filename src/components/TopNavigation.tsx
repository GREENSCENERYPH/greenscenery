import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

function TopNavigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const [activePath, setActivePath] = useState(location.pathname);

    useEffect(() => {
        setActivePath(location.pathname);
    }, [location.pathname]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='top-navigation-section'>
            <nav>
                <div className="top-navigation">
                    <div>
                        <Link to="/">
                            <img className='logo' alt="Green Scenery Logo" src="../assets/images/logo-no-bg.png"/>
                        </Link>
                    </div>
                    <div className={`top-menu ${isMenuOpen ? 'open-menu-mobile' : ''}`}>
                        <div><Link to="/About" className={activePath === '/About' ? 'active' : ''}>ABOUT US</Link></div>
                        <div><Link to="/WhatsGrowing" className={activePath === '/WhatsGrowing' ? 'active' : ''}>WHAT'S GROWING</Link></div>
                        <div><Link to="/Faq" className={activePath === '/Faq' ? 'active' : ''}>FAQ</Link></div>
                        <div><Link to="/Contact" className={activePath === '/Contact' ? 'active' : ''}>CONTACT</Link></div>
                        <div><Link to="/Blog" className={activePath === '/Blog' ? 'active' : ''}>BLOG</Link></div>
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