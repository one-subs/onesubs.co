import React, { useState, useEffect } from "react";
import '../../styles/navigation.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../styles/images/logo_blue.svg';

function Navigation() {

    const [display, setDisplay] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 900);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        document.body.style.overflowY = display ? "hidden" : "auto";
    }, [display]);

    const desktopMenu = (
        <div className="pages">
            <Link to="/services"><span>Services</span></Link>
            <a href={`${process.env.REACT_APP_ONESUBS}/#pricing`}><span>Pricing</span></a>
            <Link to="/business"><span>Business</span></Link>
            <Link to="/account"><span>Account</span></Link>
        </div>
    );

    const mobileMenu = (
        <div className="menu">
            <div className="pages">
                <Link to="/services"><span onClick={() => setDisplay(false)}>Services</span></Link>
                <a href={`${process.env.REACT_APP_ONESUBS}/#pricing`}><span onClick={() => setDisplay(false)}>Pricing</span></a>
                <Link to="/business"><span onClick={() => setDisplay(false)}>Business</span></Link>
            </div>
            <div className="pages">
                <Link to="/account"><span onClick={() => document.body.style.overflowY="auto"}>Account</span></Link>
            </div>
            <div className="pages">
                <Link to="/contact"><span onClick={() => setDisplay(false)}>Contact</span></Link>
                <Link to="/about-us"><span onClick={() => setDisplay(false)}>About us</span></Link>
                <Link to="/terms-of-use"><span onClick={() => setDisplay(false)}>Terms of use</span></Link>
                <Link to="/privacy-policy"><span onClick={() => setDisplay(false)}>Privacy policy</span></Link>
            </div>
        </div>
    );

    return (
        <nav className="navbar">
            <Link to={process.env.REACT_APP_ONESUBS}>
                <Logo style={{ maxWidth: '140px', maxHeight: '50px' }}/>
            </Link>
            {isMobile ? (
                <label className="hamburger">
                    <input type="checkbox" checked={display} onChange={() => setDisplay(!display)}/>
                    <svg viewBox="0 0 30 30" width="40" height="40" >
                        <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                        <path className="line" d="M7 16 27 16"></path>
                    </svg>
                    {display && mobileMenu}
                </label>
            ) : (
                desktopMenu
            )}
        </nav>
    );
}

export default Navigation;