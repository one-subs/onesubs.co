import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos'; 
import { ReactComponent as Contract } from '../../styles/images/contract.svg';
import { Link } from 'react-router-dom';

function Business() {

    useEffect(() => {
        AOS.init(); // Initialize AOS
        AOS.refresh(); // Refresh AOS in case the content changes
    }, []);

    return (
        <div className="description">
            <div className="page_width">
                <h1>Become a partner</h1>
                <div className="left">
                    <div data-aos="fade-right" data-aos-duration="1500">
                        <Contract style={{ marginTop: '70px', maxWidth: '350px', maxHeight: '310px' }}/>
                    </div>
                </div>
                <div className="right">
                    <div data-aos="fade-left" data-aos-duration="1500">
                        <p style={{marginTop: "80px", color: "#1e293b"}}>You have an online service? Let's become a partner and earn money together! Check our <Link to="/business" style={{ textDecoration: 'none', color: '#1e293b' }} onClick={() => window.scrollTo(0, 0)}><u style={{cursor: "pointer"}}>Business</u></Link> page or <Link to="/contact" style={{ textDecoration: 'none', color: '#1e293b' }} onClick={() => window.scrollTo(0, 0)}><u style={{cursor: "pointer"}}>Contact</u></Link> us directly.</p>
                        <p style={{marginTop: "80px", color: "#1e293b"}}>Support us and collab, we promise to give you more than you think.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Business;