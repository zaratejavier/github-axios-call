import React from "react";
import "./App.css";
import { Container } from "semantic-ui-react";
import AccountProfile from "./components/AccountProfile";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import AccountProfileContext from "./components/AccountProfileContext";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route exact path="/account/profile" component={AccountProfile} />
          <Route exact path="/context" component={AccountProfileContext} />
        </Switch>
      </Container>
    </>
  );
}

export default App;