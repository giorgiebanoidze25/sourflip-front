import React, { useState } from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { Box, Container, Button } from "@material-ui/core";
import { blue, pink } from "@material-ui/core/colors";
import { connect } from "react-redux";
import { DialogView } from "./DialogView";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexGrow: 8,
    flexDirection: "column",
    marginTop: "50px",
    marginBottom: "30px",
  },
  body: {},
  chatContainer: {
    height: "75vh",
    display: "flex",
    width: "100%",
    overflowX: "auto",
    "&::-webkit-scrollbar": {
      width: "0.4em",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
    },
  },
}));

const ActiveBetting = (props) => {
  const classes = useStyles();
  const [openView, setOpenView] = useState(false);
  const [openAlert, setAlert] = React.useState(false);

  const handleClickAlertOpen = () => {
    setAlert(true);
  };

  const handleAlertClose = (value) => {
    setAlert(false);
  };

  const handleClickOpen = () => {
    setOpenView(true);
  };

  const handleClose = (value) => {
    setOpenView(false);
  };

  const tiers = [
    {
      title: "Free",
      price: "0",
      description: [
        "10 users included",
        "2 GB of storage",
        "Help center access",
        "Email support",
      ],
      buttonText: "Sign up for free",
      buttonVariant: "outlined",
    },
    {
      title: "Pro",
      subheader: "Most popular",
      price: "15",
      description: [
        "20 users included",
        "10 GB of storage",
        "Help center access",
        "Priority email support",
      ],
      buttonText: "Get started",
      buttonVariant: "contained",
    },
    {
      title: "Enterprise",
      price: "30",
      description: [
        "50 users included",
        "30 GB of storage",
        "Help center access",
        "Phone & email support",
      ],
      buttonText: "Contact us",
      buttonVariant: "outlined",
    },
  ];

  const defaultTheme = createMuiTheme({
    palette: {
      primary: blue,
      secondary: pink,
    },
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box className={classes.root}>
        <div className={classes.body}>
          <Container maxWidth="md" component="main">
            <Button
              color="primary"
              startIcon={<AddIcon />}
              style={{ float: "right" }}
              onClick={handleClickAlertOpen}
              variant="contained"
            >
              CreateRoom
            </Button>
          </Container>
          <DialogView open={openAlert} onClose={handleAlertClose} />
          <DialogView
            open={openView}
            onClose={handleClose}
            onConfirm={handleClickAlertOpen}
          />
        </div>
      </Box>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    conversation:
      state.conversations &&
      state.conversations.find(
        (conversation) =>
          conversation.otherUser.username === state.activeConversation
      ),
  };
};

export default connect(mapStateToProps, null)(ActiveBetting);
