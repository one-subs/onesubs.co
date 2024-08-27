import React from 'react';
import { ReactComponent as AllInOne } from '../../styles/images/all_in_one.svg';
import { ReactComponent as Verify } from '../../styles/images/verify.svg';
import { ReactComponent as Partner } from '../../styles/images/premium.svg';

function Description() {

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
            <p>Insert an access code to our partner service, and get access to their tools until 23:59. After midnight, you can update verification code to continue or explore other tools.</p>
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
            <div className="description" id="overview">
                <div className="page_width">
                    <h1>What do we offer?</h1>
                    <div className="left">
                        {(window.innerWidth > 900) ? sectionOne[0] : sectionOne[1]}
                    </div>
                    <div className="right">
                        {(window.innerWidth > 900) ? sectionOne[1] : sectionOne[0]}
                    </div>
                </div>
            </div>

            <div className="description" id="overview">
                <div className="page_width">
                    <h1>How it works?</h1>
                    <div className="left">
                        {sectionTwo[1]}
                    </div>
                    <div className="right">
                        {sectionTwo[0]}
                    </div>
                </div>
            </div>

            <div className="description" id="overview">
                <div className="page_width">
                    <h1>Our partners</h1>
                    <div className="left">
                        {(window.innerWidth > 900) ? sectionThree[0] : sectionThree[1]}
                    </div>
                    <div className="right">
                        {(window.innerWidth > 900) ? sectionThree[1] : sectionThree[0]}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Description;