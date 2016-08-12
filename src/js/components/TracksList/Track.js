import React from 'react'
import { connect } from "react-redux"

import { ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import { pinkA200, transparent } from 'material-ui/styles/colors'

import { loadTrack } from '../../actions/playerActions'
import { fillNextUp } from "../../actions/upNextActions"

@connect((store) => {
  return {
    upNext: store.upNext,
    player: store.player
  };
})
class Track extends React.Component {

  handleDoubleClick() {
    this.props.dispatch(loadTrack(this.props.track, true));
    this.props.dispatch(fillNextUp(this.props.playlist));
  }

  render() {
    const { track } = this.props;

    return <ListItem onDoubleClick={this.handleDoubleClick.bind(this)} primaryText={track.trackName} secondaryText={track.artistName} leftAvatar={<Avatar src={track.cover} />} />
  }
}

export default Track;
