import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/home";
import Search from "./pages/search";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default App;
