import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import LockIcon from "@material-ui/icons/Lock";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";
import imgAvatar1 from "../../assets/img/avatar1.png";
import imgPrice1 from "../../assets/img/left.png";
import imgPrice2 from "../../assets/img/right.png";
import { Grid } from "@material-ui/core";
import clsx from "clsx";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StyledDialog = styled(Dialog)`
  .MuiPaper-root {
    background-color: transparent;
    max-width: 100%;
  }
`;

const useStyles = makeStyles((theme) => ({
  box: {
    position: "relative",
    borderRadius: "15px",
    background: "#282a40",
    // width: "100%",
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
    // width: "100%",
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
  body: {
    display: "flex",
    flexDirection: "column",
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
  },
  avatar: {
    display: "flex",
    flexDirection: "column",
  },
  imgAvatar: {
    border: "none",
    width: "100px",
    height: "100px",
    borderRadius: "50px",
    background: "#2c2d46",
    alignSelf: "center",
    backgroundSize: "cover",
  },
  imgmark: {
    position: "relative",
    top: "-70px",
    left: "35px",
    border: "none",
    width: "30px",
    height: "30px",
    borderRadius: "50px",
    background: "#2c2d46",
    alignSelf: "center",
    backgroundSize: "cover",
  },
  text1: {
    opacity: ".65",
    fontSize: "16px",
    fontWeight: "700",
    fontFamily: "Poppins,sans-serif !important",
    color: "#ffff",
  },
  inputtext1: {
    backgroundColor: "#343654",
    borderRadius: "12px",
    padding: "10px",
    paddingLeft: "30px",
    opacity: ".65",
    fontSize: "20px",
    textAlign: "center",
    fontFamily: "Poppins,sans-serif !important",
    color: "#ffff",
  },
  inputtext3: {
    backgroundColor: "#343654",
    borderRadius: "12px",
    padding: "10px",
    paddingLeft: "30px",
    paddingRight: "30px",
    fontSize: "20px",
    textAlign: "center",
    fontFamily: "Poppins,sans-serif !important",
    color: "#ffff",
  },
  inputtext2: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#343654",
    borderRadius: "12px",
    fontSize: "20px",
    textAlign: "center",
    fontFamily: "Poppins,sans-serif !important",
    color: "#ffff",
  },
  finger: {
    color: "#9999",
  },
  icon: {
    color: "#ffff",
    position: "relative",
    top: "40px",
    left: "10px",
  },
  container: {
    position: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  coin: {
    width: "100px",
    height: "100px",
    position: "relative",
    margin: "0",
    transformStyle: "preserve-3d",
  },
  tails: {
    tranform: "rotateX(180deg)",
    position: "absolute",
    backfaceVisibility: "hidden",
  },
  heads: {
    position: "absolute",
    backfaceVisibility: "hidden",
  },
  priceimg: {
    width: "100px",
    height: "100px",
  },
  priceimg1: {
    width: "100px",
    height: "100px",
  },
  animatedItem: {
    animation: `$flip-heads 3000ms ${theme.transitions.easing.easeInOut}`,
  },
  animatedItemExiting: {
    animation: `$flip-tails 3000ms ${theme.transitions.easing.easeInOut}`,
  },
  "@keyframes flip-heads": {
    "0%": {
      transform: "rotateX(0)",
    },
    "100%": {
      transform: "rotateX(2520deg)",
    },
  },
  "@keyframes flip-tails": {
    "0%": {
      transform: "rotateX(0)",
    },
    "100%": {
      transform: "rotateX(2340deg)",
    },
  },
}));

export const ItemDialog = (props) => {
  const classes = useStyles();
  const [exit, setExit] = React.useState(false);
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
            RBXfllip
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
        <div className={classes.body}>
          <div id="top" className={classes.top}>
            <div className={classes.avatar}>
              <div>
                <img
                  className={classes.imgmark}
                  src={imgPrice1}
                  alt="+++"
                ></img>
                <img
                  className={classes.imgAvatar}
                  src={imgAvatar1}
                  onClick={() => setExit(true)}
                  alt="+++"
                ></img>
              </div>
              <Typography className={classes.text1}>Pray4Shreyas</Typography>
            </div>
            <div className={classes.imgAvatar}>
              <div
                className={clsx(classes.animatedItem, {
                  [classes.animatedItemExiting]: exit,
                })}
              >
                <div className={classes.container}>
                  <div id="coin" className={classes.coin}>
                    <div className={classes.heads}>
                      <img
                        src={imgPrice1}
                        className={classes.priceimg}
                        alt="+++"
                      />
                    </div>
                    <div className={classes.tails}>
                      <img
                        src={imgPrice2}
                        className={classes.priceimg1}
                        alt="+++"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {exit && (
              <button onClick={() => setExit(false)}>Click to enter</button>
            )}
            <div className={classes.avatar}>
              <div>
                <img
                  className={classes.imgmark}
                  src={imgPrice2}
                  alt="+++"
                ></img>
                <img
                  className={classes.imgAvatar}
                  src={imgAvatar1}
                  alt="+++"
                ></img>
              </div>
              <Typography className={classes.text1}>Pray4Shreyas</Typography>
            </div>
          </div>
          <div id="middle">
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <FingerprintIcon className={classes.icon} />
                <Typography className={classes.inputtext1}>
                  bz3WyG2SAvBQS7vOZaflK
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <LockIcon className={classes.icon} />
                <Typography className={classes.inputtext1}>
                  2f88195af47adf74
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <HelpOutlineIcon className={classes.icon} />
                <Typography className={classes.inputtext1}>
                  0.13021660372617
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <div className={classes.inputtext2}>
                  <Typography className={classes.inputtext3}>50.06%</Typography>
                  <Typography className={classes.inputtext3}>
                    R$ 80.09k
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className={classes.inputtext2}>
                  <Typography className={classes.inputtext3}>49.94%</Typography>
                  <Typography className={classes.inputtext3}>
                    R$ 79.80k
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </DialogContent>
    </StyledDialog>
  );
};

ItemDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
