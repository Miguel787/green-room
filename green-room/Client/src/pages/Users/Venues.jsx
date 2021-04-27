import React, { useState } from "react";
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
import axios from "axios";
import Leftside from "../../components/Sidebars/Leftside";
import Rightside from "../../components/Sidebars/Rightside";

function Venues() {
  const [venue, setVenue] = useState("");
  const [search, setSearch] = useState("");
  const url = "http://localhost:8080/api/venues";

  function handleChange(event) {
    event.preventDefault();
    const location = event.target.value;
    setSearch(location);
  }
  function handleSubmit(event) {
    event.preventDefault();
    getAllVenues(search);
  }

  const getAllVenues = (city) => {
    axios
      .get(`${url}/${city}`)
      .then((res) => {
        const allVenues = res.data;
        setVenue(allVenues);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <>
      {/* left section for desktop */}
      <div className="bigBoxVenue">
        <div className="bigBoxVenue__box">
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
              {/* Search section */}
              <div>
                <form onSubmit={handleSubmit} className="venues">
                  <div className="venues__formBox">
                    <h3>Find local venues</h3>
                    <input
                      type="text"
                      placeholder="Search by Location"
                      className="venues__search"
                      onChange={handleChange}
                      required
                    ></input>
                    <button type="submit" className="venues__button">
                      Search
                    </button>
                  </div>
                </form>
              </div>
              {venue &&
                venue.map((list, index) => (
                  <div className="venues__postBox" key={list.id}>
                    <div className="venues__row">
                      <img
                        src={list.image_url}
                        className="venues__friendAvatar"
                        alt="Friend"
                      />
                      <div className="venues__column">
                        <p className="venues__name">{list.name}</p>
                        <p className="venues__date">{list.display_phone}</p>
                        <p>
                          {list.location.address1}, {list.location.city}
                        </p>
                        <p className="venues__border">
                          {list.location.state} {list.location.zip_code}{" "}
                          {list.location.country}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* rightside gigs */}
          <Rightside />
        </div>
      </div>
    </>
  );
}

export default Venues;
