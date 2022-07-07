import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { SidebarContainer } from "../features/message/Sidebar";
import { ActiveChat } from "../features/message/ActiveChat";
import { logout, fetchConversations } from "../utils/thunkCreators";
import { clearOnLogout } from "../store/index";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Msg = withRouter((props) => {
  const classes = useStyles();
  const { fetchConversations } = props;
  const { id } = props.user;

  useEffect(() => {
    fetchConversations();
  }, [fetchConversations]);

  if (!id) {
    props.history.push("/login");
  }

  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        className={classes.root}
      >
        <Grid container xl={8}>
          <Grid xs={12} sm={4}>
            <SidebarContainer />
          </Grid>
          <Grid xs={12} sm={8}>
            <ActiveChat />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
});

const mapStateToProps = (state) => {
  return {
    user: state.user,
    conversations: state.conversations,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (id) => {
      dispatch(logout(id));
      dispatch(clearOnLogout());
    },
    fetchConversations: () => {
      dispatch(fetchConversations());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Msg);
