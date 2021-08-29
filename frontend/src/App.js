import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./common/Header";
import Home from "./common/Home";
import { Products } from "./common/Products";
import AboutUs from "./common/AboutUs";
import UserRegistration from "./components/userRegistration/UserRegistration";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/user-registration" component={UserRegistration} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
