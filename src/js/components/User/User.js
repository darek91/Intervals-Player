import React from 'react';
import { connect } from "react-redux"

import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import GoogleLogin from 'react-google-login';
import RaisedButton from 'material-ui/RaisedButton';

import { authUser } from "../../actions/googleActions";

@connect((store) => {
  return {
    user: store.user
  };
})
class User extends React.Component {

  componentWillMount () {
    this.props.dispatch(authUser());
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();
    window.location = '/social/google/login';
  };

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
    } else if (this.props.showUser) {
      user = (<RaisedButton style={{ position: 'absolute', right: '15px', top: (64 - 36) / 2 + 'px' }}
        onTouchTap={this.handleTouchTap}
        label="Sign In"
      />)
    } else {
      user = <span></span>
    }

    return user;
  }
}

export default User;
