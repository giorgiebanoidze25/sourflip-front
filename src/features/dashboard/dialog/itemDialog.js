import React from "react";
import { useEffect } from "react";
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
import { Grid } from "@material-ui/core";
import clsx from "clsx";
import Avatar from "../../../components/Avatar";
import imgPrice1 from "../../../assets/img/left.png";
import imgPrice2 from "../../../assets/img/right.png";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StyledDialog = styled(Dialog)`
  .MuiPaper-root {
    background-color: transparent;
    width: 80%;
  }
`;

const useStyles = makeStyles((theme) => ({
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
    maxHeight: "85vh",
    minHeight: "200px",
    overflow: "hidden",
    zIndex: 200,
    transition: "opacity 175ms ease 0s, transform 350ms ease 0s",
    opacity: 1,
    transform: "translateY(0vh)",
    backdropFilter: "blur(10px)",
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "40px",
    },
  },

  title: {
    textAlign: "center",
    top: "-30px",
    width: "100%",
    fontSize: "24px !important",
    fontWeight: 700,
    color: "#fff",
    fontFamily: "Poppins,sans-serif !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px !important",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "24px !important",
    },
  },

  headerBox: {
    backgroundColor: "transparent !important",
    backdropFilter: "blur(10px)",
  },

  titleheader: {
    display: "flex",
    justifyContent: "center",
  },

  close: {
    position: "relative",
    top: "-15px",
    color: "#9c9ebb",
    [theme.breakpoints.down("sm")]: {
      left: "0px",
    },
    [theme.breakpoints.up("sm")]: {
      left: "40px",
    },
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
    textAlign: "center",
    marginLeft: "-10px",
    marginRight: "-10px",
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
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px !important",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "16px !important",
    },
  },
  inputtext1: {
    backgroundColor: "#343654",
    borderRadius: "12px",
    padding: "10px",
    paddingLeft: "30px",
    opacity: ".65",
    fontSize: "20px",
    textAlign: "center",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontFamily: "Poppins,sans-serif !important",
    color: "#ffff",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px !important",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "20px !important",
    },
  },
  inputtext3: {
    backgroundColor: "#343654",
    borderRadius: "12px",
    padding: "10px",
    fontSize: "20px",
    textAlign: "center",
    fontFamily: "Poppins,sans-serif !important",
    color: "#ffff",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px !important",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "20px !important",
      paddingLeft: "30px",
      paddingRight: "30px",
    },
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
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px !important",
      flexDirection: "column",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "20px !important",
      flexDirection: "row",
    },
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
    width: "80px",
    height: "80px",
    position: "relative",
    margin: "0",
    transformStyle: "preserve-3d",
  },
  tails: {
    transform: "rotateX(180deg)",
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
  },
  heads: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
  },
  priceimg: {
    width: "80px",
    height: "80px",
  },
  priceimg1: {
    width: "80px",
    height: "80px",
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

  useEffect(() => {
    // const coin = document.getElementById("coin");
    // coin.style.animation = "none";
    // if (Math.random() <= 0.5) {
    //   console.log("+++");
    //   coin.style.animation = "flip-heads 3s forwards";
    // } else {
    //   console.log("---");
    //   coin.style.animation = "flip-tails 3s forwards";
    //   console.log(coin.style.animation);
    // }
  }, []);

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
          <DialogContentText
            id="alert-dialog-title"
            className={classes.title}
          ></DialogContentText>
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
              <Avatar click="coinflip" type="complex" />
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
              <Avatar click="coinflip" type="complex" />
              <Typography className={classes.text1}>Pray4Shreyas</Typography>
            </div>
          </div>
          <div id="middle">
            <Grid container spacing={2}>
              <Grid item xs={12} lg={4} style={{ paddingTop: "0px" }}>
                <FingerprintIcon className={classes.icon} />
                <Typography className={classes.inputtext1}>
                  bz3WyG2SAvBQS7vOZaflK
                </Typography>
              </Grid>
              <Grid item xs={12} lg={4} style={{ paddingTop: "0px" }}>
                <LockIcon className={classes.icon} />
                <Typography className={classes.inputtext1}>
                  2f88195af47adf74
                </Typography>
              </Grid>
              <Grid item xs={12} lg={4} style={{ paddingTop: "0px" }}>
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
