import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/Landing";
import Home from "./components/Home";
import CreateADog from "./components/CreateADog";
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={Home} />
          <Route path="/dog" component={CreateADog} />
          <Route path="/dogs/:id" component={Details} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
