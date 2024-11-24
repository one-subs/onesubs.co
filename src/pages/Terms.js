import { Helmet } from "react-helmet";

function Terms() {
  return (
    <>
      <Helmet>
          <title>Terms of use</title>
          <meta name="description" content="These Terms of Use govern your access to and use of our all-in-one subscription service for premium online tools and services. By accessing or using our services, you agree to comply with and be bound by these terms." />
          <link rel="canonical" href={`${process.env.REACT_APP_ONESUBS}/terms-of-use`} />
      </Helmet>
      <div className="document">
        <div className="hat">
          <h1 style={{marginTop: "120px", color: "#FFFFFF", textAlign: "start"}}>Terms of use</h1>
        </div>
          <p><b>Effective Date:</b> August 10, 2024</p>
          <h2>1. Introduction</h2>
          <p>Welcome to OneSubs. These Terms of Use govern your access to and use of our all-in-one subscription service for premium online tools and services. By accessing or using our services, you agree to comply with and be bound by these terms.</p>
          <h2>2. Acceptance of Terms</h2>
          <p>By creating a user or business account and using our services, you agree to these Terms of Use. If you do not agree, please do not use our services.</p>
          <h2>3. Changes to Terms</h2>
          <p>We may revise these terms at any time. Continued use of our services after changes are made constitutes your acceptance of the new terms.</p>
          <h2>4. User Responsibilities</h2>
          <p>• <b>Compliance:</b> Users must comply with all applicable laws and regulations.</p>
          <p>• <b>Account Security:</b> Users are responsible for maintaining the security of their account and must use their own email and payment cards.</p>
          <h2>5. Use of Service</h2>
          <p>• <b>Permitted Use:</b> OneSubs provides a subscription service that allows users to access multiple premium online tools and services with one subscription.</p>
          <p>• <b>Prohibited Actions:</b> Any form of hacking, fraudulent activity, or abnormal use is strictly prohibited. Users found violating these terms may have their accounts suspended or terminated.</p>
          <h2>6. Account Creation</h2>
          <p>Users and partners must create an account to use our services.</p>
          <p>• From users, we collect only email and encrypted password, but not credit or debit cards.</p>
          <p>• From partners, we collect email, encrypted password, service name, website, service description, logo url link and Business information. In Busines infomation we ask legal business name, registration number, tax identification number, company address information, company contact information, and bank information.</p>
          <h2>7. Information Use and Privacy</h2>
          <p>• <b>User Information:</b> We use user information to identify them when using partner services and to facilitate payment distribution to partners.</p>
          <p>• <b>Partner Information:</b> We use partner information to manage visitor access and payments.</p>
          <p>• <b>Third-Party Services:</b> We use Stripe for subscription payments and Google OAuth for authentication. We do not share user information with partners.</p>
          <h2>8. Warranties and Guarantees</h2>
          <p>Users and partners will receive the services and benefits as described on our website and in our contracts. We strive to ensure the accuracy and reliability of our service descriptions.</p>
          <h2>9. User-Generated Content</h2>
          <p>We value user feedback and will treat comments and suggestions shared on social networks with understanding, using them to improve our services.</p>
          <h2>10. Termination of Service</h2>
          <p>If we detect misuse or fraudulent activity, we will notify the user and may block their subscription. Partners must also comply with these terms to avoid termination of their accounts.</p>
          <h2>11. Governing Law and Jurisdiction</h2>
          <p>This Agreement shall be governed by and construed in accordance with the laws of the Kyrgyz Republic. Any dispute arising out of or in connection with this Agreement shall be subject to the exclusive jurisdiction of the courts of the Kyrgyz Republic.</p>
          <h2>12. Contact Information</h2>
          <p>For support or any questions, users can email our support team at support@onesubs.co as well as for partners business@onesubs.co. In the future, we plan to integrate AI to assist our users more efficiently.</p>
          <h2>13. Final Provisions</h2>
          <p>These Terms of Use constitute the entire agreement between you and OneSubs regarding the use of our services. If any part of these terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.</p>
          <h2>14. Legal Information</h2>
          <p>This agreement is entered into by Omurzak Keldibekov, the account owner and operator of this service.</p>
          <p style={{marginBottom: "50px"}}><strong>Email: </strong>omurzak.keldibek@gmail.com</p>
          </div>
    </>
  );
}

export default Terms;