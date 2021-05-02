import React, { useEffect, useState } from "react";
import firebase from "../../firebase";
import "./Styles/UserPage.scss";
import { Link } from "react-router-dom";
import Groups from "../../assets/photos/icons/icons8-user-group-30.png";
import Leftside from "../../components/Sidebars/Leftside";
import Rightside from "../../components/Sidebars/Rightside";
import Calendly from "./Calendly";
import Newsfeed from "../../assets/photos/icons/icons8-home-50.png";
import Places from "../../assets/photos/icons/icons8-location-50.png";
import Store from "../../assets/photos/icons/icons8-furniture-store-24.png";
import User from "../../assets/photos/icons/icons8-customer-30.png";

function UserPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("Users");

  function getData() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const info = [];
      querySnapshot.forEach((doc) => {
        info.push(doc.data());
      });
      setData(info);
      setLoading(false);
    });
  }

  useEffect(() => {
    getData();
  }, []);
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
              {/* profile area */}
              {data.map((data) => (
                <section className="userPage">
                  <h3 className="userPage__title">Miguel Cruz Le Hardy</h3>
                  <div className="userPage__topBox">
                    <img
                      src={data.avatar}
                      className="userPage__profileImg"
                      alt="store"
                    />

                    <div className="userPage__pref">
                      <h5>Info</h5>
                      <p>Miami, FL</p>
                      <p>Prefers Smoke Free Venues</p>
                      <p>Open to Busking</p>
                    </div>
                    <div className="userPage__bandBox">
                      <h5>Current Bands</h5>
                      <p>Stoic City</p>
                      <p>A White Tie Affair</p>
                      <p>Tchops</p>
                    </div>
                  </div>
                  <div className="userPage__bottomBox">
                    <div>
                      <h5>Talents:</h5>
                      <p>
                        Lead Singing, Drums, Latin Percussion, Harmonies, Bass
                        Guitar
                      </p>
                      <h5>Learning:</h5>
                      <p>Piano</p>
                      <h5>Venues Played:</h5>
                      <p>
                        Jazz Fest 2018, Red Rocks Amphitheater, Madison Square
                        Garden, Hard Rock Stadium, The Apollo theater
                      </p>
                    </div>
                    <div>
                      <h5>Availability:</h5>
                      <p>Tuesday through Sundays</p>
                      <h5>Genre:</h5>
                      <p>RnB, Funk, Jazz, Blues, Classic Rock, Reggae, Latin</p>
                      <h5>Skills:</h5>
                      <p>
                        Sound Engineering, Singing in 2 Languages, Juggling,
                        Unicycling
                      </p>
                    </div>
                  </div>
                  <div id="userPage__calendly">
                    <Calendly account="migetito" />
                  </div>
                </section>
              ))}
            </div>
          </div>
          <Rightside />
        </div>
      </div>
    </>
  );
}

export default UserPage;
