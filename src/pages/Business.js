import React, { useState, useEffect } from 'react';
import { ReactComponent as Collab } from '../styles/images/collab.svg';
import { ReactComponent as Partner } from '../styles/images/partner.svg';
import { ReactComponent as Tools } from '../styles/images/tools.svg';
import { ReactComponent as Earnings } from '../styles/images/earnings.svg';
import { Link } from 'react-router-dom';


function Business() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 900);
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const sectionOne = [
        <Partner style={{ marginTop: '30px', maxWidth: '350px', maxHeight: '310px' }}/>,
        <>
            <h2>Why join us?</h2>
            <p>Well, in statistics, more than 90% of visitors to online service skip the payments. To address the needs of both you and your visitors, we've created a single subscription plan and share the earnings with our partners.</p>
        </>
    ];

    const sectionTwo = [
        <Tools style={{ marginTop: '50px', maxWidth: '350px', maxHeight: '310px' }}/>,
        <>
            <h2>How do people use your tool?</h2>
            <p>User enters a validation code in your pricing page. If user has the subscription, you will give an access until midnight.</p>
        </>
    ];

    const sectionThree = [
        <Collab style={{ marginTop: '50px', maxWidth: '350px', maxHeight: '310px' }}/>,
        <>
            <h2>How to inegrate with us?</h2>
            <p>We will share you an API that checks user access code. You have to imlement verification process into your web service. When API approves the user, you will give an access by 23:59 from user's time.</p>
        </>
    ];

    const sectionFour = [
        <Earnings style={{ marginTop: '70px', maxWidth: '350px', maxHeight: '310px' }}/>,
        <>
            <h2>How much you will get for your users?</h2>
            <p>You will set the original price of your service. OneSubs designed to be flexible for partners and users. We will indicate your income and transfer money to your bank account in the end of each month.</p>
        </>
    ];

    return (
        <>
            <div className="business_background">
                <h1>We're designing a new way to do business.</h1>
                {isMobile ? "" : <p>Step into a new realm of collaboration and growth. We're dedicated to forging meaningful partnerships that drive mutual success.</p>}
                <Link to={`${process.env.REACT_APP_BUSINESS}/`}><button>Start now</button></Link>
            </div>

            <div className="description">
                <div className="page_width">
                    <div className="left">
                        {isMobile ? sectionOne[0] : sectionOne[0]}
                    </div>
                    <div className="right">
                        {isMobile ? sectionOne[1] : sectionOne[1]}
                    </div>
                </div>
            </div>

            <div className="description">
                <div className="page_width">
                    {isMobile ? "" : <h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="#334155" className="bi bi-check2-circle" viewBox="0 0 16 16">
                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                        </svg>
                    </h1>}
                    <div className="left">
                        {isMobile ? sectionTwo[0] : sectionTwo[1]}
                    </div>
                    <div className="right">
                        {isMobile ? sectionTwo[1] : sectionTwo[0]}
                    </div>
                </div>
            </div>

            <div className="description">
                <div className="page_width">
                    {isMobile ? "" : <h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="#334155" className="bi bi-check2-circle" viewBox="0 0 16 16">
                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                        </svg>
                    </h1>}
                    <div className="left">
                        {isMobile ? sectionThree[0] : sectionThree[0]}
                    </div>
                    <div className="right">
                        {isMobile ? sectionThree[1] : sectionThree[1]}
                    </div>
                </div>
            </div>

            <div className="description">
                <div className="page_width">
                    {isMobile ? "" : <h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="#334155" className="bi bi-check2-circle" viewBox="0 0 16 16">
                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                        </svg>
                    </h1>}
                    <div className="left">
                        {isMobile ? sectionFour[0] : sectionFour[1]}
                    </div>
                    <div className="right">
                        {isMobile ? sectionFour[1] : sectionFour[0]}
                    </div>
                </div>
            </div>

            <div className="cta">
                <div className="page_width">
                    <h1 style={{ fontSize: "35px", color: "#2174ea" }}>Ready to join us?</h1>
                    <h1 style={{ textAlign: "center", marginBottom: "25px" }}>The smarter way to start making <span style={{color: "#10b981"}}>money</span>.</h1>
                    <p>To expand our offerings, we're looking for partners with similar services. This will allow us to provide our users with a comprehensive suite of related tools that can meet all their needs with a single subscription.</p>
                    <Link to={`${process.env.REACT_APP_BUSINESS}/`}><button style={{ backgroundColor: "#2174ea" }}>Start now</button></Link>
                </div>
            </div>
        </>
    );
}

export default Business;