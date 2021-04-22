import React from "react";
import Friend from "../../assets/photos/profileImg/Screenshot from 2021-04-19 21-26-24.png";
import "./Styles/UserHome.scss";
import Glenn from "../../assets/photos/profileImg/Image from iOS.png";
import Profile from "../../assets/photos/profileImg/Screenshot from 2021-04-21 16-07-50.png";
import Newsfeed from "../../assets/photos/icons/icons8-home-50.png";
import Places from "../../assets/photos/icons/icons8-location-50.png";
import Store from "../../assets/photos/icons/icons8-furniture-store-24.png";
import User from "../../assets/photos/icons/icons8-customer-30.png";
import { Link } from "react-router-dom";
import Post from "../../components/Post/post";
import Groups from "../../assets/photos/icons/icons8-user-group-30.png";
import Bands from "../../assets/photos/icons/icons8-concert-50.png";
import Gigs from "../../assets/photos/icons/icons8-schedule-50.png";
function UserHome() {
  return (
    <>
      {/* left section for desktop */}
      <div className="bigBox">
        <div className="bigBox__box">
          <section className="leftside">
            <div className="leftside__row">
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
              <img
                src={Groups}
                className="userHome__icons--size"
                alt="groups"
              />
              <h6 className="leftside__names">Communities</h6>
            </div>
            <div className="leftside__row">
              <img
                src={Places}
                className="userHome__icons--size"
                alt="places"
              />
              <h6 className="leftside__names">Venues</h6>
            </div>
            <div className="leftside__row">
              <img src={Store} className="userHome__icons--size" alt="store" />
              <h6 className="leftside__names">Store</h6>
            </div>
          </section>
          {/* middle section */}
          <div className="userHome">
            <div className="userHome__container">
              <div className="userHome__icons">
                <Link to="/userhome" className="userHome__hover">
                  <img
                    src={Newsfeed}
                    className="userHome__icons--size"
                    alt="newsfeed"
                  />
                </Link>
                <Link to="/" className="userHome__hover">
                  <img
                    src={Groups}
                    className="userHome__icons--size"
                    alt="groups"
                  />
                </Link>
                <Link to="/venues" className="userHome__hover">
                  <img
                    src={Places}
                    className="userHome__icons--size"
                    alt="places"
                  />
                </Link>
                <Link to="/userpage" className="userHome__hover">
                  <img
                    src={User}
                    className="userHome__icons--size"
                    alt="user"
                  />
                </Link>
                <Link to="/store" className="userHome__hover">
                  <img
                    src={Store}
                    className="userHome__icons--size"
                    alt="store"
                  />
                </Link>
              </div>

              <form className="userHome__homeBox">
                <img
                  src={Profile}
                  className="userHome__friendAvatar"
                  alt="profile"
                />
                <Post className="userHome__post" />
              </form>
              <div className="userHome__postBox">
                <div className="userHome__row">
                  <img
                    src={Friend}
                    className="userHome__friendAvatar"
                    alt="friend"
                  />
                  <p className="userHome__name">Ashley</p>
                  <p className="userHome__date">01/19/2021</p>
                </div>
                <p className="userHome__border">
                  omg i just had the greatest fart of my life earlier today lol
                  #automaticwhoppiecushion
                </p>
              </div>
              <div className="userHome__postBox">
                <div className="userHome__row">
                  <img
                    src={Glenn}
                    className="userHome__friendAvatar"
                    alt="glenn"
                  />
                  <p>Glenn</p>
                  <p className="userHome__date">01/19/2021</p>
                </div>
                <p className="userHome__border">
                  Just listened to the most fire mixtape of 2021 "Coconutbois 2
                  men"
                </p>
              </div>
            </div>
          </div>
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
      </div>
    </>
  );
}

export default UserHome;
