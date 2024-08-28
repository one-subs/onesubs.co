import { Link } from "react-router-dom";

function Cta() {
    return (
        <div className="cta">
            <div className="page_width">
                <h1 style={{ fontSize: "35px" }}>Interested?</h1>
                <h1 style={{ textAlign: "center", marginBottom: "25px", color: "#2174ea", fontFamily: "Playfair Display, serif" }}>Sign up to stay updated about Subscription Launch!</h1>
                <p>We are actively seeking to partner with leading online service providers across various industries. By joining us, you'll boost our productivity and speed.</p>
                <Link to="/account"><button>Start now</button></Link>
            </div>
        </div>
    );
}

export default Cta;