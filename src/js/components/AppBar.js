import React from 'react';
import AppBar from 'material-ui/AppBar';

class SurroundAppBar extends React.Component {

  render() {
    return (
      <AppBar
      title="Intervals"
      iconElementRight={
        <GoogleLogin
          clientId="794118858803-7m0716vfodm8b0uufru2342pviimau2h.apps.googleusercontent.com"
          buttonText="Sign In"
          callback={this.authCallback.bind(this)}
        />
      }
      />
    );
  }
}

export default SurroundAppBar;
