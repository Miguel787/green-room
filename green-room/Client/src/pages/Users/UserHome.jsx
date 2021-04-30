import React from "react";
import Miguel from "../../assets/photos/profileImg/myface.png";
import Ashley from "../../assets/photos/profileImg/Screenshot from 2021-04-30 01-56-23.png";
import Dan from "../../assets/photos/profileImg/Screenshot from 2021-04-30 01-58-23.png";
import Nuri from "../../assets/photos/profileImg/Screenshot from 2021-04-30 01-59-01.png";
import "./Styles/UserHome.scss";
import Profile from "../../assets/photos/profileImg/myface.png";
import Newsfeed from "../../assets/photos/icons/icons8-home-50.png";
import Places from "../../assets/photos/icons/icons8-location-50.png";
import Store from "../../assets/photos/icons/icons8-furniture-store-24.png";
import User from "../../assets/photos/icons/icons8-customer-30.png";
import { Link } from "react-router-dom";
import Post from "../../components/Post/post";
import Groups from "../../assets/photos/icons/icons8-user-group-30.png";
import Leftside from "../../components/Sidebars/Leftside";
import Rightside from "../../components/Sidebars/Rightside";
function UserHome() {
  return (
    <>
      {/* left section for desktop */}
      <div className="bigBox">
        <div className="bigBox__box">
          <Leftside />
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
                <Link to="/userhome" className="userHome__hover">
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
                    src={Miguel}
                    className="userHome__friendAvatar"
                    alt="friend"
                  />
                  <p className="userHome__name">Miguel</p>
                  <p className="userHome__date">01/19/2021</p>
                </div>
                <p className="userHome__border">
                  The band and I just learned a whole new set for our gigs this
                  week! Check us out tuesdays and thursdays at Bamboula's!
                </p>
              </div>
              <div className="userHome__postBox">
                <div className="userHome__row">
                  <img
                    src={Ashley}
                    className="userHome__friendAvatar"
                    alt="glenn"
                  />
                  <p>Ashley</p>
                  <p className="userHome__date">01/19/2021</p>
                </div>
                <p className="userHome__border">
                  Just listened to the most fire set down at 30/90! "White Tie
                  Affair" absolutely crushed it!
                </p>
              </div>
              <div className="userHome__postBox">
                <div className="userHome__row">
                  <img
                    src={Dan}
                    className="userHome__friendAvatar"
                    alt="glenn"
                  />
                  <p>Dan</p>
                  <p className="userHome__date">01/19/2021</p>
                </div>
                <p className="userHome__border">
                  The only things worth listening to these days is reggae,
                  metal, and marc rebillet #SilkKimono
                </p>
              </div>
              <div className="userHome__postBox">
                <div className="userHome__row">
                  <img
                    src={Nuri}
                    className="userHome__friendAvatar"
                    alt="glenn"
                  />
                  <p>Nurdog</p>
                  <p className="userHome__date">01/19/2021</p>
                </div>
                <p className="userHome__border">
                  I know this website is for musicians but is anyone intrested
                  in a lucrative investment regarding my next website "Laceless
                  Love" - a site for laceless shoe lovers to tie the knot...
                  without laces of course
                </p>
              </div>
            </div>
          </div>
          <Rightside />
        </div>
      </div>
    </>
  );
}

export default UserHome;
