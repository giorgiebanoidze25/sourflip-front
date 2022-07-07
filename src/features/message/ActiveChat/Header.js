import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Avatar } from "@material-ui/core";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 40,
    marginBottom: 50,
  },
  avatar: {
    width: 60,
    height: 60
  },
  content: {
    display: "flex",
    alignItems: "center",
    marginLeft: 24,
    width: '100%'
  },
  username: {
    fontSize: 20,
    letterSpacing: -0.29,
    fontWeight: "bold",
    marginRight: 10,
    marginLeft: 10,
    color: 'white'
  },
  statusText: {
    fontSize: 12,
    color: "#BFC9DB",
    letterSpacing: -0.17
  },
  statusDot: {
    height: 8,
    width: 8,
    borderRadius: "50%",
    marginRight: 5,
    backgroundColor: "#D0DAE9"
  },
  online: {
    background: "#1CED84"
  },
  ellipsis: {
    color: "#95A7C4",
    marginRight: 24,
    opacity: 0.5
  }
}));

const Header = (props) => {
  const classes = useStyles();
  const { username, online, photoUrl } = props;

  return (
    <Box className={classes.root}>
      <Box className={classes.content}>
        <Avatar className={classes.avatar} alt="avatar" src={photoUrl}></Avatar>
        <Typography className={classes.username}>{username}</Typography>
        <Box className={`${classes.statusDot} ${classes[online && "online"]}`}></Box>
        <Typography className={classes.statusText}>{online ? "Online" : "Offline"}</Typography>
      </Box>
      {/* <MoreHorizIcon classes={{ root: classes.ellipsis }} /> */}
    </Box>
  );
};

export default Header;
