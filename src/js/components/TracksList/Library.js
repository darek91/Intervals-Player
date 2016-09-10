import React from 'react';
import { connect } from "react-redux"

import TracksList from './TracksList';
import {Tabs, Tab} from 'material-ui/Tabs';

import { getMostPlayed } from '../../actions/historyActions'
import { getAll } from '../../actions/libraryActions'

@connect((store) => {
  return {
    history: store.history,
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
          <TracksList title="All Tracks" tracks={this.props.library}/>
        </Tab>
        <Tab label="Playlists">
          <h2>Playlists</h2>
        </Tab>
        <Tab label="Soundcloud">
          <TracksList title="Soundcloud" tracks={this.props.library && this.props.library.filter && this.props.library.filter(track => track.type === 2)}/>
        </Tab>
        <Tab label="Google Drive">
          <TracksList title="Google Drive" tracks={this.props.library && this.props.library.filter && this.props.library.filter(track => track.type === 1)}/>
        </Tab>
      </Tabs>
    );
  }
}

export default Library;
