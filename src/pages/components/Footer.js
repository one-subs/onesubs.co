import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../styles/images/logo_blue.svg';

function Footer() {
    return (
        <footer className="footer">
            <div>
                <Link to={process.env.REACT_APP_ONESUBS}  onClick={() => window.scrollTo(0, 0)}><Logo style={{ maxWidth: '140px', maxHeight: '50px', float: 'left' }}/></Link>
                <Link to="/terms-of-use" onClick={() => window.scrollTo(0, 0)}><span style={{marginTop: "18px"}}>&copy; {new Date().getFullYear()} OneSubs</span></Link>
            </div>
            <nav className="pages">
                <Link to={`${process.env.REACT_APP_ONESUBS}/about-us`} onClick={() => window.scrollTo(0, 0)}><span>About us</span></Link>
                <Link to={`${process.env.REACT_APP_ONESUBS}/contact`} onClick={() => window.scrollTo(0, 0)}><span>Contact</span></Link>
                <Link to={`${process.env.REACT_APP_ONESUBS}/business`} onClick={() => window.scrollTo(0, 0)}><span>Become a partner</span></Link>
                <Link to={`${process.env.REACT_APP_ONESUBS}/terms-of-use`} onClick={() => window.scrollTo(0, 0)}><span>Terms of use</span></Link>
                <Link to={`${process.env.REACT_APP_ONESUBS}/privacy-policy`} onClick={() => window.scrollTo(0, 0)}><span>Privacy policy</span></Link>
                <Link to={`${process.env.REACT_APP_ONESUBS}/refund-policy`} onClick={() => window.scrollTo(0, 0)}><span>Refund policy</span></Link>
            </nav>
        </footer>
    );
}

export default Footer;
