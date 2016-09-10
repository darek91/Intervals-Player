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
import User from './User/User';

@connect((store) => {
  return {
    user: store.user
  };
})
class SurroundAppBar extends React.Component {

  render() {
    return (
      <AppBar
        title="Intervals"
        iconElementRight={<User showUser={this.props.showUser} />}
      >
        <div style={{ position: "absolute", top: (64 - 36) / 2, left: 271 }}>
          <Upload />
        </div>
      </AppBar>
    );
  }
}

export default SurroundAppBar;
