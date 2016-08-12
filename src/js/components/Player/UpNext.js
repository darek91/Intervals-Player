import React from 'react';
import { connect } from 'react-redux'

import TracksList from "../TracksList/TracksList";

@connect((store) => {
  return {
    upnext: store.upnext,
    player: store.player
  };
})
class UpNext extends React.Component {
  render() {
    const title = this.props.hideTitle ? ' ' : "Up Next";

    return <TracksList title={title} featured={[this.props.player]} tracks={this.props.upnext}/>
  }
}

export default UpNext;
