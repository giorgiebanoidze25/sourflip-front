import React from "react";
import { Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Header from "../features/main/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "../features/main/Dashboard";

const Main = withRouter((props) => {
  const { id } = props.user;

  if (!id) {
    props.history.push("/login");
  }

  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route path="/coinflip">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </>
  );
});

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Main);
