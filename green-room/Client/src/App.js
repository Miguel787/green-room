import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Header from "./components/Header/Header.jsx";
import UserPage from "./pages/Users/UserPage.jsx";
import UserHome from "./pages/Users/UserHome.jsx";
import Venues from "./pages/Users/Venues";
import Store from "./pages/Store/Store.jsx";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/userpage" component={UserPage} />
          <Route exact path="/userhome" component={UserHome} />
          <Route exact path="/venues" component={Venues} />
          <Route exact path="/store" component={Store} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
