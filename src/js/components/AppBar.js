import React from 'react';
import { connect } from "react-redux"

import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import GoogleLogin from 'react-google-login';

import { authUser, loadGoogleDrive } from "../actions/googleActions";

@connect((store) => {
  return {
    user: store.user
  };
})
class SurroundAppBar extends React.Component {

  authCallback (data) {
    this.props.dispatch(authUser(data))
    this.props.dispatch(loadGoogleDrive());
  }

  render() {
    let user;

    if(this.props.showUser) {
      if(this.props.user.logged){
        user = <Avatar src={this.props.user.avatar} />;
      } else {
        user = (<GoogleLogin
          clientId="794118858803-7m0716vfodm8b0uufru2342pviimau2h.apps.googleusercontent.com"
          buttonText="Sign In"
          callback={this.authCallback.bind(this)}
          scope="https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/plus.me openid email profile https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.readonly.metadata https://www.googleapis.com/auth/drive.appdata"
        />);
      }
    }

    return (
      <AppBar
      title="Intervals"
      iconElementRight={user}
      />
    );
  }
}

export default SurroundAppBar;
