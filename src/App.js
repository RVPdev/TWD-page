
import "./App.css";
import Header from "./Header/Header";
import Home from "./Body/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Body/About";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/About">
            <About />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
