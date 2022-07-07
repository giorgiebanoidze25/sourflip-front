import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import imgAvatar1 from "../assets/img/avatar1.png";
import imgPrice1 from "../assets/img/left.png";
import { AvatarProfile } from "./Dialogs/AvatarProfile";

const useStyles = makeStyles({
  main: {
    display: "flex",
    marginRight: "10px",
    marginLeft: "10px",
  },
  imgAvatar: {
    border: "none",
    width: "80px",
    height: "80px",
    borderRadius: "50px",
    background: "#2c2d46",
    alignSelf: "center",
    backgroundSize: "cover",
    textAlignLast: "center",
    fontSize: "50px",
    fontWeight: "700",
    fontFamily: "Poppins,sans-serif !important",
    color: "#9c9ebb",
    "&:hover": {
      cursor: "pointer",
    },
  },
  imgmarkshow: {
    position: "relative",
    border: "none",
    left: "-80px",
    top: "-30px",
    width: "30px",
    height: "30px",
    borderRadius: "50px",
    background: "#2c2d46",
    alignSelf: "center",
    backgroundSize: "cover",
    marginRight: "-30px",
  },
  imgmarkhidden: {
    position: "relative",
    left: "-80px",
    top: "-30px",
    width: "30px",
    height: "30px",
    borderRadius: "50px",
    alignSelf: "center",
    backgroundSize: "cover",
    visibility: "hidden",
    marginRight: "-30px",
  },
});

const Avatar = (props) => {
  const { click, type } = props;
  const classes = useStyles();
  const [openAvatarDialog, setAvatarDialog] = React.useState(false);

  const handleClickAvatarDialogClose = (value) => {
    setAvatarDialog(false);
  };

  const handleClickAvatarDialogOpen = () => {
    setAvatarDialog(true);
  };

  return (
    <div>
      <div
        onClick={
          click === "coinflip" ? handleClickAvatarDialogOpen : () => alert()
        }
        className={classes.main}
        id="main"
      >
        {type !== "unkown" ? (
          <img
            className={classes.imgAvatar}
            src={imgAvatar1}
            id="avatar"
            alt="+++"
          ></img>
        ) : (
          <Typography className={classes.imgAvatar}>?</Typography>
        )}
        <img
          className={
            type === "complex" ? classes.imgmarkshow : classes.imgmarkhidden
          }
          src={imgPrice1}
          id="mark"
          alt="+++"
        ></img>
      </div>
      <AvatarProfile
        onClose={handleClickAvatarDialogClose}
        open={openAvatarDialog}
      />
    </div>
  );
};

Avatar.propTypes = {};

export default Avatar;
