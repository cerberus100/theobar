import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar-strict">
            <div className="container nav-container-strict">
                <Link to="/" className="nav-logo-strict" onClick={closeMenu}>
                    The "O" Bar
                </Link>

                {/* Mobile hamburger button */}
                <button
                    className={`nav-hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className={`nav-content-right ${isMenuOpen ? 'active' : ''}`}>
                    <div className="nav-links-strict">
                        <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>Home</Link>
                        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={closeMenu}>About</Link>
                        <Link to="/menu" className={location.pathname === '/menu' ? 'active' : ''} onClick={closeMenu}>Menu</Link>
                        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={closeMenu}>Contact</Link>
                    </div>
                    <a href="/contact#map" className="nav-cta-strict" onClick={closeMenu}>Get Directions</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
