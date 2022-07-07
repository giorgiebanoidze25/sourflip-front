import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

import { blue } from "@material-ui/core/colors";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { Avatar, Box, Button } from "@material-ui/core";
import imgRight from "../../assets/img/right.png";

const useStyles = makeStyles({
  avatarLeft: {
    backgroundColor: blue[100],
    color: blue[600],
    margin: "auto",
    width: 80,
    height: 80,
    border: "5px solid white",
  },
  avatarRight: {
    backgroundColor: blue[100],
    color: blue[600],
    margin: "auto",
    width: 80,
    height: 80,
    border: "5px solid gold",
  },
  user: {
    textAlign: "center",
    display: "flex",
    position: "relative",
  },
  chip: {
    position: "absolute",
    width: 30,
    height: 30,
    right: 10,
    borderRadius: "50%",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    marginTop: 20,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  right: {
    float: "right",
  },
  success: {
    width: 50,
    height: 50,
  },
  mt20: {
    marginTop: 20,
  },
  avatarWho: {
    fontSize: 30,
    fontWeight: "bold",
    margin: "auto",
    width: 80,
    height: 80,
    border: "5px solid white",
  },
});

export const DialogView = (props) => {
  const classes = useStyles();
  const { onClose, open, onConfirm } = props;

  const handleClose = () => {
    onClose(true);
  };

  console.log("ddddd");

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogContent>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <Box className={classes.user}>
              <Avatar
                className={classes.avatarLeft}
                src="https://res.cloudinary.com/dmlvthmqr/image/upload/v1607914468/messenger/8bc2e13b8ab74765fd57f0880f318eed1c3fb001_fownwt.png"
              >
                Thoms
              </Avatar>
              <img className={classes.chip} src={imgRight} alt="+++"></img>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}></Grid>
          <Grid item xs={12} sm={4}>
            <Box className={classes.user}>
              <Avatar className={classes.avatarWho}>?</Avatar>
            </Box>
          </Grid>
          <Grid item xs={12} className={classes.mt20}>
            <Typography variant="h5" component="h2">
              6000k
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}></Grid>
          <Grid item xs={12} sm={6}>
            <Box className={classes.right}>
              <Button color="primary" onClick={onConfirm}>
                Join
              </Button>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

DialogView.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
