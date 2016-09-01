import React from 'react';
import { connect } from "react-redux"

import TracksList from './TracksList';

import { loadGoogleDrive } from '../../actions/googleActions'

@connect((store) => {
  return {
    user: store.user
  };
})
class LocalBrowser extends React.Component {

  render() {
    let tracks;
    
    try {
      tracks = this.props.user.googleTracks;
    } catch (e) {
      tracks = [];
    }

    return (
      <TracksList title="Google Drive Library" featured={[]} tracks={tracks}/>
    );
  }
}

export default LocalBrowser;
