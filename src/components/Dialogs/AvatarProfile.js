import * as React from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";
import CircularProgress from "@material-ui/core/CircularProgress";
import CanvasJSReact from "../canvasjs.react";
import GameRecord from "../../features/dashboard/dialog/GameRecord";
import Profile from "../../features/dashboard/dialog/Profile";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StyledDialog = styled(Dialog)`
  .MuiPaper-root {
    background-color: transparent;
    max-width: 100%;
  }
`;

const useStyles = makeStyles((theme) => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.4em",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "*::-webkit-scrollbar-thumb": {
      borderRadius: "100px",
      background: "#3185ff",
      border: "1px solid rgba(0,0,0,0.2)",
    },
  },
  box: {
    overflowY: "scroll",
    textAlignLast: "center",
    position: "relative",
    borderRadius: "15px",
    background: "#282a40",
    // width: '85%;',
    maxHeight: "85vh",
    minHeight: "200px",
    padding: "43px",
    overflow: "hidden",
    zIndex: 200,
    transition: "opacity 175ms ease 0s, transform 350ms ease 0s",
    opacity: 1,
    transform: "translateY(0vh)",
    backdropFilter: "blur(10px)",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "30px",
  },
  none: {
    display: "none",
  },
  title: {
    textAlign: "center",
    top: "-30px",
    width: "100%",
    fontSize: "24px !important",
    fontWeight: 700,
    color: "#fff",
    fontFamily: "Poppins,sans-serif !important",
  },

  headerBox: {
    backgroundColor: "transparent !important",
    maxWidth: "100%",
    backdropFilter: "blur(10px)",
  },

  titleheader: {
    display: "flex",
    justifyContent: "center",
  },

  close: {
    position: "relative",
    left: "40px",
    top: "-15px",
    color: "#9c9ebb",
  },
  gamechartsection: {
    width: "100%",
  },
  chartindex: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    alignItems: "center",
  },
  chartindexleftbtn: {
    width: "30px",
    height: "30px",
    borderRadius: "7px",
    backgroundColor: "#1d1f32",
    fontSize: "16px",
    fontWeight: 500,
    color: "#ffff",
    fontFamily: "Poppins,sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#3185ff",
    },
  },
  chartindexrightbtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "30px",
    height: "30px",
    borderRadius: "7px",
    backgroundColor: "#1d1f32",
    fontSize: "16px",
    fontWeight: 500,
    color: "#ffff",
    fontFamily: "Poppins,sans-serif",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#3185ff",
    },
  },
  text2: {
    fontSize: "16px",
    fontWeight: "700",
    fontFamily: "Poppins,sans-serif !important",
    color: "#ffff",
  },
  loadingtext: {
    fontSize: "16px",
    fontWeight: "700",
    fontFamily: "Poppins,sans-serif !important",
    color: "#ffff",
    width: "50vw",
  },
}));

