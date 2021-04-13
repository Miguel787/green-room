import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import About from "./pages/About.jsx";
import SignUp from "./pages/SignUp.jsx";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/sign-up" component={SignUp} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
