import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import RealEstate from "./pages/RealEstate/RealEstate";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/real-estate" exact>
          <RealEstate />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
