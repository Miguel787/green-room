import React, { useState } from "react";
import Friend from "../../assets/photos/profileImg/Screenshot from 2021-04-19 21-26-24.png";
import "./Styles/Venues.scss";
import Profile from "../../assets/photos/profileImg/Screenshot from 2021-04-21 16-07-50.png";
import Newsfeed from "../../assets/photos/icons/icons8-home-50.png";
import Places from "../../assets/photos/icons/icons8-location-50.png";
import Store from "../../assets/photos/icons/icons8-furniture-store-24.png";
import User from "../../assets/photos/icons/icons8-customer-30.png";
import { Link } from "react-router-dom";
import Groups from "../../assets/photos/icons/icons8-user-group-30.png";
import Bands from "../../assets/photos/icons/icons8-concert-50.png";
import Gigs from "../../assets/photos/icons/icons8-schedule-50.png";

// const { REACT_APP_API_BASE_URL, REACT_APP_BEARER_TOKEN } = process.env;
function Venues() {
  // const [venue, setVenue] = useState("");
  // console.log(REACT_APP_API_BASE_URL);
  // console.log(REACT_APP_BEARER_TOKEN);
  // function handleChange(event) {
  //   event.preventDefault();
  //   let location = event.target.value;
  //   console.log(location);

  //   setVenue(location);
  // }
  // let myHeaders = new Headers();
  // myHeaders.append("Authorization", "Bearer" + REACT_APP_BEARER_TOKEN);

  // fetch(`${REACT_APP_API_BASE_URL}${venue}`, {
  //   headers: myHeaders,
  // })
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then((json) => {
  //     console.log(json);
  //   });

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
              {/* Search section */}
              <form className="venues">
                <h3>Find local venues</h3>
                <input
                  type="text"
                  placeholder="Search by Location"
                  className="venues__search"
                  // onChange={handleChange}
                ></input>
              </form>
              <div className="venues__postBox">
                <div className="venues__row">
                  <img
                    src={Friend}
                    className="venues__friendAvatar"
                    alt="Friend"
                  />
                  <p className="venues__name">VENUE NAME</p>
                  <p className="venues__date">(123)456-7890</p>
                </div>
                <p className="venues__border">DISPLAY ADDRESS</p>
              </div>
            </div>
          </div>
          {/* rightside gigs */}
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

export default Venues;
