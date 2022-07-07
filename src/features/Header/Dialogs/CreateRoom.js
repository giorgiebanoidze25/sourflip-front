import * as React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Button } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StyledDialog = styled(Dialog)`
  .MuiPaper-root {
    background-color: transparent;
    max-width: 100%;
  }
`;

const useStyles = makeStyles({
  box: {
    textAlignLast: "center",
    position: "relative",
    borderRadius: "15px",
    background: "#282a40",
    maxWidth: "900px",
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

  subtitle: {
    color: "rgb(255, 255, 255)",
    fontWeight: 700,
  },
  priceText: {
    marginBottom: "15px",
    fontSize: "20px",
    fontWeight: 500,
    color: "#ffff",
    fontFamily: "Poppins,sans-serif",
  },
  inputText: {
    borderBottomColor: "#ffff",
    borderColor: "#ffff",
    marginBottom: "15px",
    fontSize: "16px",
    fontWeight: 100,
    color: "#ffff",
    fontFamily: "Poppins,sans-serif",
  },
  viewbutton: {
    marginTop: "20px",
    fontSize: "15px",
    fontWeight: "500",
    fontFamily: "Poppins,sans-serif !important",
    color: "#ffff",
    backgroundColor: "#1d1f32",
    borderRadius: "10px",
  },
});

const ValidationTextField = styled(TextField)({
  "& input:valid + fieldset": {
    borderColor: "#ffff",
    borderWidth: 2,
  },
  "& input:invalid + fieldset": {
    borderColor: "#ffff",
    borderWidth: 2,
  },
  "& input:valid:focus + fieldset": {
    borderLeftWidth: 6,
    padding: "4px !important", // override inline-style
  },
});

export const CreateRoom = (props) => {
  const classes = useStyles();
  const { onClose, open } = props;

  const handleClose = () => {
    onClose(true);
  };

  return (
    <StyledDialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      TransitionComponent={Transition}
      className={classes.headerBox}
    >
      <DialogContent className={classes.box}>
        {/* <Grid container> */}
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
        <div style={{ display: "flex", paddingTop: "50px", gap: "10px" }}>
          <Typography className={classes.priceText}>Title</Typography>
          <ValidationTextField
            variant="standard"
            InputProps={{ className: classes.inputText }}
          />
        </div>
        <div style={{ display: "flex", paddingTop: "50px", gap: "10px" }}>
          <Typography className={classes.priceText}>Price</Typography>
          <ValidationTextField
            variant="standard"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            InputProps={{ className: classes.inputText, type: "number" }}
          />
        </div>
        <Button
          color="primary"
          className={classes.viewbutton}
          variant="contained"
        >
          Create
        </Button>
      </DialogContent>
    </StyledDialog>
  );
};

CreateRoom.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
