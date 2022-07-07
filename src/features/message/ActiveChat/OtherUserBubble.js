import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Avatar } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex"
  },
  avatar: {
    height: 30,
    width: 30,
    marginRight: 11,
    marginTop: 6
  },
  userDate: {
    fontSize: 11,
    color: "#999999",
    fontWeight: "bold",
    marginTop: 2
  },
  bubble: {
    marginTop: "10px",
    // borderRadius: "0 180px 180px 180px",
    // border: '1px solid #1d1f32',
    // boxShadow: "0 1px 5px 0 #e6510090"
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
    letterSpacing: -0.2,
    padding: "10px 15px",
    backgroundColor: "#1d1f32",
    borderRadius: 20
  }
}));

const OtherUserBubble = (props) => {
  const classes = useStyles();
  const { text, time, otherUser } = props;
  return (
    <Box className={classes.root}>
      <Avatar alt={otherUser.username} src={otherUser.photoUrl} className={classes.avatar}></Avatar>
      <Box>
        <Box className={classes.bubble}>
          <Typography className={classes.text}>{text}</Typography>
        </Box>
        <Typography className={classes.userDate}>
          {time}
        </Typography>
      </Box>
    </Box>
  );
};

export default OtherUserBubble;
