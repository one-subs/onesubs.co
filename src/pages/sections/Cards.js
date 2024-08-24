import React from "react";

function Cards({ h1, cards }) {
    return (
        <div className="services" style={{backgroundColor: "#FFFFFF"}}>
          <div className="page_width">
            { h1 ? <h1 style={{fontSize: `${h1.size}px`}}>{ h1.text }</h1> : ""}
            
            <div className="card_list">
              <div className="card">
                <img src={cards ? cards[0].url : ""} alt="Pexel's"/>
                <h2>{cards ? cards[0].h1 : ""}</h2>
                <p>{cards ? cards[0].p : ""}</p>
              </div>
              <div className="card">
                <img src={cards ? cards[1].url : ""} alt="Pexel's"/>
                <h2>{cards ? cards[1].h1 : ""}</h2>
                <p>{cards ? cards[1].p : ""}</p>
              </div>
              <div className="card">
                <img src={cards ? cards[2].url : ""} alt="Pexel's"/>
                <h2>{cards ? cards[2].h1 : ""}</h2>
                <p>{cards ? cards[2].p : ""}</p>
              </div>
            </div>
  
          </div>
        </div>
    );
}

export default Cards;