export const AvatarProfile = (props) => {
  //* get CSS
  const classes = useStyles();

  //*declare state variables
  const { onClose, open } = props;
  const [chartIndexNum, setChartIndexNum] = React.useState(1);
  const [isloading, setIsloading] = React.useState(true);

  const chartdata = [
    {
      type: "line",
      toolTipContent: "Game {y}",
      dataPoints: [
        { x: 0, y: 10, markerBorderColor: "blue", lineColor: "blue" },
        { x: 1, y: 10, markerBorderColor: "blue", lineColor: "blue" },
        { x: 2, y: 20, markerBorderColor: "blue", lineColor: "blue" },
        { x: 3, y: 40, markerBorderColor: "blue", lineColor: "blue" },
        { x: 4, y: 40, markerBorderColor: "red", lineColor: "blue" },
        { x: 5, y: 45, markerBorderColor: "red", lineColor: "red" },
        { x: 6, y: 40, markerBorderColor: "blue", lineColor: "blue" },
        { x: 7, y: 55, markerBorderColor: "blue", lineColor: "blue" },
        { x: 8, y: 75, markerBorderColor: "blue", lineColor: "red" },
        { x: 9, y: 70, markerBorderColor: "blue", lineColor: "red" },
        { x: 10, y: 60, markerBorderColor: "red", lineColor: "red" },
        { x: 11, y: 52, markerBorderColor: "red", lineColor: "red" },
        { x: 12, y: 30, markerBorderColor: "blue", lineColor: "red" },
        { x: 13, y: 15, markerBorderColor: "blue", lineColor: "blue" },
        { x: 14, y: 40, markerBorderColor: "blue", lineColor: "blue" },
        { x: 15, y: 60, markerBorderColor: "blue", lineColor: "red" },
        { x: 16, y: 50, markerBorderColor: "red", lineColor: "blue" },
        { x: 17, y: 60, markerBorderColor: "red", lineColor: "blue" },
        { x: 18, y: 70, markerBorderColor: "blue", lineColor: "blue" },
        { x: 19, y: 75, markerBorderColor: "blue", lineColor: "blue" },
      ],
    },
    {
      type: "line",
      toolTipContent: "Game {y}",
      dataPoints: [
        { x: 0, y: 10, markerBorderColor: "blue", lineColor: "blue" },
        { x: 1, y: 10, markerBorderColor: "blue", lineColor: "blue" },
        { x: 2, y: 20, markerBorderColor: "blue", lineColor: "blue" },
        { x: 3, y: 40, markerBorderColor: "blue", lineColor: "blue" },
        { x: 4, y: 40, markerBorderColor: "red", lineColor: "blue" },
        { x: 5, y: 45, markerBorderColor: "red", lineColor: "red" },
        { x: 6, y: 40, markerBorderColor: "blue", lineColor: "blue" },
        { x: 7, y: 70, markerBorderColor: "blue", lineColor: "blue" },
        { x: 8, y: 75, markerBorderColor: "blue", lineColor: "red" },
        { x: 9, y: 70, markerBorderColor: "blue", lineColor: "red" },
        { x: 10, y: 60, markerBorderColor: "red", lineColor: "red" },
        { x: 11, y: 40, markerBorderColor: "red", lineColor: "red" },
        { x: 12, y: 30, markerBorderColor: "blue", lineColor: "red" },
        { x: 13, y: 15, markerBorderColor: "blue", lineColor: "blue" },
        { x: 14, y: 40, markerBorderColor: "blue", lineColor: "blue" },
        { x: 15, y: 60, markerBorderColor: "blue", lineColor: "red" },
        { x: 16, y: 50, markerBorderColor: "red", lineColor: "blue" },
        { x: 17, y: 60, markerBorderColor: "red", lineColor: "blue" },
        { x: 18, y: 70, markerBorderColor: "blue", lineColor: "blue" },
        { x: 19, y: 75, markerBorderColor: "blue", lineColor: "blue" },
      ],
    },
  ];

  let xxx = chartdata.length;
  const incChartIndexNum = () => {
    setChartIndexNum(chartIndexNum + 1);
    document.getElementById("decchartbtn").style.pointerEvents = "fill";

    if (chartIndexNum <= chartdata.length) {
      setChartIndexNum(2);
      document.getElementById("incchartbtn").style.pointerEvents = "none";
    }
  };

  const decChartIndexNum = () => {
    if (chartIndexNum === 2) {
      setChartIndexNum(chartIndexNum - 1);
      setChartIndexNum(1);
      document.getElementById("decchartbtn").style.pointerEvents = "none";
    }
    if (chartIndexNum <= chartdata.length) {
      document.getElementById("incchartbtn").style.pointerEvents = "fill";
    }
  };
  const options = {
    animationEnabled: true,
    backgroundColor: "#282a40",
    theme: "light2", // "light1", "dark1", "dark2"
    title: {},
    axisX: {
      interval: 2,
      gridThickness: 1,
      lineColor: "#343654",
      gridColor: "#343654",
      tickColor: "#343654",
      labelFontColor: "white",
    },
    axisY: {
      suffix: ".0k",
      gridThickness: 0,
      lineThickness: 2,
      lineColor: "#343654",
      tickColor: "#343654",
      labelFontColor: "white",
    },
    data: [chartdata[chartIndexNum - 1]],
  };

  var node = document.querySelector('[title="JavaScript Charts"]');
  if (node) {
    console.log(node);
    node.remove();
  }

  //todo: update
  const handleClose = () => {
    onClose(true);
    setIsloading(true);
    console.log(isloading);
  };

  // todo: show dialog for 3seconds
  if (isloading === true) {
    setTimeout(() => {
      setIsloading(false);
    }, 3000);
  }

  console.log(isloading);
  return (
    <StyledDialog
      onClose={handleClose}
      f
      aria-labelledby="simple-dialog-title"
      open={open}
      TransitionComponent={Transition}
      className={classes.headerBox}
    >
      <DialogContent className={classes.box}>
        <div className={classes.titleheader}>
          <DialogContentText
            id="alert-dialog-title"
            className={classes.title}
          ></DialogContentText>
          <IconButton
            color="primary"
            className={classes.close}
            onClick={handleClose}
            variant="contained"
          >
            <CloseIcon />
          </IconButton>
        </div>
        {/* <Loading /> */}
        {isloading === true ? (
          <div>
            <CircularProgress
              size={68}
              // sx={{
              //   top: -6,
              //   left: -6,
              //   zIndex: 1,
              // }}
            />
            <Typography className={classes.loadingtext}>
              Loading Profile...
            </Typography>
          </div>
        ) : (
          <div className={classes.body}>
            <Profile name="incredible" />
            <div className={classes.gamechartsection}>
              <div className={classes.chartindex}>
                <div
                  className={classes.chartindexleftbtn}
                  onClick={decChartIndexNum.bind(this)}
                  id="decchartbtn"
                >
                  <ChevronLeftIcon />
                </div>
                <Typography className={classes.text2}>
                  Page {chartIndexNum}/{xxx}
                </Typography>
                <div
                  className={classes.chartindexrightbtn}
                  onClick={incChartIndexNum.bind(this)}
                  id="incchartbtn"
                >
                  <ChevronRightIcon />
                </div>
              </div>
              <CanvasJSChart options={options} />
            </div>
            <GameRecord />
          </div>
        )}
      </DialogContent>
    </StyledDialog>
  );
};

AvatarProfile.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
