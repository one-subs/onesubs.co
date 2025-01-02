import React, { useEffect } from 'react';
import '../../styles/description.css';
import 'aos/dist/aos.css';
import AOS from 'aos'; 
import { ReactComponent as AllInOne } from '../../styles/images/all_in_one.svg';
import { ReactComponent as Verify } from '../../styles/images/verify.svg';
import { ReactComponent as Partner } from '../../styles/images/premium.svg';

function Description() {

    useEffect(() => {
        AOS.init(); // Initialize AOS
        AOS.refresh(); // Refresh AOS in case the content changes
    }, []);

    const sectionOne = [
        <>
            <h2>One Subscription, Multiple Services</h2>
            <p>Have you ever used online web service and gotten stuck when they ask for payment? We offer you one subscription for all our partner tools.</p>
        </>,
        <AllInOne style={{ marginTop: '50px', maxWidth: '350px', maxHeight: '310px' }}/>
    ];

    const sectionTwo = [
        <>
            <h2>Enter One-time Code</h2>
            <p>Insert an access code to our partner service, and get 24 hours of access to their tools. After midnight, you can update verification code to continue or explore other tools.</p>
        </>,
        <Verify style={{ marginTop: '50px', maxWidth: '350px', maxHeight: '310px' }}/>
    ];

    const sectionThree = [
        <>
            <h2>Premium Services</h2>
            <p>Our partners are online services such as AI instruments, Data research tools, or Online editors. To access their premium tools, we offer you single subscription.</p>
        </>,
        <Partner style={{ marginTop: '50px', maxWidth: '350px', maxHeight: '310px' }}/>
    ];
    
    return (
        <>
            <div className="contents" id="overview">
                <div className="page_width">
                    <h1>What do we offer?</h1>
                    <div className="left">
                        <div data-aos="fade-right" data-aos-duration="1500">
                            {(window.innerWidth > 900) ? sectionOne[0] : sectionOne[1]}
                        </div>
                    </div>
                    <div className="right">
                        <div data-aos="fade-left" data-aos-duration="1500">
                            {(window.innerWidth > 900) ? sectionOne[1] : sectionOne[0]}
                        </div>
                    </div>
                </div>
            </div>

            <div className="contents" id="overview">
                <div className="page_width">
                    <h1>How it works?</h1>
                    <div className="left">
                        <div data-aos="fade-right" data-aos-duration="1500">
                            {sectionTwo[1]}
                        </div>
                    </div>
                    <div className="right">
                        <div data-aos="fade-left" data-aos-duration="1500">
                            {sectionTwo[0]}
                        </div>
                    </div>
                </div>
            </div>

            <div className="contents" id="overview">
                <div className="page_width">
                    <h1>Our partners</h1>
                    <div className="left">
                        <div data-aos="fade-right" data-aos-duration="1500">
                            {(window.innerWidth > 900) ? sectionThree[0] : sectionThree[1]}
                        </div>
                    </div>
                    <div className="right">
                        <div data-aos="fade-left" data-aos-duration="1500">
                            {(window.innerWidth > 900) ? sectionThree[1] : sectionThree[0]}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Description;