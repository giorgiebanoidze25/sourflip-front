import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import CloseIcon from "@material-ui/icons/Close";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const StyledDialog = styled(Dialog)`
  .MuiPaper-root {
    background-color: transparent;
    max-width: 100%;
  }
`;

const useStyles = makeStyles({
  box: {
    position: "relative",
    borderRadius: "15px",
    background: "#282a40",
    // width: '85%;',
    maxWidth: "900px",
    maxHeight: "85vh",
    minHeight: "200px",
    padding: "43px",
    overflow: "hidden",
    zIndex: 200,
    transition: "opacity 175ms ease 0s, transform 350ms ease 0s",
    opacity: 1,
    transform: "translateY(0vh)",
    backdropFilter: "blur(10px)",
  },

  firstinfoText: {
    marginBottom: "15px",
    fontSize: "16px",
    fontWeight: 500,
    color: "#9c9ebb",
    fontFamily: "Poppins,sans-serif",
  },

  secondinfoText: {
    fontSize: "16px",
    fontWeight: 500,
    color: "#9c9ebb",
    fontFamily: "Poppins,sans-serif",
  },

  title: {
    textAlign: "center",
    top: "-30px",
    width: "100%",
    fontSize: "24px !important",
    fontWeight: 700,
    color: "#fff",
    fontFamily: "Poppins,sans-serif !important",
  },
  headerBox: {
    backgroundColor: "transparent !important",
    maxWidth: "100%",
    backdropFilter: "blur(10px)",
  },
  titleheader: {
    display: "flex",
    justifyContent: "center",
  },
  close: {
    position: "relative",
    left: "40px",
    top: "-15px",
    color: "#9c9ebb",
  },
});

export const ProvablyFair = (props) => {
  const classes = useStyles();
  const { onClose, open } = props;

  const handleClose = () => {
    onClose(true);
    console.log(props.onClose);
  };

  return (
    <StyledDialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      TransitionComponent={Transition}
      className={classes.headerBox}
    >
      <DialogContent className={classes.box}>
        {/* <Grid container> */}
        <div className={classes.titleheader}>
          <DialogContentText id="alert-dialog-title" className={classes.title}>
            Provably Fair
          </DialogContentText>
          <IconButton
            color="primary"
            className={classes.close}
            onClick={handleClose}
            variant="contained"
          >
            <CloseIcon />
          </IconButton>
        </div>
        <DialogContentText
          id="alert-dialog-description"
          className={classes.firstinfoText}
        >
          Our service takes advantage of a third party service (
          <a style={{ color: "white" }} href="https://random.org">
            https://random.org
          </a>
          ) to generate signed numbers and or strings which can be verified
          using a ticket that is created once a game is made.
        </DialogContentText>

        <DialogContentText className={classes.secondinfoText}>
          You can verify the legitimacy of games by inputting the ticket ID, aka
          the random string of letters revealed after a game is completed, in
          the “Ticket Identifier” form located at{" "}
          <a
            style={{ color: "white" }}
            href="https://api.random.org/tickets/form"
          >
            https://api.random.org/tickets/form
          </a>
          . Compare the randomly generated decimal to the one shown on the game
          you are verifying it’s fairness.
        </DialogContentText>
        {/* </Grid> */}
      </DialogContent>
    </StyledDialog>
  );
};

ProvablyFair.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
