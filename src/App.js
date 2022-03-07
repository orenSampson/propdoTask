import { BrowserRouter, Switch, Route } from "react-router-dom";
import RealEstate from "./pages/RealEstate/RealEstate";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/real-estate" component={RealEstate} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
