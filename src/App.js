import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { createMuiTheme } from "@material-ui/core/styles";
import Routes from "./routes";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 365,
      sm: 700,
      md: 1050,
      lg: 1125,
      xl: 1200,
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Route exact path="/" render={() => <Redirect to="/main" />} />
          <Routes />
        </BrowserRouter>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
