import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Header from "./components/Header/Header.jsx";

import SignUp from "./pages/SignUp/SignUp.jsx";
import UserPage from "./pages/Users/UserPage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import UserHome from "./pages/Users/UserHome.jsx";
import EditProfile from "./pages/Users/EditProfile.jsx";
import Posts from "./pages/Users/Posts";
import FriendPage from "./pages/Friends/FriendPage.jsx";
import FriendPost from "./pages/Friends/FriendPost.jsx";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/userpage" component={UserPage} />
          <Route exact path="/userhome" component={UserHome} />
          <Route exact path="/editProfile" component={EditProfile} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/friendpage" component={FriendPage} />
          <Route exact path="/friendpage/posts" component={FriendPost} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
