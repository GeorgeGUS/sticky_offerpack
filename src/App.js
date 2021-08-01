import "normalize.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OfferPack from "./OfferPack";
import "./App.css";

const list = Array(15).fill("");

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/:id">
          <div className="App">
            <div className="TopBlock" />
            {list.map((_, i) => (
              <OfferPack key={i} index={i} />
            ))}
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
