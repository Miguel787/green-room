import React from "react";
import "./Styles/Rightside.scss";

function Rightside() {
  return (
    <div>
      <div className="rightside">
        <div className="rightside__schedule">
          <h4 className="rightside__title">Upcoming Gigs</h4>
          <div className="rightside__row">
            <h6 className="leftside__names">Vaso on Frenchman </h6>
            <p>6pm-9pm on 5/8</p>
          </div>
          <div className="rightside__row">
            <h6 className="leftside__names">30/90 on Frenchman </h6>
            <p>9:30pm-12pm on 5/8</p>
          </div>
          <div className="rightside__row">
            <h6 className="leftside__names">Rare Form on Frenchman</h6>
            <p>6pm-9pm on 5/9</p>
          </div>
          <div className="rightside__row">
            <h6 className="leftside__names">Bamboula's on Frenchman</h6>
            <p>9:30pm-12pm on 5/9</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightside;
