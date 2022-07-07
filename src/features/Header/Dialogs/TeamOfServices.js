import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Typography from "@material-ui/core/Typography";
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
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.4em",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "*::-webkit-scrollbar-thumb": {
      borderRadius: "100px",
      background: "#3185ff",
      border: "6px solid rgba(0,0,0,0.2)",
    },
  },
  box: {
    overflowY: "scroll",
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

  subtitle: {
    color: "rgb(255, 255, 255)",
    fontWeight: 700,
  },
});

export const TeamOfServices = (props) => {
  const classes = useStyles();
  const { onClose, open } = props;

  const handleClose = () => {
    onClose(true);
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
            Terms of Service & Agreement
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
          By accessing the website at https://www.rbxflip.com/ (referred to here
          as “RBXFlip”), you are agreeing to be bound by these terms of service,
          all applicable laws and regulations, and agree that you are
          responsible for compliance with any applicable local laws. If you do
          not agree with any of these terms, you are prohibited from using or
          accessing this site. The materials contained in this website are
          protected by applicable copyright and trademark law.
        </DialogContentText>

        <DialogContentText className={classes.secondinfoText}>
          <Typography variant="h6" className={classes.subtitle}>
            Bet Participation
          </Typography>
          By placing a bet on RBXFlip you are 18 years of age or over, of sound
          mind capable of taking responsibility for your own actions. RBXFlip
          comes with no guarantees, expressed or implied, in connection with the
          service which is provided to you "as is" and we provide you with no
          warranty whatsoever regarding its quality, completeness or accuracy.
          As such, RBXFlip cannot be held responsible in any event, direct,
          indirect or consequential with the use of the website. RBXFlip
          reserves the right to suspend and/or cancel any bet/wager at any time.
          When a platform is suspended, any bets entered will be on hold.
          RBXFlip also reserves the right to cease betting at any time without
          notice. RBXFlip is not responsible for any trade limit errors ROBLOX
          limits the user to.
        </DialogContentText>

        <DialogContentText className={classes.secondinfoText}>
          <Typography variant="h6" className={classes.subtitle}>
            Affiliation
          </Typography>
          RBXFlip is not affiliated with Roblox or any trademarks of the Roblox
          Corporation.
        </DialogContentText>

        <DialogContentText className={classes.secondinfoText}>
          <Typography variant="h6" className={classes.subtitle}>
            Item Values
          </Typography>
          Item values are constantly fluctuating and they may be updated at any
          time without any warning or notice. We are not responsible for changes
          or modifications to values of items.
        </DialogContentText>
        {/* </Grid> */}
      </DialogContent>
    </StyledDialog>
  );
};

TeamOfServices.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
