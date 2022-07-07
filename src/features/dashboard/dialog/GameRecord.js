import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AvatarVsCard from "./AvatarVsCard";
const useStyles = makeStyles({
  gamerecordsection: {
    display: "flex",
    flexDirection: "column",
    width: "70vw",
    gap: "15px",
  },
  gamerecordsection_1: {
    display: "flex",
    gap: "30px",
  },
  gamerecordsection_2: {
    overflowX: "scroll",
    display: "flex",
    gap: "10px",
    backgroundColor: "#2b2d46",
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
    "&:hover": {
      color: "#3185ff",
      cursor: "pointer",
    },
    "&:active": {
      color: "#3185ff",
      cursor: "pointer",
    },
  },
  recordtext1: {
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
});
function GameRecord(props) {
  const classes = useStyles();
  const [coinBtnColor, setCoinBtnColor] = React.useState(true);
  const [rpsBtnColor, setRpsBtnColor] = React.useState(false);
  const [potBtnColor, setPotBtnColor] = React.useState(false);

  let coin_btn_class = coinBtnColor ? classes.recordtext1 : classes.recordtext;
  let rps_btn_class = rpsBtnColor ? classes.recordtext1 : classes.recordtext;
  let pot_btn_class = potBtnColor ? classes.recordtext1 : classes.recordtext;

  const changeCoinBtnColor = () => {
    setCoinBtnColor(!coinBtnColor);
    setRpsBtnColor(false);
    setPotBtnColor(false);
  };

  const changeRpsBtnColor = () => {
    setRpsBtnColor(!rpsBtnColor);
    setCoinBtnColor(false);
    setPotBtnColor(false);
  };
  const changePotBtnColor = () => {
    setPotBtnColor(!potBtnColor);
    setCoinBtnColor(false);
    setRpsBtnColor(false);
  };

  return (
    <div className={classes.gamerecordsection}>
      <div className={classes.gamerecordsection_1}>
        <Typography
          className={coin_btn_class}
          onClick={changeCoinBtnColor.bind(this)}
        >
          Coinflip
        </Typography>
        <Typography
          className={rps_btn_class}
          onClick={changeRpsBtnColor.bind(this)}
        >
          Rps
        </Typography>
        <Typography
          className={pot_btn_class}
          onClick={changePotBtnColor.bind(this)}
        >
          Jackpot
        </Typography>
      </div>
      <div className={classes.gamerecordsection_2}>
        <AvatarVsCard />
        <AvatarVsCard />
        <AvatarVsCard />
        <AvatarVsCard />
        <AvatarVsCard />
        <AvatarVsCard />
      </div>
    </div>
  );
}

GameRecord.propTypes = {};

export default GameRecord;
