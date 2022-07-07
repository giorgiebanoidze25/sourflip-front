import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "../../../components/Avatar";
import hair from "../../../assets/img/hair.png";

const useStyles = makeStyles({
  gamerecordcard: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#343654",
    borderRadius: "12px",
    alignItems: "center",
    margin: "15px",
    gap: "10px",
    padding: "10px",
    boxShadow: "0 3.5px 2px 0 rgb(0 0 0 / 25%)",
  },
  gamerecordcard_1: {
    display: "flex",
  },
  gamerecordcard_2: {
    display: "flex",
    justifyContent: "center",
  },
  recordvstext: {
    fontFamily: "Poppins,sans-serif !important",
    fontStyle: "normal",
    fontSize: "18px",
    fontWeight: "700",
    lineHeight: "1",
    display: "flex",
    alignItems: "center",
    color: "#ffff",
  },
  recordtext: {
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
    color: "#ffff",
  },
  gamerecordAvatar2: {
    width: "50px",
    height: "50px",
    borderRadius: "25px",
    position: "relative",
    backgroundColor: "#2b2d46",
  },
  gamerecordAvatar3: {
    width: "50px",
    height: "50px",
    borderRadius: "25px",
    position: "relative",
    left: "-25px",
    backgroundColor: "#2b2d46",
  },
});
const AvatarVsCard = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.gamerecordcard}>
      <div className={classes.gamerecordcard_1}>
        <Avatar click="coinflip" type="complex" />
        <Typography className={classes.recordvstext}>VS</Typography>
        <Avatar click="coinflip" type="normal" />
      </div>
      <Typography className={classes.recordtext}>70,000</Typography>
      <div className={classes.gamerecordcard_2}>
        <img className={classes.gamerecordAvatar2} src={hair} alt="+++"></img>
        <img className={classes.gamerecordAvatar3} src={hair} alt="+++"></img>
      </div>
      <Typography className={classes.recordtext}>VIEW</Typography>
    </div>
  );
};

AvatarVsCard.propTypes = {};

export default AvatarVsCard;
