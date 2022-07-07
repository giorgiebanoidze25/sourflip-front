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

export const Faq = (props) => {
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
            Frequently Asked Questions
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
        <DialogContentText className={classes.firstinfoText}>
          <Typography variant="h6" className={classes.subtitle}>
            What is RBXFlip?
          </Typography>
          RBXFlip is a thrilling Roblox gambling website with three unique
          game-modes! Our Coinflip mode is peer 2 peer meaning there is no house
          involved, purely testing your luck against other players! In Jackpot
          you're able to win up to 15 items with a potential 15 other players
          putting their items at stake each round. Rock Paper Scissors is
          similar to our Coinflip mode, with the added element of player choice
          to selecting a pick!
        </DialogContentText>

        <DialogContentText className={classes.secondinfoText}>
          <Typography variant="h6" className={classes.subtitle}>
            What is my .ROBLOSECURITY used for?
          </Typography>
          In order to automate all trades and for our website to function, we
          use your session token (.ROBLOSECURITY). Our bots do everything in
          real time, and ensures a trust-less system between all users.
        </DialogContentText>

        <DialogContentText className={classes.secondinfoText}>
          <Typography variant="h6" className={classes.subtitle}>
            Are my cookies safe?
          </Typography>
          Absolutely! We don't store any .ROBLOSECURITY tokens in our database,
          it's a all local in your own browser within a JWT.
        </DialogContentText>

        <DialogContentText className={classes.secondinfoText}>
          <Typography variant="h6" className={classes.subtitle}>
            What are your fees / commission?
          </Typography>
          Currently we take between 0-10% fees. 10% is the highest we will take
          if possible out of any individual game. We use an algorithm which
          calculates the highest possible items it may take (if any) which add
          up to 10% , but no more. It's entirely possible to gamble with 0% EV
          if we are unable to take any smaller items from the flip to cover
          fees!
        </DialogContentText>

        <DialogContentText className={classes.secondinfoText}>
          <Typography variant="h6" className={classes.subtitle}>
            What are the jackpot / coinflip game requirements?What are your fees
            / commission?
          </Typography>
          You must have Premium membership You must have a small item (items
          under 1500 RAP) Only 1-6 items per Coinflip/RPS game can be bet, and
          1-3 for Jackpot Only items above R$ 1,000 RAP or value may be bet Your
          trade filter must be off to everyone Your trades must be enabled to
          everyone
        </DialogContentText>

        <DialogContentText className={classes.secondinfoText}>
          <Typography variant="h6" className={classes.subtitle}>
            What is a "Projected" item?
          </Typography>
          Projected items are items in which someone purchases typically a low
          demand cheap item for an extremely high price, temporarily raising its
          RAP to an inflated false amount. We disable betting projected items as
          it's unfair to users that they're risking their real value items,
          against an inflated fake RAP item. Projected's are only an issue with
          unvalued items as we use Roblox's RAP metric to gauge their worth.
        </DialogContentText>

        <DialogContentText className={classes.secondinfoText}>
          <Typography variant="h6" className={classes.subtitle}>
            I didn't get my items what do I do?
          </Typography>
          Check rbxflip.com/claims, any glitched or failed attempts to send you
          your items will be available there for you to claim. For manual
          support please reach us on twitter @rbxflip
        </DialogContentText>
        {/* </Grid> */}
      </DialogContent>
    </StyledDialog>
  );
};

Faq.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
