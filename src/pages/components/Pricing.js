import '../../styles/pricing.css';

function Pricing({ bottom }) {
  return (
    <div className="pricing" style={{ marginBottom: bottom }} id="pricing">
        <div className="page_width">
            <h1>Find the right plan for your creativity</h1>
            <p className="description">Get access for several types of services S, M, L, XL, or XXL.</p>
            <div className="price_list">
                <div className="card">
                    <h1>S</h1>
                    <p>(one S tier/24 hours)</p>
                    <span className="price">$15</span><span className="month">/mo</span>
                    <Link to="/account">
                        <button class="button">
                            <span class="button-content">Get started!</span>
                        </button>
                    </Link>
                </div>
                <div className="card">
                    <h1>M</h1>
                    <p>(one M, two S)</p>
                    <span className="price">$21</span><span className="month">/mo</span>
                    <Link to="/account">
                        <button class="button">
                            <span class="button-content">Get started!</span>
                        </button>
                    </Link>
                </div>
                <div className="card">
                    <h1>L</h1>
                    <p>(1L, 2M, 4S)</p>
                    <span className="price">$36</span><span className="month">/mo</span>
                    <Link to="/account">
                        <button class="button">
                            <span class="button-content">Get started!</span>
                        </button>
                    </Link>
                </div>
                <div className="card">
                    <h1>XL</h1>
                    <p>(XL, 2L, 4M, 8S)</p>
                    <span className="price">$69</span><span className="month">/mo</span>
                    <Link to="/account">
                        <button class="button">
                            <span class="button-content">Get started!</span>
                        </button>
                    </Link>
                </div>
                <div className="card">
                    <h1>XXL</h1>
                    <p>(XXL, XL, 3L, 6M, 13S)</p>
                    <span className="price">$115</span><span className="month">/mo</span>
                    <Link to="/account">
                        <button class="button">
                            <span class="button-content">Get started!</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Pricing;