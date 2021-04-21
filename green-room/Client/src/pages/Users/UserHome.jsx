import React from "react";
import Friend from "../../assets/photos/profileImg/Screenshot from 2021-04-19 21-26-24.png";
import "./Styles/UserHome.scss";
import Glenn from "../../assets/photos/profileImg/Image from iOS.png";
import Profile from "../../assets/photos/profileImg/Screenshot from 2021-04-21 16-07-50.png";
import Newsfeed from "../../assets/photos/icons/icons8-home-50.png";
import Places from "../../assets/photos/icons/icons8-romantic-places-64.png";
import Store from "../../assets/photos/icons/icons8-furniture-store-24.png";
import User from "../../assets/photos/icons/icons8-customer-30.png";
import { Link } from "react-router-dom";
import Post from "../../components/Post/post";
function UserHome() {
  return (
    <div className="userHome">
      <div className="userHome__container">
        <div className="userHome__icons">
          <Link to="/userhome" className="userHome__hover">
            <img src={Newsfeed} className="userHome__icons--size" />
          </Link>
          <Link to="/venues" className="userHome__hover">
            <img src={Places} className="userHome__icons--size" />
          </Link>
          <Link to="/userpage" className="userHome__hover">
            <img src={User} className="userHome__icons--size" />
          </Link>
          <Link to="/store" className="userHome__hover">
            <img src={Store} className="userHome__icons--size" />
          </Link>
        </div>
        <form className="userHome__homeBox">
          <img src={Profile} className="userHome__friendAvatar" />
          <Post />
        </form>
        <div className="userHome__row">
          <img src={Friend} className="userHome__friendAvatar" />
          <p>Ashley</p>
          <p className="userHome__date">01/19/2021</p>
        </div>
        <p className="userHome__border">
          omg i just had the greatest fart of my life earlier today lol
          #automaticwhoppiecushion
        </p>

        <div className="userHome__row">
          <img src={Glenn} className="userHome__friendAvatar2" />
          <p>Glenn</p>
          <p className="userHome__date">01/19/2021</p>
        </div>
        <p className="userHome__border">
          Just listened to the most fire mixtape of 2021 "Coconutbois 2 men"
        </p>
      </div>
    </div>
  );
}

export default UserHome;
