import * as React from "react";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import loading from "../assets/img/loading.png";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  loging: {
    width: "50px",
    height: "50px",
    borderRadius: "50px",
    position: "relative",
  },
  loadingText: {
    opacity: ".65",
    marginBottom: "15px",
    fontSize: "16px",
    fontWeight: 500,
    color: "#ffff",
    width: "50vw",
    marginTop: "40px",
    fontFamily: "Poppins,sans-serif",
  },
  animatedItem: {
    animation: `$rotate 3000ms ${theme.transitions.easing.easeInOut}`,
  },
  "@keyframes rotate": {
    "100%": {
      transform: "rotate(2520deg)",
    },
  },
}));

const Loading = () => {
  const classes = useStyles();
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setShow(false);
    }, 3000);
    return () => {
      clearTimeout(timeId);
    };
  }, []);

  if (!show) {
    return null;
  }
  return (
    <div>
      <div
        id="loading-log"
        className={clsx(classes.animatedItem, {
          [classes.animatedItemExiting]: true,
        })}
      >
        <img alt="avatar" src={loading} className={classes.loging}></img>
      </div>
      <Typography className={classes.loadingText}>
        Loading Profile...
      </Typography>
    </div>
  );
};

export default Loading;
