import React from "react";
import "./Styles/Leftside.scss";
import Bands from "../../assets/photos/icons/icons8-concert-50.png";
import Gigs from "../../assets/photos/icons/icons8-schedule-50.png";
import Places from "../../assets/photos/icons/icons8-location-50.png";
import Store from "../../assets/photos/icons/icons8-furniture-store-24.png";
import Profile from "../../assets/photos/profileImg/Screenshot from 2021-04-21 16-07-50.png";
import Groups from "../../assets/photos/icons/icons8-user-group-30.png";

function Leftside() {
  return (
    <div>
      <section className="leftside">
        <div className="leftside__toprow">
          <img src={Profile} className="leftside__avatar" alt="profile" />
          <h6 className="leftside__names">Ashley Glensomething</h6>
        </div>
        <div className="leftside__row">
          <img src={Bands} className="userHome__icons--size" alt="bands" />
          <h6 className="leftside__names">Bands</h6>
        </div>
        <div className="leftside__row">
          <img src={Gigs} className="userHome__icons--size" alt="gigs" />
          <h6 className="leftside__names">Gigs</h6>
        </div>
        <div className="leftside__row">
          <img src={Groups} className="userHome__icons--size" alt="groups" />
          <h6 className="leftside__names">Communities</h6>
        </div>
        <div className="leftside__row">
          <img src={Places} className="userHome__icons--size" alt="places" />
          <h6 className="leftside__names">Venues</h6>
        </div>
        <div className="leftside__row">
          <img src={Store} className="userHome__icons--size" alt="store" />
          <h6 className="leftside__names">Store</h6>
        </div>
      </section>
    </div>
  );
}

export default Leftside;
