import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import styled from "styled-components";
import imgAvatar1 from "../../../assets/img/avatar1.png";
import imgAvatar2 from "../../../assets/img/avatar2.png";
import imgAvatar3 from "../../../assets/img/avatar3.png";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StyledDialog = styled(Dialog)`
  .MuiPaper-root {
    background-color: transparent;
    max-width: 900px;
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
    overflowX: "none",
    borderRadius: "15px",
    background: "#282a40",
    maxHeight: "85vh",
    minHeight: "200px",
    overflow: "hidden",
    padding: "64px",
    zIndex: 200,
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "64px",
    },
  },
  box1: {
    overflowX: "hidden",
    overflowY: "scroll",
    height: "30vh",
    width: "100%",
    marginTop: "3vh",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
  },
  item_left: {
    display: "flex",
    gap: "30px",
  },
  item_right: {},
  title: {
    textAlign: "center",
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
    width: "100vw",
    backdropFilter: "blur(10px)",
  },

  titleheader: {
    display: "flex",
    justifyContent: "end",
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

  avatars: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  avatar1: {
    width: "30%",
    display: "flex",
    gap: "10px",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "60px",
    justifyContent: "flex-end",
  },

  avatar2: {
    width: "30%",
    display: "flex",
    gap: "10px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  avatar3: {
    width: "30%",
    display: "flex",
    gap: "10px",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "60px",
    justifyContent: "flex-end",
  },

  blackboard1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "15px",
    maxWidth: "130px",
    height: "82px",
    borderRadius: "7px",
    background: "#343654",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
  },
  blackboard2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "15px",
    maxWidth: "130px",
    height: "141px",
    borderRadius: "7px",
    background: "#f89e1b",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
  },
  blackboard3: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "15px",
    maxWidth: "130px",
    height: "82px",
    borderRadius: "7px",
    background: "#3185ff",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
  },
  blackboardtext: {
    textAlign: "center",
    width: "100%",
    fontSize: "24px !important",
    fontWeight: 700,
    color: "hsla(0,0%,100%,.377)",
    fontFamily: "Poppins,sans-serif !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px !important",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "24px !important",
    },
  },
  textavatar: {
    textAlign: "center",
    width: "100%",
    fontSize: "18px !important",
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
  imgAvatar: {
    border: "none",
    width: "80px",
    height: "80px",
    borderRadius: "50px",
    background: "#2c2d46",
    alignSelf: "center",
    backgroundSize: "cover",
  },
  listimgAvatar: {
    border: "none",
    width: "30px",
    height: "30px",
    borderRadius: "50px",
    background: "#2c2d46",
    backgroundPosition: "50%",
    backgroundSize: "cover",
  },
  listtextavatar3: {
    color: "rgb(49, 133, 255)",
    fontSize: "18px",
    fontWeight: "700",
    fontFamily: "Poppins,sans-serif !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px !important",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "24px !important",
    },
  },
  listtextavatar1: {
    color: "#ffff",
    fontSize: "18px",
    fontWeight: "700",
    fontFamily: "Poppins,sans-serif !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px !important",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "24px !important",
    },
  },
  listtextavatar2: {
    color: "#ffff",
    fontSize: "18px",
    fontWeight: "700",
    fontFamily: "Poppins,sans-serif !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px !important",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "24px !important",
    },
  },
}));

export const Leaderboards = (props) => {
  const classes = useStyles();
  const { onClose, open } = props;

  const handleClose = () => {
    onClose(true);
  };

  return (
    <StyledDialog
      id="++++"
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      TransitionComponent={Transition}
      className={classes.headerBox}
    >
      <DialogContent className={classes.box} id="-----------">
        {/* <Grid container> */}
        <div className={classes.titleheader}>
          <DialogContentText id="alert-dialog-title" className={classes.title}>
            Leaderboards
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
        <div className={classes.avatars}>
          <div className={classes.avatar1}>
            <img className={classes.imgAvatar} src={imgAvatar1} alt="+++"></img>
            <Typography className={classes.textavatar}>
              3. Reset38217983
            </Typography>
            <div className={classes.blackboard1}>
              <Typography className={classes.blackboardtext}>7.10m</Typography>
            </div>
          </div>
          <div className={classes.avatar2}>
            <img className={classes.imgAvatar} src={imgAvatar2} alt="+++"></img>
            <Typography className={classes.textavatar}>1. StrHenrik</Typography>
            <div className={classes.blackboard2}>
              <Typography className={classes.blackboardtext}>11.78m</Typography>
            </div>
          </div>
          <div className={classes.avatar3}>
            <img className={classes.imgAvatar} src={imgAvatar3} alt="+++"></img>
            <Typography className={classes.textavatar}>
              2. PL4STICATED
            </Typography>
            <div className={classes.blackboard3}>
              <Typography className={classes.blackboardtext}>10.45m</Typography>
            </div>
          </div>
        </div>
        <div className={classes.box1}>
          <div className={classes.item}>
            <div className={classes.item_left}>
              <Typography className={classes.listtextavatar1}>3.</Typography>
              <img
                className={classes.listimgAvatar}
                src={imgAvatar2}
                alt="+++"
              ></img>
              <Typography className={classes.listtextavatar2}>
                FIuerDeLis
              </Typography>
            </div>
            <Typography className={classes.listtextavatar3}>6.24m</Typography>
          </div>
        </div>
      </DialogContent>
    </StyledDialog>
  );
};

Leaderboards.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
