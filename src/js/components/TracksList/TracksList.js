import React from 'react'

import {List} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'
import Track from './Track'

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
      <div>
        <h2>{ title || "All Tracks" }</h2>
        <Divider />
        <div>
          {featured && featured.map((track, i) => <Track key={i} track={track} playlist={tracks} />)}
        </div>
        {divider}
        { empty }
        <div>
          {tracks && tracks.map && tracks.map((track, i) => <Track key={i} track={track} playlist={tracks} />)}
        </div>
      </div>
    )
  }
}

export default TracksList;
