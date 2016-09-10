import React from 'react'

import {List} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'
import Track from './components/Track'

class TracksList extends React.Component {
  render() {
    const { tracks, featured, title } = this.props;
    let empty = '';
    if (featured && featured.length) {
      var divider = <Divider />
    }

    if(!tracks || tracks.length > 1) {
      // empty = <Paper zDepth={5}>No Tracks</Paper>
    }

    return (
      <div style={{ padding: '0 15px' }}>
        { this.props.title? <h2>{this.props.title} <Divider style={{ marginTop: '10px' }} /> </h2> : '' }
        {tracks && tracks.map && tracks.map((track, i) => <Track key={i} track={track} playlist={tracks} />)}
      </div>
    )
  }
}

export default TracksList;
