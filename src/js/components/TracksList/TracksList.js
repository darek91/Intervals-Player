import React from 'react'

import {List} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Track from './Track'

class TracksList extends React.Component {
  render() {
    const { tracks, featured, title } = this.props;
    if (featured && featured.length) {
      var divider = <Divider />
    }
    return (
      <div>
        <h2>{title || "All Tracks" }</h2>
        <List>
          {featured && featured.map((track, i) => <Track key={i} track={track} playlist={tracks} />)}
        </List>
        {divider}
        <List>
          {tracks && tracks.map && tracks.map((track, i) => <Track key={i} track={track} playlist={tracks} />)}
        </List>
      </div>
    )
  }
}

export default TracksList;
