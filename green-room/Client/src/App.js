import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Header from "./components/Header/Header.jsx";
import UserPage from "./pages/Users/UserPage.jsx";
import UserHome from "./pages/Users/UserHome.jsx";
import Venues from "./pages/Users/Venues";
import Store from "./pages/Store/Store.jsx";
import { AuthProvider } from "./Contexts/AuthContext";
import SecureRoute from "../src/pages/SecureRoute";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword.jsx";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
          <SecureRoute exact path="/userpage" component={UserPage} />
          <SecureRoute exact path="/userhome" component={UserHome} />
          <SecureRoute exact path="/venues" component={Venues} />
          <SecureRoute exact path="/store" component={Store} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
