import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import RecordListItem from "../../features/dashboard/RecordListItem";
import RecordListHeader from "../../features/dashboard/RecordListHeader";
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
      border: "6px solid rgba(0,0,0,0.2)",
    },
  },
  body: {
    overflowY: "scroll",
    height: "auto",
    maxHeight: "70vh",
    float: "down",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    borderRadius: "30px",
    marginLeft: "5%",
    marginRight: "5%",
    backgroundColor: "rgb(44, 45, 70)",
    [theme.breakpoints.down("lg")]: {
      padding: "20px",
      maxHeight: "85vh",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "60px",
      maxHeight: "70vh",
    },
    // [theme.breakpoints.down("sm")]: {
    //   padding: "20px",
    //   height: "80vh",
    // },
    // [theme.breakpoints.up("sm")]: {
    //   padding: "60px",
    //   height: "50vh",
    // },
  },
}));

function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <RecordListHeader />

      <RecordListItem />
      <RecordListItem />
      <RecordListItem />
      <RecordListItem />
      <RecordListItem />
      <RecordListItem />
      <RecordListItem />
      <RecordListItem />
      <RecordListItem />
      <RecordListItem />
      <RecordListItem />
      <RecordListItem />
      <RecordListItem />
      <RecordListItem />
      <RecordListItem />
    </div>
  );
}

export default Dashboard;
