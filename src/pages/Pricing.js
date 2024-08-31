import React, { useState, useEffect } from "react";
import { price, date } from "../calculator";
import { Link } from 'react-router-dom';

function Pricing({ more }) {
    const [days, setDays] = useState("5");
    const [subscription, setSubscription] = useState('Basic');
    const [amount, setAmount] = useState("1");
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 900);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function floatToIntIfDecimal(num) {
        const numStr = num.toString();
        return numStr.endsWith(".00") ? parseInt(numStr, 10) : num;
    }
    

    return (
        <div className="pricing">
            <div className="page_width">
                <h1>Find the right plan for your creativity</h1>
                {isMobile ? "" :
                    <p>Explore our variety of plans designed to cater to different needs and budgets. Choose the one that aligns best with your goals.
                        {(more) ? <></> : <> To see more plans check our <Link to="/pricing" style={{ color: '#94a3b8' }} onClick={() => window.scrollTo(0, 0)}>Pricing</Link> page.</>}</p>}
                <div className="price_list">

                    <div className="card" style={{ height: '400px' }}>
                        <h3>Basic</h3>
                        <div className="price">
                            <span className="symbol">$</span><span className='number'>{floatToIntIfDecimal(price("Basic", 30))}</span><span className="month">/mo</span>
                        </div>
                        <p style={{ paddingBottom: '10px', borderBottom: '1px solid #64748b' }}>This subscription inclused only services in S tier.</p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10b981" className="bi bi-check-lg" viewBox="0 0 16 9" style={{ marginRight: "8px" }}>
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                            </svg>
                            One access for S services</p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10b981" className="bi bi-check-lg" viewBox="0 0 16 9" style={{ marginRight: "8px" }}>
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                            </svg>
                            Various tools everyday</p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10b981" className="bi bi-check-lg" viewBox="0 0 16 9" style={{ marginRight: "8px" }}>
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                            </svg>
                            Update your access after 23:59</p>
                        <Link to="/account">
                            <button style={{ marginTop: '69px' }}>Sign up</button>
                        </Link>
                    </div>
                    
                    <div className="card" style={{ height: '400px' }}>
                        <h3>Standard</h3>
                        <div className="price">
                            <span className="symbol">$</span><span className='number'>{floatToIntIfDecimal(price("Standard", 30))}</span><span className="month">/mo</span>
                        </div>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10b981" className="bi bi-check-lg" viewBox="0 0 16 9" style={{ marginRight: "8px" }}>
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                            </svg>
                            Two accesses for S services</p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10b981" className="bi bi-check-lg" viewBox="0 0 16 9" style={{ marginRight: "8px" }}>
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                            </svg>
                            One access for M services</p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10b981" className="bi bi-check-lg" viewBox="0 0 16 9" style={{ marginRight: "8px" }}>
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                            </svg>
                            Various tools everyday</p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10b981" className="bi bi-check-lg" viewBox="0 0 16 9" style={{ marginRight: "8px" }}>
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                            </svg>
                            Update your access after 23:59</p>
                        <Link to="/account">
                            <button style={{ marginTop: '98px' }}>Sign up</button>
                        </Link>
                    </div>
                    
                    <div className="card" style={{ height: '400px' }}>
                        <h3>Premium</h3>
                        <div className="price">
                            <span className="symbol">$</span><span className='number'>{floatToIntIfDecimal(price("Premium", 30))}</span><span className="month">/mo</span>
                        </div>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10b981" className="bi bi-check-lg" viewBox="0 0 16 9" style={{ marginRight: "8px" }}>
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                            </svg>
                            Four accesses for S services</p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10b981" className="bi bi-check-lg" viewBox="0 0 16 9" style={{ marginRight: "8px" }}>
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                            </svg>
                            Two accesses for M services</p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10b981" className="bi bi-check-lg" viewBox="0 0 16 9" style={{ marginRight: "8px" }}>
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                            </svg>
                            One access for L services</p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10b981" className="bi bi-check-lg" viewBox="0 0 16 9" style={{ marginRight: "8px" }}>
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                            </svg>
                            Mix between tiers</p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10b981" className="bi bi-check-lg" viewBox="0 0 16 9" style={{ marginRight: "8px" }}>
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                            </svg>
                            Various tools everyday</p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10b981" className="bi bi-check-lg" viewBox="0 0 16 9" style={{ marginRight: "8px" }}>
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                            </svg>
                            Update your access after 23:59</p>
                        <Link to="/account">
                            <button>Sign up</button>
                        </Link>
                    </div>
                    
                </div>
                
                {(more) ?
                <div className="price_list" style={{ marginTop: '100px' }}>

                    <div className="card" style={{ height: '490px' }}>
                        <h3>Pro</h3>
                        <div className="price">
                            <span className="symbol">$</span><span className='number'>{floatToIntIfDecimal(price("Pro", 30))}</span><span className="month">/mo</span>
                        </div>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10b981" className="bi bi-check-lg" viewBox="0 0 16 9" style={{ marginRight: "8px" }}>
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                            </svg>
                            Eight accesses for S services</p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10b981" className="bi bi-check-lg" viewBox="0 0 16 9" style={{ marginRight: "8px" }}>
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                            </svg>
                            Four accesses for M services</p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10b981" className="bi bi-check-lg" viewBox="0 0 16 9" style={{ marginRight: "8px" }}>
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                            </svg>
                            Two accesses for L services</p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10b981" className="bi bi-check-lg" viewBox="0 0 16 9" style={{ marginRight: "8px" }}>
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                            </svg>
                            One access for XL services</p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10b981" className="bi bi-check-lg" viewBox="0 0 16 9" style={{ marginRight: "8px" }}>
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                            </svg>
                            Various tools everyday</p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10b981" className="bi bi-check-lg" viewBox="0 0 16 9" style={{ marginRight: "8px" }}>
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                            </svg>
                            Mix between tiers</p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10b981" className="bi bi-check-lg" viewBox="0 0 16 9" style={{ marginRight: "8px" }}>
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                            </svg>
                            Update your access after 23:59</p>
                        <Link to="/account">
                            <button style={{ marginTop: '63px' }}>Sign up</button>
                        </Link>
                    </div>

                    <div className="card" style={{ height: '490px' }}>
                        <h3>Elite</h3>
                        <div className="price">
                            <span className="symbol">$</span><span className='number'>{floatToIntIfDecimal(price("Elite", 30))}</span><span className="month">/mo</span>
                        </div>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10b981" className="bi bi-check-lg" viewBox="0 0 16 9" style={{ marginRight: "8px" }}>
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                            </svg>
                            Thirteen accesses for S services</p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10b981" className="bi bi-check-lg" viewBox="0 0 16 9" style={{ marginRight: "8px" }}>
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                            </svg>
                            Six accesses for M services</p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10b981" className="bi bi-check-lg" viewBox="0 0 16 9" style={{ marginRight: "8px" }}>
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                            </svg>
                            Three accesses for L services</p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10b981" className="bi bi-check-lg" viewBox="0 0 16 9" style={{ marginRight: "8px" }}>
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                            </svg>
                            One access for XL services</p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10b981" className="bi bi-check-lg" viewBox="0 0 16 9" style={{ marginRight: "8px" }}>
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                            </svg>
                            One access for XXL services</p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10b981" className="bi bi-check-lg" viewBox="0 0 16 9" style={{ marginRight: "8px" }}>
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                            </svg>
                            Various tools everyday</p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10b981" className="bi bi-check-lg" viewBox="0 0 16 9" style={{ marginRight: "8px" }}>
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                            </svg>
                            Mix between tiers</p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#10b981" className="bi bi-check-lg" viewBox="0 0 16 9" style={{ marginRight: "8px" }}>
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                            </svg>
                            Update your access after 23:59</p>
                        <Link to="/account">
                            <button>Sign up</button>
                        </Link>
                    </div>
                    
                    <div className="card" style={{ height: '490px' }}>
                        <h3>Custom</h3>
                        <div className="price">
                            <span className="symbol">$</span><span className='number'>{floatToIntIfDecimal(price(subscription, days, amount))}</span>
                        </div>
                        <p style={{ paddingBottom: '10px', borderBottom: '1px solid #64748b' }}>Flexible subscription for everyone. Open on Mondays. Try any options with our Custom subscription plan.</p>
                        <p>Number of days: (min 5, max 90)</p>
                        <input type="number" onChange={(e) => setDays(`${e.target.value}`)} value={days}/>
                        <p>OneSubs plan:</p>
                        <select value={subscription} onChange={(e) => setSubscription(e.target.value)}>
                            <option value="Basic">Basic</option>
                            <option value="Standard">Standard</option>
                            <option value="Premium">Premium</option>
                            <option value="Pro">Pro</option>
                            <option value="Elite">Elite</option>
                        </select>
                        <p>Amount: (max 3)</p>
                        <input type="number" onChange={(e) => setAmount(`${e.target.value}`)} value={amount}/>
                        
                        <Link to="/account">
                            <button style={{ marginTop: '19px' }}>Sign up</button>
                        </Link>
                        <p>Ends on {months[date(days).getMonth()]} {date(days).getDate()} at 23:59</p>
                    </div>

                </div> : <></>}
            </div>
        </div>
    );
}

export default Pricing;