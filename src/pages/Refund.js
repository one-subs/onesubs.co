import { Helmet } from "react-helmet";

function Rules() {
  return (
    <>
      <Helmet>
          <title>Refund policy</title>
          <meta name="description" content="This Refund Policy describes Our payment policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You." />
          <link rel="canonical" href={`${process.env.REACT_APP_ONESUBS}/privacy-policy`} />
      </Helmet>
      <div className="document">
        <div className="hat">
          <h1 style={{marginTop: "120px", color: "#FFFFFF", textAlign: "start"}}>Refund Policy for OneSubs</h1>
        </div>
        <h1>Refund Policy</h1>
        <p>Last updated November 24, 2024</p>
        <p>This Refund Policy outlines our policy regarding refunds for OneSubs.</p>
        
        <h2>General Refund Policy</h2>
        <p>All sales are final. Refunds may only be issued under exceptional circumstances, such as technical issues, accidental duplicate purchases, or billing errors, and are subject to review. If approved, refunds will be processed within 5-7 business days and credited back to the original payment method.</p>

        <h2>Non-Refundable</h2>
        <ul>
          <li>
            <p><strong>Subscriptions already consumed during the billing cycle</strong></p>
          </li>
        </ul>
        <p>This refund policy complies with applicable consumer protection laws and regulations.</p>

        <h2>Contact Us</h2>
        <p>If you have any questions concerning our refund policy, please contact us:</p>
        <ul style={{marginBottom: "50px"}}>
          <li>By email: support@onesubs.co</li>
        </ul>

        <p><strong>Please note: </strong>We reserve the right to modify this Refund Policy at any time. Any changes will be effective immediately upon posting on our website.</p>

      </div>
    </>
  );
}

export default Rules;