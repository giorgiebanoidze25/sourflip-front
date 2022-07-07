import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../utils/thunkCreators";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

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
    height: "100%",
    paddingTop: "10vh",
    paddingBottom: "10vh",
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
    marginTop: theme.spacing(3),
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

const Register = withRouter((props) => {
  const { user, register } = props;
  const classes = useStyles();

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      return;
    }

    await register({ username, email, password });
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
                  Register
                </Typography>
                <form
                  className={classes.form}
                  noValidate
                  onSubmit={handleRegister}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        autoComplete="fname"
                        name="username"
                        variant="outlined"
                        required
                        fullWidth
                        id="username"
                        label="User Name"
                        size="small"
                        color="secondary"
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        size="small"
                        color="secondary"
                        autoComplete="email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
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
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        id="confirmPassword"
                        size="small"
                        color="secondary"
                        autoComplete="current-password"
                      />
                    </Grid>
                    {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="white"
                    className={classes.submit}
                  >
                    Register
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link href="/login" variant="body2" color="primary">
                        Already have an account? Login
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              </div>
              <Box mt={5}>
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
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
