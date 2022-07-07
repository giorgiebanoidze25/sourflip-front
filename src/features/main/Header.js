import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import FiberSmartRecordIcon from "@material-ui/icons/FiberSmartRecord";
import SportsKabaddiIcon from "@material-ui/icons/SportsKabaddi";
import ReceiptIcon from "@material-ui/icons/Receipt";
import Looks3Icon from "@material-ui/icons/Looks3";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { CreateRoom } from "./Dialogs/CreateRoom";

const useStyles = makeStyles((theme) => ({
  body: {
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "30px",
    marginBottom: "30px",
    position: "relative",
    display: "flex",
    gap: "30px",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
    },
  },
  left: {
    position: "relative",
    display: "flex",
    gap: "30px",
    alignItems: "center",
  },
  right: {
    position: "relative",
    display: "flex",
    gap: "30px",
    alignItems: "center",
  },
  text: {
    fontFamily: "Poppins,sans-serif !important",
    speak: "never",
    fontStyle: "normal",
    fontSize: "18px",
    fontWeight: "700",
    fontFeatureSettings: "normal",
    fontVariant: "normal",
    textTransform: "none",
    lineHeight: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "rgb(156, 158, 187)",
    "&:hover": {
      color: "#3185ff",
      cursor: "pointer",
    },
    "&:active": {
      color: "#3185ff",
      cursor: "pointer",
    },
  },
  text1: {
    fontFamily: "Poppins,sans-serif !important",
    speak: "never",
    fontStyle: "normal",
    fontSize: "18px",
    fontWeight: "700",
    fontFeatureSettings: "normal",
    fontVariant: "normal",
    textTransform: "none",
    lineHeight: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#3185ff",
    "&:hover": {
      color: "#3185ff",
      cursor: "pointer",
    },
    "&:active": {
      color: "#3185ff",
      cursor: "pointer",
    },
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  linkstyle: {
    border: "none",
    textDecoration: "none",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function Header() {
  const classes = useStyles();
  const [openCreateRoom, setCreateRoom] = React.useState(false);
  const [coinbtnColor, setCoinBtnColor] = React.useState(false);
  const [potbtnColor, setPotBtnColor] = React.useState(false);
  const [rpsbtnColor, setRpsBtnColor] = React.useState(false);
  const [claimbtnColor, setClaimBtnColor] = React.useState(false);

  const changeCoinBtnColor = () => {
    setCoinBtnColor(!coinbtnColor);
    setPotBtnColor(false);
    setRpsBtnColor(false);
    setClaimBtnColor(false);
  };
  const changePotBtnColor = () => {
    setPotBtnColor(!potbtnColor);
    setCoinBtnColor(false);
    setRpsBtnColor(false);
    setClaimBtnColor(false);
  };
  const changeRpsBtnColor = () => {
    setRpsBtnColor(!rpsbtnColor);
    setClaimBtnColor(false);
    setPotBtnColor(false);
    setCoinBtnColor(false);
  };
  const changeClaimBtnColor = () => {
    setClaimBtnColor(!claimbtnColor);
    setPotBtnColor(false);
    setRpsBtnColor(false);
    setCoinBtnColor(false);
  };
  const handleClickCreateRoomClose = (value) => {
    setCreateRoom(false);
  };

  const handleClickCreateRoomOpen = () => {
    setCreateRoom(true);
  };

  let coin_btn_class = coinbtnColor ? classes.text1 : classes.text;
  let pot_btn_class = potbtnColor ? classes.text1 : classes.text;
  let rps_btn_class = rpsbtnColor ? classes.text1 : classes.text;
  let claim_btn_class = claimbtnColor ? classes.text1 : classes.text;

  return (
    true && (
      <div className={classes.body}>
        <div className={classes.left}>
          <Link to="/coinflip" className={classes.linkstyle}>
            <Typography
              className={coin_btn_class}
              onClick={changeCoinBtnColor.bind(this)}
            >
              <FiberSmartRecordIcon /> &nbsp; Coinflip
            </Typography>
          </Link>
          <Typography
            className={pot_btn_class}
            onClick={changePotBtnColor.bind(this)}
          >
            <Looks3Icon /> &nbsp; Jackpot
          </Typography>
          <Typography
            className={rps_btn_class}
            onClick={changeRpsBtnColor.bind(this)}
          >
            <SportsKabaddiIcon /> &nbsp; Rock Paper Scissors
          </Typography>
          <Typography
            className={claim_btn_class}
            onClick={changeClaimBtnColor.bind(this)}
          >
            <ReceiptIcon /> &nbsp; Claims
          </Typography>
        </div>
        <div className={classes.right}>
          <Typography
            className={classes.text}
            onClick={handleClickCreateRoomOpen}
          >
            <AddCircleIcon /> &nbsp; Create Room
          </Typography>
          <CreateRoom
            onClose={handleClickCreateRoomClose}
            open={openCreateRoom}
          />
        </div>
      </div>
    )
  );
}

export default Header;
