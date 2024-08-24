import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function Landing() {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 900);
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="landing_page" id="landing">
            <div className="page_width">
                <div className="wellcome">
                    <h1>All-in-one subscription for premium services</h1>
                    <p>Simplify your online life with our single subscription solution.</p>
                    <Link to={`${process.env.REACT_APP_USER}/`}><button className="button_1">Get started</button></Link>
                    <button className="button_2" onClick={() => navigate("/Services")}>Explore services</button>
                </div>
                {isMobile ? "" : <div className="wellcome">
                    <div className="outline"/>
                    <div className="card">
                        <h2>From $15/mo</h2>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10b981" className="bi bi-check-lg" viewBox="0 0 16 9" style={{ marginRight: "8px" }}>
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                            </svg>
                            Access for various services</p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10b981" className="bi bi-check-lg" viewBox="0 0 16 9" style={{ marginRight: "8px" }}>
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                            </svg>
                            Use until midnight</p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10b981" className="bi bi-check-lg" viewBox="0 0 16 9" style={{ marginRight: "8px" }}>
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                            </svg>
                            Update access after 23:59</p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10b981" className="bi bi-check-lg" viewBox="0 0 16 9" style={{ marginRight: "8px" }}>
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                            </svg>
                            Or use another service</p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10b981" className="bi bi-check-lg" viewBox="0 0 16 9" style={{ marginRight: "8px" }}>
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                            </svg>
                            Five different service tiers</p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10b981" className="bi bi-check-lg" viewBox="0 0 16 9" style={{ marginRight: "8px" }}>
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                            </svg>
                            Tiers: S, M, L, XL and XXL</p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10b981" className="bi bi-check-lg" viewBox="0 0 16 9" style={{ marginRight: "8px" }}>
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                            </svg>
                            Flexible subscription options</p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10b981" className="bi bi-check-lg" viewBox="0 0 16 9" style={{ marginRight: "8px" }}>
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                            </svg>
                            Affordable prices for everyone</p>
                    </div>    
                </div>}
            </div>
        </div>
    );
}

export default Landing;