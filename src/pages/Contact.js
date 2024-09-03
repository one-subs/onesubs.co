import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Contact() {
    return (
        <>
            <Helmet>
                <title>Contact</title>
                <meta name="description" content="At OneSubs, we value our users and partners. Whether you have a question, need assistance, or want to provide feedback, our team is here to support you." />
                <link rel="canonical" href={`${process.env.REACT_APP_ONESUBS}/contact-us`} />
            </Helmet>
            <div className="document">
            <div className="hat">
                <h1>Contact us</h1>
            </div>
                <h2>We’re Here to Help</h2>
                <p>At OneSubs, we value our users and partners. Whether you have a question, need assistance, or want to provide feedback, our team is here to support you.</p>
                <h2>How to Reach Us?</h2>
                <h2>Customer Support</h2>
                <p>• <b>Email:</b> support@onesubs.net</p>
                <p>• <b>Response Time:</b> We strive to respond to all inquiries within 24 hours on business days.</p>
                <h2>Business Inquiries</h2>
                <p>• <b>Partnerships and partner support:</b> business@onesubs.net</p>
                <h2>Follow Us</h2>
                <p>Stay updated with the latest news, updates, and special offers by following us on social media.</p>
                <h2>Social Network</h2>
                <p>• <b>Instagram:</b> <Link to="https://www.instagram.com/onesubs/"><u style={{color: "#334155"}}>onesubs</u></Link></p>
                <p>• <b>TikTok:</b> <Link to="https://www.tiktok.com/@onesubs/"><u style={{color: "#334155"}}>onesubs</u></Link></p>
                <p>• <b>LinkedIn:</b> <Link to="https://www.linkedin.com/company/onesubs/"><u style={{color: "#334155"}}>onesubs</u></Link></p>
                <h2>Future Plans</h2>
                <p>We are continuously working to improve our support services. Soon, we will integrate AI to provide instant assistance and enhance your experience with OneSubs.</p>
                <h2>Thank You for Choosing OneSubs</h2>
                <p style={{marginBottom: "50px"}}>We appreciate your interest and support. We are committed to providing you with the best possible service and look forward to helping you make the most of OneSubs.</p>
            </div>
        </>
    );
}

export default Contact;