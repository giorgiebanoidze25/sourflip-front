import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import styled from "styled-components";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import { Button, IconButton } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const StyledDialog = styled(Dialog)`
  .MuiPaper-root {
    background-color: transparent;
    max-width: 900px;
    width: 80%;
  }
`;

const useStyles = makeStyles({
  box: {
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
    backdropFilter: "blur(10px)",
  },

  firstinfoText: {
    marginBottom: "15px",
    fontSize: "16px",
    fontWeight: 500,
    color: "#9c9ebb",
    fontFamily: "Poppins,sans-serif",
  },

  secondinfoText: {
    fontSize: "16px",
    fontWeight: 500,
    color: "#9c9ebb",
    fontFamily: "Poppins,sans-serif",
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
  Menutitle: {
    display: "flex",
    justifyContent: "space-between",
    textAlignLast: "justify",
  },
  Menubutton: {
    display: "flex",
    alignItems: "center",
    width: "110px",
    padding: "5px 13px",
    borderRadius: "5px",
    background: "rgba(0,0,0,.1568627450980392)",
    fontSize: "16px",
    fontWeight: "500",
    marginRight: "10px",
    color: "hsla(0,0%,100%,.5)",
    fontFamily: "Poppins,sans-serif !important",
  },
  Menu: {
    borderRadius: "0 0 5px 5px",
    overflow: "hidden",
    bottom: "0",
    zIndex: "2",
  },
  Menuitem: {
    background: "#2222",
  },
  general: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#fff",
    fontSize: "18px",
    fontWeight: "500",
    borderBottom: "2px solid rgba(156,158,187,.4392156862745098)",
    paddingBottom: "5px",
    marginBottom: "5px",
  },
  listtextavatar3: {
    color: "rgb(49, 133, 255)",
    fontSize: "18px",
    fontWeight: "700",
    fontFamily: "Poppins,sans-serif !important",
  },
  listtextavatar1: {
    color: "#9c9ebb",
    fontSize: "16px",
    fontWeight: "300",
    fontFamily: "Poppins,sans-serif !important",
  },
  Lists: {
    display: "flex",
    flexDirection: "column",
  },
  Listsitem: {
    display: "flex",
    justifyContent: "space-between",
  },
});

export const Stats = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const ope = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosedown = () => {
    setAnchorEl(null);
  };
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
        <div className={classes.titleheader}>
          <DialogContentText id="alert-dialog-title" className={classes.title}>
            Stats
          </DialogContentText>
          <IconButton
            color="primary"
            className={classes.close}
            onClick={handleClose}
            variant="contained"
          >
            <CloseIcon />
          </IconButton>
        </div>
        <div className={classes.Menutitle}>
          <DialogContentText id="alert-dialog-title" className={classes.title}>
            Overview
          </DialogContentText>
          <div>
            <Button
              id="fade-button"
              aria-controls={ope ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={ope ? "true" : undefined}
              onClick={handleClick}
              className={classes.Menubutton}
            >
              AllTime
            </Button>
            <Menu
              className={classes.Menu}
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={ope}
              onClose={handleClosedown}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClosedown}>All Time</MenuItem>
              <MenuItem onClick={handleClosedown}>Day</MenuItem>
              <MenuItem onClick={handleClosedown}>Week</MenuItem>
              <MenuItem onClick={handleClosedown}>Month</MenuItem>
            </Menu>
          </div>
        </div>
        <div className={classes.general}>
          <Typography>General</Typography>
        </div>

        <div className={classes.Lists}>
          <div className={classes.Listsitem}>
            <Typography className={classes.listtextavatar1}>
              Biggest jackpot
            </Typography>
            <Typography className={classes.listtextavatar3}>
              R$30,046,716
            </Typography>
          </div>
        </div>
      </DialogContent>
    </StyledDialog>
  );
};

Stats.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
