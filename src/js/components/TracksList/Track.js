import React from 'react'
import { connect } from "react-redux"

import { ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Popover from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Divider from 'material-ui/Divider'
import { pinkA200, transparent } from 'material-ui/styles/colors'

import { loadTrack } from '../../actions/playerActions'
import { fillNextUp } from "../../actions/upNextActions"
import { toggleTrackContextMenu } from "../../actions/contextMenuActions"

@connect((store) => {
  return {
    upNext: store.upNext,
    player: store.player,
    contextMenu: store.contextMenu
  };
})
class Track extends React.Component {
  handleDoubleClick() {
    this.props.dispatch(loadTrack(this.props.track, true));
    this.props.dispatch(fillNextUp(this.props.playlist.slice(1, 10)));
  }

  contextMenu(e) {
    e.preventDefault();

    // this.props.dispatch(toggleTrackContextMenu(true, e.currentTarget));
  }


  handleRequestClose() {
  }

  render() {
    const { track } = this.props;
    let cover;

    if(track.cover) {
      // FIXME use artwork_url
      cover = track.cover.replace(/http:/, "https:");
    } else if(track.artwork_url) {
      cover = track.artwork_url.replace(/http:/, "https:");
    }

    const title = track.trackName || track.fileName;

    let avatar;
    if(cover) {
      avatar = <Avatar src={cover} />;
    } else {
        avatar = <Avatar>{ title && title.replace(/([a-z]|[0-9]|\.|\-|\s)/g, "").charAt(0) }</Avatar>;
    }

    return (
        <div style={{ position: 'relative', padding: '15px 0', margin: '5px 0' }}
          onDoubleClick={this.handleDoubleClick.bind(this)}
        >
          {title} {track.artistName ? ' - ' + track.artistName : ''}
        </div>
    )
  }
}

export default Track;
