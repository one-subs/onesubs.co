import blue from '../styles/images/onesubs-logo-blue.png';
import white from '../styles/images/onesubs-logo-white.png';

function Rules() {
  return (
    <>
      <div className="document">
        <div className="hat">
          <h1 style={{marginTop: "120px", color: "#FFFFFF", textAlign: "start"}}>OneSubs Business Account Rules and Policy</h1>
        </div>
          <h2>Welcome to OneSubs!</h2>
          <p>By activating your business account with OneSubs, you agree to the following rules and policies. These guidelines are designed to ensure a seamless and mutually beneficial partnership.</p>
          <h2>1. Account Activation</h2>
          <p>• <b>Verification:</b> Upon activation, you must verify your email and provide accurate information about your business.</p>
          <p>• <b>Initial Setup:</b> Complete the initial setup process, including any necessary integrations with your services.</p>
          <h2>2. Service Integration</h2>
          <p>• <b>Technical Requirements:</b> Ensure your services meet OneSubs technical requirements for integration.</p>
          <p>- Place OneSubs Logo with redirect button to https://onesubs.co in your OneSubs integrated component. Click <a href={blue} download="onesubs-logo-blue.png" style={{ color: "#334155" }}>Blue</a> or <a href={white} download="onesubs-logo-white.png" style={{ color: "#334155" }}>White</a> to download PNG logo.</p>
          <h2>3. Revenue Sharing</h2>
          <p>• <b>Payment Terms:</b> OneSubs will distribute payments based on the agreed revenue-sharing model (e.g., $0.04 per user per day or $3.33 per user per month).</p>
          <p>• <b>Your Service Price:</b> Make sure your service price per user per day is close to the original price, no more and not too less.</p>
          <p>• <b>Reporting:</b> We will send you an email about your bank account details. You have to approve provided informations.</p>
          <h2>4. User Experience</h2>
          <p>• <b>Service Quality:</b> Maintain high service quality and user experience for OneSubs subscribers. <b>Share access to the premium service, which is not free to use.</b></p>
          <h2>5. Compliance</h2>
          <p>• <b>Legal Compliance:</b> Ensure your service complies with all applicable laws and regulations.</p>
          <p>• <b>Policy Adherence:</b> Adhere to OneSubs policies and guidelines at all times.</p>
          <h2>6. Changes and Updates</h2>
          <p>• <b>Policy Changes:</b> OneSubs reserves the right to update these rules and policies. You will be notified of any changes, and continued use of your business account constitutes acceptance of the updated terms.</p>
          <p>• <b>Service Improvements:</b> As part of our commitment to improving the platform, you may be required to implement minor changes or updates to your service.</p>
          <h2>7. Termination</h2>
          <p>• <b>Account Suspension:</b> OneSubs reserves the right to suspend or terminate accounts that violate these rules and policies.</p>
          <p>• <b>Voluntary Termination:</b> You may terminate your account by providing written notice to OneSubs. Upon termination, you must cease all use of OneSubs platform and services.</p>
          
          <h2>Acceptance of Future Changes</h2>
          <p>By activating your business account, you acknowledge and accept that OneSubs may periodically update these rules and policies to reflect new features, improvements, or changes in legal requirements. You agree to comply with any such updates and understand that continued use of the OneSubs platform constitutes acceptance of the updated terms.</p>
          
          <h2>Contact Us</h2>
          <p style={{marginBottom: "50px"}}>If you have any questions or need assistance, please contact us at business@onesubs.com.</p>
      </div>
    </>
  );
}

export default Rules;