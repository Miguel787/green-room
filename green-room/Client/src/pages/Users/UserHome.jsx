import React from "react";
import Friend from "../../assets/photos/Screenshot from 2021-04-19 21-26-24.png";
import "./Styles/UserHome.scss";
import Glenn from "../../assets/photos/Image from iOS.png";

function UserHome() {
  return (
    <div className="userHome">
      <div className="userHome__container">
        <form>
          <img />
        </form>
        <div className="userHome__row">
          <img src={Friend} className="userHome__friendAvatar" />
          <p>01/19/2021</p>
        </div>
        <p className="userHome__border">
          omg i just had the greatest fart of my life earlier today lol
          #automaticwhoppiecushion
        </p>

        <div className="userHome__row">
          <img src={Glenn} className="userHome__friendAvatar2" />
          <p>01/19/2021</p>
        </div>
        <p className="userHome__border">
          Just listened to the most fire mixtape of 2021 "Coconutbois 2 men"
        </p>
      </div>
    </div>
  );
}

export default UserHome;
