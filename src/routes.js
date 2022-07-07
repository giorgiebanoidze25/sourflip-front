import React, { useEffect, useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "./utils/thunkCreators";
import { Signup, Login, Main } from "./pages";
import { SnackbarError } from "./components";
import Msg from "./pages/Msg";
import BaseRoute from "./baseRoute";
import Dashboard from "./features/main/Dashboard";

const Routes = (props) => {
  const { user, fetchUser } = props;
  const [errorMessage, setErrorMessage] = useState("");
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  useEffect(() => {
    if (user.error) {
      if (typeof user.error === "string") {
        setErrorMessage(user.error);
      } else {
        setErrorMessage("Internal Server Error. Please try again");
      }
      setSnackBarOpen(true);
    }
  }, [user.error]);

  if (props.user.isFetchingUser) {
    return <div>Loading...</div>;
  }

  const Status = ({ code, children }) => {
    return (
      <Route
        render={({ staticContext }) => {
          if (staticContext) staticContext.status = code;
          return children;
        }}
      />
    );
  };

  const NotFound = () => {
    return (
      <Status code={404}>
        <div>
          <h4 style={{ textAlign: "center" }}>sorry, can’t find that.</h4>
        </div>
      </Status>
    );
  };

  return (
    <>
      {snackBarOpen && (
        <SnackbarError
          setSnackBarOpen={setSnackBarOpen}
          errorMessage={errorMessage}
          snackBarOpen={snackBarOpen}
        />
      )}
      <Switch>
        <BaseRoute path="/login" component={Login} />
        <BaseRoute path="/register" component={Signup} />
        <BaseRoute path="/main" component={Main} />
        <BaseRoute path="/message" component={Msg} />
        <BaseRoute path="/coinflip" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser() {
      dispatch(fetchUser());
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
