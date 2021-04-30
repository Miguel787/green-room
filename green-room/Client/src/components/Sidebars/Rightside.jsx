import React from "react";
import "./Styles/Rightside.scss";
import Bar from "../../assets/photos/profileImg/mary-hammel-V-JjdMpSM74-unsplash.jpg";

function Rightside() {
  return (
    <div>
      <div className="rightside">
        <div className="rightside__schedule">
          <h4 className="rightside__title">Upcoming Gigs</h4>
          <div className="rightside__gigBox">
            <div className="rightside__row">
              <img src={Bar} alt="Bar" />
              <div className="rightside__column">
                <h6 className="rightside__names">Vaso</h6>
                <p>6pm-9pm on 5/8</p>
              </div>
            </div>
            <div className="rightside__row">
              <img src={Bar} alt="Bar" />
              <div className="rightside__column">
                <h6 className="rightside__names">30/90</h6>
                <p>9:30pm-12pm on 5/8</p>
              </div>
            </div>
            <div className="rightside__row">
              <img src={Bar} alt="Bar" />
              <div className="rightside__column">
                <h6 className="rightside__names">Rare Form</h6>
                <p>6pm-9pm on 5/9</p>
              </div>
            </div>
            <div className="rightside__row">
              <img src={Bar} alt="Bar" />
              <div className="rightside__column">
                <h6 className="rightside__names">Bamboula's</h6>
                <p>9:30pm-12pm on 5/9</p>
              </div>
            </div>
            <div className="rightside__row">
              <img src={Bar} alt="Bar" />
              <div className="rightside__column">
                <h6 className="rightside__names">BB King's</h6>
                <p>9:30pm-12pm on 5/10</p>
              </div>
            </div>
            <div className="rightside__row">
              <img src={Bar} alt="Bar" />
              <div className="rightside__column">
                <h6 className="rightside__names">BMC</h6>
                <p>9:30pm-12pm on 5/11</p>
              </div>
            </div>
            <div className="rightside__row">
              <img src={Bar} alt="Bar" />
              <div className="rightside__column">
                <h6 className="rightside__names">The Spotted Cat</h6>
                <p>9:30pm-12pm on 5/12</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightside;
