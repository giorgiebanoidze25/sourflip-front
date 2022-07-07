import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import FiberSmartRecordIcon from "@material-ui/icons/FiberSmartRecord";
import SportsKabaddiIcon from "@material-ui/icons/SportsKabaddi";
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import Looks3Icon from "@material-ui/icons/Looks3";
import { logout } from "../../utils/thunkCreators";
import { clearOnLogout } from "../../store/index";

import WinnerIcon from "@material-ui/icons/EmojiEvents";
import StatIcon from "@material-ui/icons/PieChart";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 270,
    backgroundColor: "#343654",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  NavBar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100vh",
  },
  NavBarTop: {
    display: "flex",
    flexDirection: "column",
    gap: "5vh",
    padding: "20px",
  },
  NavBarDown: {
    display: "flex",
    padding: "20px",
    justifyContent: "space-between",
  },

  text: {
    cursor: "pointer",
    color: "#9c9ebb",
    fontWeight: "700",
    fontSize: "20px",
    fontFamily: "Poppins,sans-serif",
  },
  text1: {
    cursor: "pointer",
    color: "#9c9ebb",
    fontWeight: "700",
    fontSize: "16px",
    fontFamily: "Poppins,sans-serif",
  },
  linkstyle: {
    border: "none",
    textDecoration: "none",
  },
  offset: theme.mixins.toolbar,
}));

const NavBarComponent = withRouter((props) => {
  const classes = useStyles();

  const sideList = (side) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={props.toggleDrawerHandler}
      onKeyDown={props.toggleDrawerHandler}
    >
      <div className={classes.NavBar}>
        <div className={classes.NavBarTop}>
          <Link to="/coinflip" className={classes.linkstyle}>
            <Typography className={classes.text}>
              <FiberSmartRecordIcon /> &nbsp; Coinflip
            </Typography>
          </Link>
          <Typography className={classes.text}>
            <Looks3Icon /> &nbsp; Jackpot
          </Typography>
          <Typography className={classes.text}>
            <SportsKabaddiIcon /> &nbsp; RPS
          </Typography>

          <Typography
            className={classes.text}
            onClick={props.handleClickLeaderboardsOpen}
          >
            <WinnerIcon /> &nbsp; Leaderboards
          </Typography>

          <Typography
            className={classes.text}
            onClick={props.handleClickStatsOpen}
          >
            <StatIcon /> &nbsp; Stats
          </Typography>

          <Typography
            className={classes.text}
            onClick={props.handleClickWalletOpen}
          >
            <AccountBalanceWalletIcon /> &nbsp; Wallet
          </Typography>
        </div>
        <div className={classes.NavBarDown}>
          <Typography
            className={classes.text1}
            onClick={props.handleClickProvailyFairOpen}
          >
            Provably Fair
          </Typography>

          <Typography
            className={classes.text1}
            onClick={props.handleClickTeamOfServicesOpen}
          >
            TOS
          </Typography>

          <Typography
            className={classes.text1}
            onClick={props.handleClickFaqOpen}
          >
            FAQ
          </Typography>
        </div>
      </div>
    </div>
  );

  return (
    <Drawer open={props.left} onClose={props.toggleDrawerHandler}>
      {sideList("left")}
    </Drawer>
  );
});

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (id) => {
      dispatch(logout(id));
      dispatch(clearOnLogout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarComponent);
