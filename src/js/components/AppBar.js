import React from 'react';
import { connect } from "react-redux"

import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import GoogleLogin from 'react-google-login';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import Upload from './Upload/Upload';

import { authUser, loadGoogleDrive } from "../actions/googleActions";

@connect((store) => {
  return {
    user: store.user
  };
})
class SurroundAppBar extends React.Component {

  componentWillMount () {
    this.props.dispatch(authUser());
  }

  render() {
    let user;

    if(this.props.showUser && this.props.user.social) {
      // TODO move to separate component + style it
      user = (
        <div style={{ height: '100%', display: 'flex', textAlign: 'right', color: '#000', marginTop: "5px" }}>
          <div style={{ marginRight: '10px' }}>
            <b>{this.props.user.name.first + ' ' + this.props.user.name.last}</b>
            <br />
            <span>{this.props.user.email}</span>
          </div>
          <Avatar src={this.props.user.social.google.photoUrl} />
        </div>);
    }

    return (
      <AppBar
        title="Intervals"
        iconElementRight={user}
      >
        <div style={{ position: "absolute", top: (64 - 36) / 2, left: 271 }}>
          <Upload />
        </div>
      </AppBar>
    );
  }
}

export default SurroundAppBar;
