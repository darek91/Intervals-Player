import React from 'react';
import { connect } from "react-redux";

import Playlists from '../Playlist';
import TracksList from '../TrackList';
import {Tabs, Tab} from 'material-ui/Tabs';

import { getAll } from './actions';

@connect((store) => {
  return {
    library: store.library
  };
})
class Library extends React.Component {

  componentWillMount() {
    this.props.dispatch(getAll());
  }

  render() {
    return (
      <Tabs style={{ margin: "0 -15px", width: "auto" }}>
        <Tab label="All Tracks">
          <TracksList title="All Tracks" tracks={this.props.library.tracks}/>
        </Tab>
        <Tab label="Playlists">
          <div style={{padding:'0 15px'}}>
            <Playlists playlists={this.props.library.playlists} title="Playlists" />
          </div>
        </Tab>
        <Tab label="Soundcloud">
          <TracksList title="Soundcloud" tracks={this.props.library.tracks && this.props.library.tracks.filter && this.props.library.tracks.filter(track => track.type === 2)}/>
        </Tab>
        <Tab label="Google Drive">
          <TracksList title="Google Drive" tracks={this.props.library.tracks && this.props.library.tracks.filter && this.props.library.tracks.filter(track => track.type === 1)}/>
        </Tab>
      </Tabs>
    );
  }
}

export default Library;
