import { Link } from 'react-router-dom';
import { ReactComponent as Wellcome } from '../styles/images/wellcome.svg';

function Info() {
    return (
        <div className="user">
            <div className="page_width">
                <div className="left">
                    <h2>Wellcome to OneSubs!</h2>
                    <p>Thank you for being one of our earliest supporters! <b style={{ color: "#2174ea" }}>Soon we will launch our service, and you'll be the first to know.</b></p>
                    <p><Link to="https://forms.gle/PpahrnMJgXYCADAy7"><b style={{ color: "#2174ea" }}>Write your favourite services, and we will request them to collaborate with OneSubs.</b></Link></p>
                </div>
                <div className="right">
                    <Wellcome style={{ marginTop: '50px', maxWidth: '350px', maxHeight: '310px' }}/>
                </div>
            </div>
        </div>
    );
  }
  
  export default Info;