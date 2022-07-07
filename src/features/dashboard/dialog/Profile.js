import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import avatar1 from "../../../assets/img/avatar1.png";

const useStyles = makeStyles((theme) => ({
  profilesection: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "50vw",
  },
  profilesection_1: {
    display: "flex",
    gap: "2vw",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  profilesection_2: {
    display: "flex",
    gap: "2vw",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  profilesection_1_1: {
    display: "flex",
    gap: "1vh",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      alignItems: "center",
    },
    [theme.breakpoints.up("md")]: {
      alignItems: "start",
    },
  },
  profilesection_1_1_1: {
    display: "flex",
    gap: "10px",
  },
  imgAvatar: {
    width: "100px",
    height: "100px",
    margin: "10px",
    borderRadius: "50px",
    border: "3px solid rgb(92,170,204)",
  },
  text1: {
    opacity: ".65",
    fontSize: "16px",
    fontWeight: "700",
    fontFamily: "Poppins,sans-serif !important",
    color: "#ffff",
  },
  text2: {
    fontSize: "16px",
    fontWeight: "700",
    fontFamily: "Poppins,sans-serif !important",
    color: "#ffff",
  },
  inputtext1: {
    textAlign: "center",
    fontWeight: "700",
    fontFamily: "Poppins,sans-serif !important",
    color: "#ffff",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "20px",
    },
  },
  inputtext2: {
    opacity: ".65",
    textAlign: "center",
    fontWeight: "700",
    fontFamily: "Poppins,sans-serif !important",
    color: "#ffff",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "20px",
    },
  },
  inputtext3: {
    display: "flex",
    backgroundColor: "#3185ff",
    borderRadius: "25px",
    padding: "10px",
    gap: "5vw",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "10px",
      paddingRight: "10px",
      gap: "1vw",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "30px",
      paddingRight: "30px",
      gap: "5vw",
    },
  },
  inputtext4: {
    display: "flex",
    backgroundColor: "#f89e1b",
    borderRadius: "25px",
    padding: "10px",
    paddingLeft: "30px",
    paddingRight: "30px",
    gap: "5vw",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "10px",
      paddingRight: "10px",
      gap: "1vw",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "30px",
      paddingRight: "30px",
      gap: "5vw",
    },
  },
}));
const Profile = (props) => {
  const { name } = props;
  const classes = useStyles();

  return (
    <div className={classes.profilesection}>
      <div className={classes.profilesection_1}>
        <img className={classes.imgAvatar} src={avatar1} alt="+++" />
        <div className={classes.profilesection_1_1}>
          <Typography className={classes.text1}>profile of</Typography>
          <Typography className={classes.text2}>{name}</Typography>
          <div className={classes.profilesection_1_1_1}>
            <div className={classes.inputtext3}>
              <Typography className={classes.inputtext2}>PROF</Typography>
              <Typography className={classes.inputtext1}>-80.09k</Typography>
            </div>
            <div className={classes.inputtext4}>
              <Typography className={classes.inputtext2}>BET</Typography>
              <Typography className={classes.inputtext1}>200k</Typography>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.profilesection_2}>
        <div>
          <Typography className={classes.text1}>Games Played: 18</Typography>
          <Typography className={classes.text1}>Games Won: 9</Typography>
        </div>
        <div>
          <Typography className={classes.text1}>Games Lost: 9</Typography>
          <Typography className={classes.text1}>Games Tired: 0</Typography>
        </div>
        <div>
          <Typography className={classes.text1}>Giveaways Hosted: 0</Typography>
          <Typography className={classes.text1}>Giveaways Won: 0</Typography>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {};

export default Profile;
