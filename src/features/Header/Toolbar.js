import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Button, IconButton } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import { logout } from "../../utils/thunkCreators";
import { clearOnLogout } from "../../store/index";
import { ProvablyFair } from "../../features/Header/Dialogs/ProvablyFair";
import { TeamOfServices } from "../../features/Header/Dialogs/TeamOfServices";
import { Faq } from "../../features/Header/Dialogs/Faq";
import { Leaderboards } from "../../features/Header/Dialogs/Leaderboards";
import { Stats } from "../../features/Header/Dialogs/Stats";
import { Profile } from "../../features/Header/Dialogs/Profile";
import { Wallet } from "./Dialogs/Wallet";

import HelpIcon from "@material-ui/icons/HelpOutline";
import ProtectIcon from "@material-ui/icons/VerifiedUser";
import WinnerIcon from "@material-ui/icons/EmojiEvents";
import TermIcon from "@material-ui/icons/PlaylistAddCheck";
import StatIcon from "@material-ui/icons/PieChart";
import MenuIcon from "@material-ui/icons/Menu";
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

const useStyles = makeStyles((theme) => ({
  body: {
    width: "90%",
    position: "absolute",
    paddingLeft: "5%",
    paddingRight: "5%",
    backgroundColor: "#191b2d",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: "1000",
    [theme.breakpoints.down("lg")]: {
      display: "none",
      position: "absolute",
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
    },
  },
  NavBarBody: {
    display: "flex",
    width: "90%",
    position: "absolute",
    paddingLeft: "5%",
    paddingRight: "5%",
    backgroundColor: "#191b2d",
    textAlignLast: "center",
    alignItems: "center",
    zIndex: "1000",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#ffff",
    fontSize: "50px",
  },
  left: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  right: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
    lineHeight: "64px",
    color: "white",
  },

  icons: {
    fontSize: "10pt",
    color: "white",
  },
  offset: theme.mixins.toolbar,
}));

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&": {},
  },
}))(MenuItem);

