import React, { Component, Fragment } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "./event/EventDashboard/EventDashboard";
import NavBar from "./nav/NavBar/NavBar";
import EventDetailedPage from "./event/EventDetailed/EventDetailedPage";
import UserDetailedPage from "./user/UserDetailed/UserDetailedPage";
import PeopleDashboard from "./user/PeopleDashboard/PeopleDashboard";
import SettingsDashboard from "./user/Settings/SettingsDashboard";

import EventForm from "./event/EventForm/EventForm";
import { Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import TestComponent from "./testarea/TestComponent";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={HomePage}></Route>
        <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <NavBar></NavBar>
              <Container className="main">
                <Route path="/events" component={EventDashboard}></Route>
                <Route path="/events/:id" component={EventDetailedPage}></Route>
                <Route path="/people" component={PeopleDashboard}></Route>
                <Route path="/profile/:id" component={UserDetailedPage}></Route>
                <Route path="/settings" component={SettingsDashboard}></Route>
                <Route path="/createevent" component={EventForm}></Route>
                <Route path="/test" component={TestComponent}></Route>
              </Container>
            </Fragment>
          )}
        ></Route>
      </Fragment>
    );
  }
}

export default App;
