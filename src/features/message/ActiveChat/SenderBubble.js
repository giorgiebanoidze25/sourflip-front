import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end"
  },
  date: {
    fontSize: 11,
    color: "#999999",
    fontWeight: "bold",
    marginTop: 2
  },
  text: {
    fontSize: 14,
    color: "#1d1f32",
    // color: 'black',
    letterSpacing: -0.2,
    padding: "10px 15px",
    fontWeight: "bold",
    border: "1px solid #1d1f32",
    borderRadius: 20
  },
  bubble: {
    marginTop: '10px',
    // background: "transparent",
    background: "transparent",
    // borderRadius: "180px 180px 0 180px",
    // border: '1px solid #1d1f32'
    // border: "double 1px transparent",
    // borderRadius: "180px",
    // backgroundImage: "linear-gradient(white, white), radial-gradient(circle at top left, #e65100, #e65100)",
    // backgroundOrigin: "border-box",
    // backgroundClip: "content-box, border-box"
  }
}));

const SenderBubble = (props) => {
  const classes = useStyles();
  const { time, text } = props;

  return (
    <Box className={classes.root}>
      <Box className={classes.bubble}>
        <Typography className={classes.text}>{text}</Typography>
      </Box>
      <Typography className={classes.date}>{time}</Typography>
    </Box>
  );
};

export default SenderBubble;
