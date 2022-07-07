import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "../../../components/Avatar";
import { ItemDialog } from "./itemDialog";
import Hair from "../../../assets/img/hair.png";
import imgVs from "../../../assets/img/vs.png";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  itemcard: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#343654",
    borderRadius: "25px",
    alignItems: "center",
    padding: "20px",
    width: "50vw",
    boxShadow: "0 3.5px 2px 0 rgb(0 0 0 / 25%)",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  itemcard1: {
    display: "flex",
    backgroundColor: "#343654",
    borderRadius: "25px",
    alignItems: "center",
  },
  imgVs: {
    border: "none",
    width: "50px",
    height: "50px",
    alignSelf: "center",
    backgroundSize: "cover",
    verticalAlign: "super",
  },
  imgItemGameRecord1: {
    position: "relative",
    width: "60px",
    height: "60px",
    borderRadius: "25px",
  },
  imgItemGameRecord2: {
    position: "relative",
    width: "60px",
    height: "60px",
    borderRadius: "25px",
    right: "30px",
  },
  imgItemGameRecord3: {
    position: "relative",
    width: "60px",
    height: "60px",
    borderRadius: "25px",
    right: "60px",
  },
  itemrecord: {
    display: "flex",
    flexDirection: "column",
  },
  itemcardrecord: {
    display: "flex",
    marginLeft: "10%",
  },
  viewbutton: {
    fontSize: "16px",
    fontWeight: "700",
    fontFamily: "Poppins,sans-serif !important",
    color: "#ffff",
    backgroundColor: "#3185ff",
    borderRadius: "25px",
  },
  itembuttons: {
    gap: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  text1: {
    marginLeft: "25%",
    fontSize: "16px !important",
    fontWeight: 700,
    color: "#fff",
    fontFamily: "Poppins,sans-serif !important",
  },
}));
function HistoryVsItem(props) {
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
      <div className={classes.itemcard1}>
        <Avatar click="coinflip" type="complex" />
        <img className={classes.imgVs} src={imgVs} alt="+++"></img>
        <Avatar click="coinflip" type="complex" />
      </div>
      <div className={classes.itemrecord}>
        <div className={classes.itemcardrecord}>
          <img
            className={classes.imgItemGameRecord1}
            src={Hair}
            alt="+++"
          ></img>
          <img
            className={classes.imgItemGameRecord2}
            src={Hair}
            alt="+++"
          ></img>
          <img
            className={classes.imgItemGameRecord3}
            src={Hair}
            alt="+++"
          ></img>
        </div>
        <Typography className={classes.text1}>24.63K</Typography>
      </div>
      <div className={classes.itembuttons}>
        <Button
          color="primary"
          className={classes.viewbutton}
          variant="contained"
          onClick={handleClickItemDialogOpen}
        >
          View
        </Button>
      </div>
      <ItemDialog onClose={handleClickItemDialogClose} open={openItemdialog} />
    </div>
  );
}

HistoryVsItem.propTypes = {};

export default HistoryVsItem;
