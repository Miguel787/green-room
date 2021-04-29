import React from "react";
import "./Styles/UserPage.scss";
import { Link } from "react-router-dom";
import Groups from "../../assets/photos/icons/icons8-user-group-30.png";
import Leftside from "../../components/Sidebars/Leftside";
import Rightside from "../../components/Sidebars/Rightside";
import Calendly from "./Calendly";
import Ash from "../../assets/photos/profileImg/Screenshot from 2021-04-27 00-38-00.png";
import Newsfeed from "../../assets/photos/icons/icons8-home-50.png";
import Places from "../../assets/photos/icons/icons8-location-50.png";
import Store from "../../assets/photos/icons/icons8-furniture-store-24.png";
import User from "../../assets/photos/icons/icons8-customer-30.png";

function UserPage() {
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
              {/* profile area */}
              <section className="userPage">
                <h3 className="userPage__title">Ashley Glensomething</h3>
                <div className="userPage__topBox">
                  <img src={Ash} className="userPage__profileImg" alt="store" />

                  <div className="userPage__pref">
                    <h5>Info</h5>
                    <p>Miami, FL</p>
                    <p>Prefers Smoke Free Venues</p>
                    <p>Open to Busking</p>
                  </div>
                  <div className="userPage__bandBox">
                    <h5>Current Bands</h5>
                    <p>Sassy Ash & the Summer Sunshines</p>
                    <p>Crop Top Shots</p>
                    <p>Chivito and the Shaky Eyes</p>
                  </div>
                </div>
                <div className="userPage__bottomBox">
                  <div>
                    <h5>Talents:</h5>
                    <p>
                      Lead Electric Triangle, Guitar, Piano, Singer, Rapper,
                      Panflute
                    </p>
                    <h5>Learning:</h5>
                    <p>Sitar</p>
                    <h5>Venues Played:</h5>
                    <p>
                      Red Rocks Amphitheater, Madison Square Garden, Hard Rock
                      Stadium, The Apollo theater, Some shack in Tallahassee
                    </p>
                  </div>
                  <div>
                    <h5>Availability:</h5>
                    <p>Tuesday through Sundays</p>
                    <h5>Genre:</h5>
                    <p>
                      Classical Country, Reggae, Opera, RnB, Soul, Jazz, Bossa
                      Nova
                    </p>
                    <h5>Skills:</h5>
                    <p>
                      Sound Engineering, Singing in 4 Languages, Interpretive
                      dance, Dancing
                    </p>
                  </div>
                </div>
                <div id="userPage__calendly">
                  <Calendly account="migetito" />
                </div>
              </section>
            </div>
          </div>
          <Rightside />
        </div>
      </div>
    </>
  );
}

export default UserPage;
