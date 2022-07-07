import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { HistoryDialog } from "./dialog/HistoryDialog";

const useStyles = makeStyles((theme) => ({
  top: {
    display: "flex",
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
      gap: "2vh",
    },
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
    },
  },
  top_left: {
    display: "flex",
    width: "50%",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "50%",
    },
  },
  bluecard: {
    backgroundColor: "#3185ff",
    borderRadius: "17px",
    padding: "20px",
    width: "50%",
    boxShadow: "0 3.5px 2px 0 rgb(0 0 0 / 25%)",
  },
  yellowcard: {
    marginLeft: "3%",
    backgroundColor: "#f89e1b",
    borderRadius: "17px",
    padding: "20px",
    width: "50%",
    boxShadow: "0 3.5px 2px 0 rgb(0 0 0 / 25%)",
  },
  blackcard: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "3%",
    padding: "20px",
    borderRadius: "17px",
    backgroundColor: "#343654",
    alignItems: "center",
    boxShadow: "0 3.5px 2px 0 rgb(0 0 0 / 25%)",
    [theme.breakpoints.down("lg")]: {
      marginLeft: "0%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: "20px",
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },
  blackcard_left: {
    display: "flex",
    gap: "20px",
  },
  blackcard_right: {
    display: "flex",
    gap: "20px",
  },
  text1: {
    fontSize: "20px",
    fontWeight: "700",
    fontFamily: "Poppins,sans-serif !important",
    color: "#ffff",
  },
  text2: {
    opacity: ".65",
    fontSize: "20px",
    fontWeight: "700",
    fontFamily: "Poppins,sans-serif !important",
    color: "#ffff",
  },
  Rcircle: {
    textAlignLast: "center",
    fontSize: "16px",
    fontWeight: "700",
    width: "30px",
    height: "30px",
    lineHeight: "30px",
    fontFamily: "Poppins,sans-serif !important",
    color: "#317534",
    backgroundColor: "#74d878",
    borderRadius: "25px",
  },
  Tcircle: {
    textAlignLast: "center",
    fontSize: "16px",
    width: "30px",
    height: "30px",
    lineHeight: "30px",
    fontWeight: "700",
    fontFamily: "Poppins,sans-serif !important",
    color: "#97641b",
    backgroundColor: "#f89e1b",
    borderRadius: "25px",
  },
  viewbutton: {
    opacity: ".65",
    fontSize: "16px",
    fontWeight: "700",
    fontFamily: "Poppins,sans-serif !important",
    color: "#ffff",
    backgroundColor: "transparent",
    borderRadius: "25px",
  },
  createbutton: {
    fontSize: "16px",
    fontWeight: "700",
    fontFamily: "Poppins,sans-serif !important",
    color: "#ffff",
    backgroundColor: "#3185ff",
    borderRadius: "25px",
  },
}));

const RecordListItem = (props) => {
  const classes = useStyles();
  const [openHistoryDialog, setHistoryDialog] = React.useState(false);

  const handleClickHistoryDialogOpen = () => {
    setHistoryDialog(true);
  };

  const handleClickHistoryDialogClose = () => {
    setHistoryDialog(false);
  };

  return (
    <div className={classes.top}>
      <div className={classes.top_left}>
        <div className={classes.bluecard}>
          <Typography className={classes.text1}>1,143,345</Typography>
          <Typography className={classes.text2}>value</Typography>
        </div>
        <div className={classes.yellowcard}>
          <Typography className={classes.text1}>25</Typography>
          <Typography className={classes.text2}>Games</Typography>
        </div>
      </div>
      <div className={classes.blackcard}>
        <div className={classes.blackcard_left}>
          <Typography className={classes.text2}>PAST 100</Typography>
          <Typography className={classes.Rcircle}>R</Typography>
          <Typography className={classes.text1}>25</Typography>
          <Typography className={classes.Tcircle}>T</Typography>
          <Typography className={classes.text1}>24</Typography>
        </div>
        <div className={classes.blackcard_right}>
          <Button
            color="primary"
            className={classes.viewbutton}
            variant="contained"
            onClick={handleClickHistoryDialogOpen}
          >
            History
          </Button>
          <Button
            color="primary"
            className={classes.createbutton}
            variant="contained"
          >
            Create
          </Button>
        </div>
      </div>
      <HistoryDialog
        onClose={handleClickHistoryDialogClose}
        open={openHistoryDialog}
      />
    </div>
  );
};

RecordListItem.propTypes = {};

export default RecordListItem;
