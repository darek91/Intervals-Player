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
    this.props.dispatch(fillNextUp(this.props.playlist));
  }

  contextMenu(e) {
    e.preventDefault();

    // this.props.dispatch(toggleTrackContextMenu(true, e.currentTarget));
  }


  handleRequestClose() {
    // this.props.dispatch(toggleTrackContextMenu());
  };

  render() {
    const { track } = this.props;

    const cover = track.cover.replace(/http:/, "https:");

    return (
      <div>
        <ListItem
          onDoubleClick={this.handleDoubleClick.bind(this)}
          // onContextMenu={this.contextMenu.bind(this)}
          primaryText={track.trackName}
          secondaryText={track.artistName}
          leftAvatar={<Avatar src={cover} />}
          rightIconButton={
            <IconMenu
              iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
              anchorOrigin={{horizontal: 'left', vertical: 'top'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
            >
              <MenuItem primaryText="Play only this" />
              <MenuItem primaryText="Play up next" />
              <MenuItem primaryText="Add to queue" />
              <MenuItem primaryText="Add to favourites" />
              <MenuItem primaryText="Add to playlist" />
              <Divider />
              <MenuItem primaryText="Remove From List" />
            </IconMenu>
          }
        />
      </div>
    )
  }
}

export default Track;
