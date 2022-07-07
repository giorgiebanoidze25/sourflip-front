import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../utils/thunkCreators";
import useWindowDimensions from "../components/useWindowDimensions";

function Copyright() {
  return (
    <Typography variant="body2" color="primary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="http://localhost:3000">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const myTheme = createTheme({
  palette: {
    primary: {
      light: "#ffff",
      main: "#9c9ebb",
      dark: "#9c9ebb",
      contrastText: "#9c9ebb",
    },
    secondary: {
      light: "#2f84fa",
      main: "#2f84fa",
      dark: "#2f84fa",
      contrastText: "#2f84fa",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  main: {
    width: "100vw",
    height: "100vh",
    paddingTop: "10vh",
    backgroundColor: "#1d1f32",
  },
  contain: {},
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#2f84fa",
    color: "#ffff",
  },
  TextFieldColor: {
    color: "primary",
  },
  AddText: {
    fontWeight: "bold",
  },
}));

const Login = withRouter((props) => {
  const { user, login } = props;
  const classes = useStyles();
  const { width } = useWindowDimensions();

  console.log(width);

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
  };

  if (user.id) {
    props.history.push("/main");
  }

  return (
    <ThemeProvider theme={myTheme}>
      <div className={classes.main}>
        <Container component="main" maxWidth="xs" className={classes.contain}>
          <Card
            sx={{ minWidth: 275 }}
            style={{
              borderRadius: "25px",
              boxShadow: "0 10px 20px 0 rgb(0 0 0 / 40%)",
            }}
          >
            <CardContent style={{ backgroundColor: "#343654" }}>
              <CssBaseline />
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" color="primary">
                  Login
                </Typography>
                <form
                  className={classes.form}
                  noValidate
                  onSubmit={handleLogin}
                >
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="User Name"
                    name="username"
                    autoComplete="text"
                    size="small"
                    color="secondary"
                    InputProps={{
                      classes: {
                        input: classes.TextFieldColor,
                      },
                    }}
                    autoFocus
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    size="small"
                    color="secondary"
                    autoComplete="current-password"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="white"
                    className={classes.submit}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link
                        href="#"
                        variant="body2"
                        color="primary"
                        className={classes.AddText}
                      >
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link
                        href="/register"
                        variant="body2"
                        color="primary"
                        className={classes.AddText}
                      >
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              </div>
              <Box mt={8}>
                <Copyright />
              </Box>
            </CardContent>
          </Card>
        </Container>
      </div>
    </ThemeProvider>
  );
});

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
