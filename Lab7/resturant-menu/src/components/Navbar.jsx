import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/navbar.css'; // Assuming you save the styles in Navbar.css

function Navbar() {
    const [isMobile, setIsMobile] = useState(false);

    return (
        <nav className="navbar">
            <h1 className="logo">
                <Link to="/">Red Fork</Link>
            </h1>
            <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/services">Menu</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                <button class="button">
                    <svg class="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>
                    Explore
                    </button>

                </li>
            </ul>
            <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? <>&#10005;</> : <>&#9776;</>} {/* X for close, ☰ for menu */}
            </button>
        </nav>
    );
}

export default Navbar;
