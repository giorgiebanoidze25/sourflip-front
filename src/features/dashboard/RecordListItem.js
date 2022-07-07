import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ItemDialog } from "./dialog/itemDialog";

import Avatar from "../../components/Avatar";
import imgVs from "../../assets/img/vs.png";
import imgPrice2 from "../../assets/img/right.png";

const useStyles = makeStyles((theme) => ({
  itemcard: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#343654",
    borderRadius: "25px",
    alignItems: "center",
    padding: "20px",
    boxShadow: "0 3.5px 2px 0 rgb(0 0 0 / 25%)",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      gap: "20px",
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  itemcard_left: {
    display: "flex",
  },
  imgVs: {
    border: "none",
    width: "50px",
    height: "50px",
    alignSelf: "center",
    backgroundSize: "cover",
    verticalAlign: "super",
  },
  imgPrice: {
    width: "80px",
    height: "80px",
    [theme.breakpoints.down("md")]: {
      marginRight: "0",
    },
    [theme.breakpoints.up("md")]: {
      marginRight: "40%",
    },
  },
  itembuttons: {
    gap: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
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
  joinbutton: {
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
  const [openItemdialog, setItemDialog] = React.useState(false);

  const handleClickItemDialogClose = (value) => {
    setItemDialog(false);
  };

  const handleClickItemDialogOpen = () => {
    setItemDialog(true);
  };

  return (
    <div className={classes.itemcard}>
      <div className={classes.itemcard_left}>
        <Avatar click="coinflip" type="normal" />
        <img className={classes.imgVs} src={imgVs} alt="+++"></img>
        <Avatar click="coinflip" type="complex" />
      </div>
      <img
        className={classes.imgPrice}
        // style={{ marginLeft: "100px" }}
        src={imgPrice2}
        alt="+++"
      ></img>
      <div className={classes.itembuttons}>
        <Button
          color="primary"
          className={classes.viewbutton}
          variant="contained"
          onClick={handleClickItemDialogOpen}
        >
          View
        </Button>
        <Button
          color="primary"
          className={classes.joinbutton}
          variant="contained"
        >
          Join
        </Button>
      </div>
      <ItemDialog onClose={handleClickItemDialogClose} open={openItemdialog} />
    </div>
  );
};

RecordListItem.propTypes = {};

export default RecordListItem;
