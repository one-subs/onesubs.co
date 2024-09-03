import React, { useState, useEffect } from "react";
import Description from './components/Description';
import Cta from "./components/Cta";

function Overview() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="description" style={{ backgroundColor: "#101d2d", minHeight: "300px" }}>
        <div className="page_width">
          <h1 style={{ margin: "auto", color: "#FFFFFF", width: "90%", marginTop: "100px", fontFamily: "Arial", textAlign: isMobile ? "start" : "center" }}>Kickstart your big idea with <span style={{ color: "#10b981" }}>intelligence</span>.</h1>
          {isMobile ? "" : <p style={{ textAlign: "center" }}>Discover the ultimate subscription for online success. Gain instant access to the collection of premium web tools, simplifying your workflow maximizing your productivity.</p>}
        </div>
      </div>
      <Description/>
      <Cta/>
    </>
  );
}

export default Overview;