import blue from '../styles/images/onesubs-logo-blue.png';
import white from '../styles/images/onesubs-logo-white.png';

function Rules() {
  return (
    <>
      <div className="document">
        <div className="hat">
          <h1 style={{marginTop: "120px", color: "#FFFFFF", textAlign: "start"}}>OneSubs for Business</h1>
        </div>
          <p>Join our platform and start earning by offering your services to our users. We handle the marketing and user acquisition—you focus on delivering great service.</p>
          <h2>How It Works</h2>
          <h3>Earn Revenue</h3>
          <p>• Set the original price of your platform per user per day, no more and not too less. OneSubs price range is from $0.04 - $3.33.</p>
          <p>• <b>Example:</b> if your service costs $19 per month, remove payment fee ~5%, and divide by 30. You will get ~$0.6, and this is your price at OneSubs per user per day.</p>
          <h3>Integration</h3>
          <p>• We will share you only one POST API to approve the user to use your service.</p>
          <p>• You can place it in your pricing page, describing what benefits user can get with OneSubs.</p>
          <p>• On that description, you are required to place the OneSubs <a href={blue} download="onesubs-logo-blue.png" style={{ color: "#334155" }}>Blue</a> or <a href={white} download="onesubs-logo-white.png" style={{ color: "#334155" }}>White</a> logo with redirect on click.</p>
          
          <h2>What We Need From You</h2>
          <p>To activate your service, we’ll need the following basic information:</p>
          <p><b>Company Information:</b> Legal business name, Registration number, Tax identification number, Company address, Company contact information.</p>
          <p><b>Bank Information:</b> Bank country (should be the as company located country), Bank name, Bank account number, or iban if applicable, and swift code.</p>
          <h2>Get Started Today</h2>
          <p>Ready to partner with us?</p>
          <p style={{marginBottom: "50px"}}><a href={process.env.REACT_APP_BUSINESS} style={{ color: "#334155" }}>Sign up</a> now or contact us at <a href="mailto:business@onesubs.co" style={{ color: "#334155" }}>business@onesubs.co</a> to learn more and start the application process.</p>
      </div>
    </>
  );
}

export default Rules;