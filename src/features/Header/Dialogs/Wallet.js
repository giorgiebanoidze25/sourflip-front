import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import styled from "styled-components";
import Menu from "@material-ui/core/Menu";
import TextField from '@material-ui/core/TextField';
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button, IconButton } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import { ethers } from "ethers";

import Ethereum from "../../../assets/img/tokens/ethereum.png";
import Binance from "../../../assets/img/tokens/binance.png";
import Usdt from "../../../assets/img/tokens/tether.png";
import ethABI from "../../../assets/abis/eth.json";

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

const useStyles = makeStyles((theme) => ({
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
    marginBottom: "10px",
    fontSize: "16px",
    fontWeight: 500,
    color: "#9c9ebb",
    fontFamily: "Poppins,sans-serif",
  },

  formControl: {
    width: "70%",
    color: "white",
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
    padding: "5px 15px",
    borderRadius: "5px",
    background: "rgba(0,0,0,.1568627450980392)",
    fontSize: "14px",
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
  selectedItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "20px"
  },
  general: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: "5px",
    color: "#ffffff",
    fontSize: "18px",
    fontWeight: "500",
    borderBottom: "2px solid rgba(156,158,187,.4392156862745098)",
    paddingBottom: "5px",
    marginBottom: "10px",
    marginTop: "16px",
    gap: "4px",
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
  textField: {
    width: "80%",
  },
  withdraw: {
    [theme.breakpoints.down("sm")]: {
      display: "inline",
    },
    [theme.breakpoints.up("sm")]: {
      display: "flex", 
    },
    alignItems: "center", 
    verticalAlign: "middle", 
    justifyContent: "space-between"
  },
  buttonGroup: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
    [theme.breakpoints.up("sm")]: {
      display: "inline", 
    },
    marginBottom: "10px"
  },
  textField: {
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "70%",
    },
    marginBottom: "10px",
    color: "#9c9ebb"
  },
  putButton: {
    alignItems: "center",
    width: "100px",
    padding: "5px 13px",
    borderRadius: "5px",
    background: "rgba(0,0,0,.1568627450980392)",
    fontSize: "16px",
    fontWeight: "500",
    marginRight: "10px",
    color: "hsla(0,0%,100%,.5)",
    fontFamily: "Poppins,sans-serif !important",
  },
  withdrawButton: {
    display: "flex",
    alignItems: "center",
    width: "80%",
    padding: "5px 13px",
    borderRadius: "8px",
    background: "rgba(16, 97, 227,.9)",
    fontSize: "18px",
    fontWeight: "600",
    color: "white",
    fontFamily: "Poppins,sans-serif !important",
    margin: "auto",
    marginBottom: "5px"
  },
}));

export const Wallet = (props) => {
  const [method, setMethod] = useState("deposit");
  const [token, setToken] = useState("");
  const [balance, setBalance] = useState(0);
  
  const userID = localStorage.getItem("userId");
  
  const getBackground = (current) => {
    return method === current ? 'rgba(16, 97, 227,.9)' : 'rgba(0,0,0,.1568627450980392)';
  };

  const handleClick = (event) => {
    setToken(event.target.value);
  }

  const classes = useStyles();
  const { onClose, open } = props;

  const handleClose = () => {
    onClose(true);
  };

  const saveAddress = (event) => {
    event.preventDefault();

    localStorage.setItem("myAddress", event.target.address.value)
  }

  const getUserBalance = async (address) => {
    if(!token.length || !address) return;
    const provider = new ethers.providers.JsonRpcProvider("https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161");
    const ethWallet = new ethers.Contract("0xEb05e4FcD2e359b9c96B19d9bF4414c1CC18Ea87", ethABI, provider);
    const balance = Number(await ethWallet.getUserInfo(address)) / 1e18;
    setBalance(balance)
  }

  const withdrawMoney = async (event) => {
    event.preventDefault();
    console.log("________")
    const address = localStorage.getItem("myAddress");
    if(!token.length || !address) return;
    const provider = new ethers.providers.JsonRpcProvider("https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161");
    const signer = provider.getSigner()
    const ethWallet = new ethers.Contract("0xEb05e4FcD2e359b9c96B19d9bF4414c1CC18Ea87", ethABI, signer);
    console.log("++_+_+", event.target.withdrawAmount.value)
    await ethWallet.userWithdraw(event.target.withdrawAmount.value)
  }

  useEffect(() => {
    getUserBalance(localStorage.getItem("myAddress"));
  }, [token])

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
            Wallet
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
          <Button
            id="fade-button"
            aria-haspopup="true"
            onClick={() => setMethod("deposit")}
            className={classes.Menubutton}
            style= {{ backgroundColor: getBackground("deposit"), color: "white" }}
          >
            <AddIcon />
            Deposit
          </Button>
          <Button
            id="fade-button"
            aria-haspopup="true"
            onClick={() => setMethod("withdraw")}
            className={classes.Menubutton}
            style= {{ backgroundColor: getBackground("withdraw"), color: "white" }}
          >
            <RemoveIcon />
            Withdraw
          </Button>
        </div>
        <div className={classes.general}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label" style={{ color: "#9c9ebb" }}>Select Crypto</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={token}
              onChange={handleClick}
              label="token"
              style={{ color: "white", fontSize: "20px" }}
              classes={{ select: classes.selectedItem }}
            >
              <MenuItem value={"ETH"}>
                <img src={Ethereum} style={{ height: "25px" }} />
                <span>ETH</span>
              </MenuItem>
              <MenuItem value={"BNB"}>
                <img src={Binance} style={{ height: "25px" }} />
                <span>BNB</span>
              </MenuItem>
              <MenuItem value={"USDT"}>
                <img src={Usdt} style={{ height: "25px" }} />
                <span>USDT</span>
              </MenuItem>
            </Select>
          </FormControl>
          <p style={{fontSize: "16px"}}>
            Balance : {balance}
          </p>
        </div>
        <div className={classes.firstinfoText}>
          { method === "deposit" ?
          <div style={{overflowWrap: "break-word"}}>
            Deposit Address: <span style={{ fontSize: "14px" }}>0xD3C07d3EDcE8707d777e3E5337c16c09a2d206F9</span>
            <div>
              My address:
              <form className={classes.root} noValidate autoComplete="off" onSubmit={saveAddress}>
                <TextField name="address" id="outlined-basic" label="Input address" variant="outlined" style={{ width: "100%", margin: "10px" }}  />
                <Button type="submit" className={classes.withdrawButton}>Save my address</Button>
              </form>
              Note: Please save your address before depositing money.
            </div>
          </div>
          : 
          <div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={withdrawMoney}>
              <TextField name="withdrawAddress" id="outlined-basic" label="Withdrawal Address" variant="outlined" style={{ color: "#9c9ebb", width: "100%", marginBottom: "10px" }}  />
              <div className={classes.withdraw}>
                <TextField name="withdrawAmount" id="outlined-basic" label="Withdrawal Amount" variant="outlined" className={classes.textField} />
                <div className={classes.buttonGroup}>
                  <Button className={classes.putButton}>All</Button>
                  <Button className={classes.putButton}>Min</Button>
                </div>
              </div>
              <Button type="submit" className={classes.withdrawButton}>Place withdrawal</Button>
            </form>
          </div>
          }
        </div>
      </DialogContent>
    </StyledDialog>
  );
};

Wallet.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
