import React, { useEffect, useState } from "react";
import firebase from "../../firebase";
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
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("posts");

  function getPosts() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const comments = [];
      querySnapshot.forEach((doc) => {
        comments.push(doc.data());
      });
      setPosts(comments);
      setLoading(false);
    });
  }

  useEffect(() => {
    getPosts();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
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

              {posts.map((post) => (
                <div className="userHome__postBox" key={post.id}>
                  <div className="userHome__row">
                    <img
                      src={post.avatar}
                      className="userHome__friendAvatar"
                      alt="user"
                    />
                    <p> {post.name}</p>
                    <p className="userHome__date">01/19/2021</p>
                  </div>
                  <p className="userHome__border">{post.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <Rightside />
        </div>
      </div>
    </>
  );
}

export default UserHome;
