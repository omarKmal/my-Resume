import { Route, Switch } from "react-router";
import Home from "./containers/Home";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default App;
