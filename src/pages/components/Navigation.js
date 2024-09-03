import React, { useState, useEffect } from "react";
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

    const menuIcon = (
        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
    );

    const closeIcon = (
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
    );

    const desktopMenu = (
        <div className="pages">
            <Link to="/overview"><span>Overview</span></Link>
            <Link to="/services"><span>Services</span></Link>
            <Link to="/pricing"><span>Pricing</span></Link>
            <Link to="/business"><span>Business</span></Link>
            <Link to="/account"><span>Account</span></Link>
        </div>
    );

    const mobileMenu = (
        <div className="menu">
            <div className="pages">
                <Link to="/overview"><span onClick={() => setDisplay(false)}>Overview</span></Link>
                <Link to="/services"><span onClick={() => setDisplay(false)}>Services</span></Link>
                <Link to="/pricing"><span onClick={() => setDisplay(false)}>Pricing</span></Link>
                <Link to="/business"><span onClick={() => setDisplay(false)}>Business</span></Link>
            </div>
            <div className="pages">
                <Link to="/account"><span onClick={() => document.body.style.overflowY="auto"}>Account</span></Link>
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
                <>
                    <svg 
                        onClick={() => setDisplay(!display)} 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="35" 
                        height="35" 
                        fill="#64748b" 
                        className="bi bi-list" 
                        viewBox="0 0 16 16"
                        aria-label={display ? "Close menu" : "Open menu"}
                        role="button"
                    >
                        {display ? closeIcon : menuIcon}
                    </svg>
                    {display && mobileMenu}
                </>
            ) : (
                desktopMenu
            )}
        </nav>
    );
}

export default Navigation;