const ToolbarComponent = withRouter((props) => {
  const classes = useStyles();
  const { logout } = props;
  const { id, photoUrl, username } = props.user;
  const [drawerActive, setDrawerActive] = React.useState(false);
  const [user, setUser] = useState(null);
  const [isMenu, setIsMenu] = useState(null);
  const [openProfile, setProfile] = React.useState(false);

  useEffect(() => {
    setUser(props.user);
    if (window.innerWidth <= 1125) {
      setDrawerActive(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 1125) {
        setDrawerActive(true);
      } else {
        setDrawerActive(false);
      }
    });
  }, [props]);

  const handleMenu = (event) => {
    setIsMenu(event.currentTarget);
  };

  const handleMenuClose = () => {
    setIsMenu(null);
  };

  const handleLogout = async () => {
    setIsMenu(null);
    await logout(user.id);
  };

  const handleClickProfileClose = (value) => {
    setProfile(false);
  };

  const handleClickProfileOpen = () => {
    setProfile(true);
  };

  return (
    <React.Fragment>
      {drawerActive === true ? (
        <div className={classes.NavBarBody}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="open drawer"
            onClick={props.openDrawerHandler}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            sourflips.io
          </Typography>
          <IconButton className={classes.icons} onClick={handleMenu}>
            <Avatar className={classes.avatar} alt="avatar" src={photoUrl}>
              {username}
            </Avatar>
          </IconButton>
          <StyledMenu
            id="customized-menu"
            anchorEl={isMenu}
            keepMounted
            open={Boolean(isMenu)}
            onClose={handleMenuClose}
          >
            <StyledMenuItem>
              <ListItemText
                disableTypography
                primary={
                  <Typography type="body2" style={{ fontSize: "9pt" }}>
                    <i className={"mdi mdi-coins"} />
                    &nbsp;Exchange
                  </Typography>
                }
              />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    type="body2"
                    style={{ fontSize: "9pt" }}
                    onClick={handleClickProfileOpen}
                  >
                    <i className={"mdi mdi-pencil"} />
                    &nbsp;Profile
                  </Typography>
                }
              />
            </StyledMenuItem>
            <StyledMenuItem onClick={handleLogout}>
              <ListItemText
                disableTypography
                primary={
                  <Typography type="body2" style={{ fontSize: "9pt" }}>
                    <i className={"mdi mdi-logout"} />
                    &nbsp;Logout
                  </Typography>
                }
              />
            </StyledMenuItem>
          </StyledMenu>
        </div>
      ) : (
        <div className={classes.body}>
          <div className={classes.left}>
            <Button
              variant="h5"
              startIcon={<ProtectIcon />}
              className={classes.title}
              onClick={props.handleClickProvailyFairOpen}
            >
              Provably Fair
            </Button>
            <Button
              variant="h5"
              startIcon={<TermIcon />}
              className={classes.title}
              onClick={props.handleClickTeamOfServicesOpen}
            >
              Terms Of Service
            </Button>
            <Button
              variant="h5"
              startIcon={<HelpIcon />}
              className={classes.title}
              onClick={props.handleClickFaqOpen}
            >
              FAQ
            </Button>
            <Button
              variant="h5"
              startIcon={<WinnerIcon />}
              className={classes.title}
              onClick={props.handleClickLeaderboardsOpen}
            >
              Leaderboards
            </Button>
            <Button
              variant="h5"
              startIcon={<StatIcon />}
              className={classes.title}
              onClick={props.handleClickStatsOpen}
            >
              Stats
            </Button>
            <Button
              variant="h5"
              startIcon={<AccountBalanceWalletIcon />}
              className={classes.title}
              onClick={props.handleClickWalletOpen}
            >
              Wallet
            </Button>
          </div>
          <div className={classes.right}>
            {id !== undefined ? (
              <>
                <IconButton
                  className={classes.icons}
                  onClick={() => props.history.push("/main")}
                >
                  <i className={"mdi mdi-cards-playing-outline"} />
                  &nbsp;Play
                </IconButton>
                <IconButton
                  className={classes.icons}
                  onClick={() => props.history.push("/message")}
                >
                  <i className={"mdi mdi-message"} />
                  &nbsp;Message
                </IconButton>
                <IconButton className={classes.icons} onClick={handleMenu}>
                  <Avatar
                    className={classes.avatar}
                    alt="avatar"
                    src={photoUrl}
                  >
                    {username}
                  </Avatar>
                </IconButton>
                <StyledMenu
                  id="customized-menu"
                  anchorEl={isMenu}
                  keepMounted
                  open={Boolean(isMenu)}
                  onClose={handleMenuClose}
                >
                  <StyledMenuItem>
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography type="body2" style={{ fontSize: "9pt" }}>
                          <i className={"mdi mdi-coins"} />
                          &nbsp;Exchange
                        </Typography>
                      }
                    />
                  </StyledMenuItem>
                  <StyledMenuItem>
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography
                          type="body2"
                          style={{ fontSize: "9pt" }}
                          onClick={handleClickProfileOpen}
                        >
                          <i className={"mdi mdi-pencil"} />
                          &nbsp;Profile
                        </Typography>
                      }
                    />
                  </StyledMenuItem>
                  <StyledMenuItem onClick={handleLogout}>
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography type="body2" style={{ fontSize: "9pt" }}>
                          <i className={"mdi mdi-logout"} />
                          &nbsp;Logout
                        </Typography>
                      }
                    />
                  </StyledMenuItem>
                </StyledMenu>
              </>
            ) : (
              <>
                <IconButton
                  className={classes.icons}
                  onClick={() => props.history.push("/login")}
                >
                  Login
                </IconButton>
                <IconButton
                  className={classes.icons}
                  onClick={() => props.history.push("/register")}
                >
                  Register
                </IconButton>
              </>
            )}
          </div>
        </div>
      )}
      <Toolbar />
      <ProvablyFair
        onClose={props.handleClickProvailyFairClose}
        open={props.openProvailyFair}
      />
      <TeamOfServices
        onClose={props.handleClickTeamOfServicesClose}
        open={props.openTeamOfServices}
      />
      <Faq onClose={props.handleClickFaqClose} open={props.openFaq} />
      <Leaderboards
        onClose={props.handleClickLeaderboardsClose}
        open={props.openLeaderboards}
      />
      <Stats onClose={props.handleClickStatsClose} open={props.openStats} />
      <Profile onClose={handleClickProfileClose} open={openProfile} />
      <Wallet onClose={props.handleClickWalletClose} open={props.openWallet} />
    </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(ToolbarComponent);
