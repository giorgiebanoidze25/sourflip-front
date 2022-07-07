import React from "react";
import ToolbarComponent from "../features/Header/Toolbar";
import DrawerComponent from "../features/Header/NavBar";

class Header extends React.Component {
  state = {
    left: false,
    user: null,
    isMenu: null,
    openProvailyFair: false,
    openTeamOfServices: false,
    openFaq: false,
    openLeaderboards: false,
    openStats: false,
    openProfile: false,
    MobileMoreAnchorEl: false,
    openWallet: false,
  };

  toggleDrawer = () => {
    this.setState({ left: false });
  };

  openDrawer = () => {
    this.setState({
      left: true,
    });
  };
  handleClickProvailyFairClose = (event) => {
    this.setState({ openProvailyFair: false });
  };
  handleClickProvailyFairOpen = () => {
    this.setState({ openProvailyFair: true });
  };

  handleClickTeamOfServicesClose = (value) => {
    this.setState({ openTeamOfServices: false });
  };

  handleClickTeamOfServicesOpen = () => {
    this.setState({ openTeamOfServices: true });
  };

  handleClickFaqClose = (value) => {
    this.setState({ openFaq: false });
  };

  handleClickFaqOpen = () => {
    this.setState({ openFaq: true });
  };

  handleClickLeaderboardsClose = (value) => {
    this.setState({ openLeaderboards: false });
  };

  handleClickLeaderboardsOpen = () => {
    this.setState({ openLeaderboards: true });
  };

  handleClickStatsClose = (value) => {
    this.setState({ openStats: false });
  };

  handleClickStatsOpen = () => {
    this.setState({ openStats: true });
  };

  handleClickWalletClose = (value) => {
    this.setState({ openWallet: false });
  };

  handleClickWalletOpen = () => {
    this.setState({ openWallet: true });
  };

  render() {
    return (
      <div className="App">
        <ToolbarComponent
          openDrawerHandler={this.openDrawer}
          handleClickProvailyFairOpen={this.handleClickProvailyFairOpen}
          handleClickProvailyFairClose={this.handleClickProvailyFairClose}
          openProvailyFair={this.state.openProvailyFair}
          handleClickTeamOfServicesOpen={this.handleClickTeamOfServicesOpen}
          handleClickTeamOfServicesClose={this.handleClickTeamOfServicesClose}
          openTeamOfServices={this.state.openTeamOfServices}
          handleClickFaqOpen={this.handleClickFaqOpen}
          handleClickFaqClose={this.handleClickFaqClose}
          openFaq={this.state.openFaq}
          handleClickLeaderboardsOpen={this.handleClickLeaderboardsOpen}
          handleClickLeaderboardsClose={this.handleClickLeaderboardsClose}
          openLeaderboards={this.state.openLeaderboards}
          handleClickStatsOpen={this.handleClickStatsOpen}
          handleClickStatsClose={this.handleClickStatsClose}
          openStats={this.state.openStats}
          handleClickWalletOpen={this.handleClickWalletOpen}
          handleClickWalletClose={this.handleClickWalletClose}
          openWallet={this.state.openWallet}
        />
        <DrawerComponent
          left={this.state.left}
          toggleDrawerHandler={this.toggleDrawer}
          handleClickProvailyFairOpen={this.handleClickProvailyFairOpen}
          handleClickProvailyFairClose={this.handleClickProvailyFairClose}
          openProvailyFair={this.state.openProvailyFair}
          handleClickTeamOfServicesOpen={this.handleClickTeamOfServicesOpen}
          handleClickTeamOfServicesClose={this.handleClickTeamOfServicesClose}
          openTeamOfServices={this.state.openTeamOfServices}
          handleClickFaqOpen={this.handleClickFaqOpen}
          handleClickFaqClose={this.handleClickFaqClose}
          openFaq={this.state.openFaq}
          handleClickLeaderboardsOpen={this.handleClickLeaderboardsOpen}
          handleClickLeaderboardsClose={this.handleClickLeaderboardsClose}
          openLeaderboards={this.state.openLeaderboards}
          handleClickStatsOpen={this.handleClickStatsOpen}
          handleClickStatsClose={this.handleClickStatsClose}
          openStats={this.state.openStats}
          handleClickWalletOpen={this.handleClickWalletOpen}
          handleClickWalletClose={this.handleClickWalletClose}
          openWallet={this.state.openWallet}
        />
      </div>
    );
  }
}
export default Header;
