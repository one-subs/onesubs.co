import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/landing.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

function Landing() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

    useEffect(() => {
        AOS.init(); // Initialize AOS
        AOS.refresh(); // Refresh AOS in case the content changes
    }, []);
    
    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 900);
        };
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return (
        <div className="landing">
            <div className="page_width">
                <div className="wellcome">
                    <div data-aos={isMobile ? "" : "fade-right"} data-aos-duration="1500">
                        <h1>All-in-one subscription for premium apps</h1>
                        <div className="card">
                            <div className="description">
                                <p>Get access to</p>
                                <div className="words">
                                    <span className="word">Online editors</span>
                                    <span className="word">AI instruments</span>
                                    <span className="word">Design apps</span>
                                    <span className="word">Research tools</span>
                                    <span className="word">Marketing tools</span>
                                    <span className="word">Entertainments</span>
                                    <span className="word">Online editors</span>
                                </div>
                            </div>
                        </div>
                        <Link to="/account/create-account"><button className='start_button'>Sign up for early access!</button></Link>
                    </div>
                </div>
                {isMobile ? "" : <div className="banner">
                    <div data-aos="fade-left" data-aos-duration="1500">
                        <Link to="/account" style={{ textDecoration: 'none' }}>
                            <div className="card">
                                <div className="card-content">
                                    <p className="card-title">save your money!</p>
                                    <p className="card-para">Get access with one subscription card for multiple services.</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>}
            </div>
        </div>
    );
}

export default Landing;