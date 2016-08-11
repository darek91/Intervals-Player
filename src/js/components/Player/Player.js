import React from 'react';
import { connect } from "react-redux"
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ActionInfo from 'material-ui/svg-icons/action/info';
import UpNext from "./UpNext";
import Sound from 'react-sound';

import { playSong, songPlaying } from '../../actions/playerActions';

window.moment = require('moment');
require("moment-duration-format");

const moment = window.moment;

@connect((store) => {
  return {};
})
class Player extends React.Component {

  handleSongPlaying (audio) {
    this.props.dispatch(songPlaying(audio));
  }

  togglePlay(){
    // Check current playing state
    this.props.dispatch(playSong(this.props.contents.status !== Sound.status.PLAYING));
  }

  handleSongFinished () {
    // TODO Take next
  }

  render () {
    const track = this.props.contents;

    const fullSubTitle = moment.duration(track.elapsed).format("mm:ss", true) + ' / ' + moment.duration(track.total).format("mm:ss") + " ------ " + track.artistName;

    return (
      <Card>

        <CardMedia overlay={<CardTitle title={track.trackName} subtitle={ fullSubTitle } />}>
          <img src={track.cover} />
        </CardMedia>

        <CardActions>
          <FlatButton onClick={this.togglePlay.bind(this)} label="Play / Pause" />
          <FlatButton label="Stop" />
          <FlatButton label="Prev" />
          <FlatButton label="Next" />
        </CardActions>

        <CardText>
          <UpNext />
        </CardText>

        <Sound
          url={track.stream_url}
          playStatus={track.status}
          onPlaying={this.handleSongPlaying.bind(this)}
          playFromPosition={track.position}
          onFinishedPlaying={this.handleSongFinished.bind(this)} />
      </Card>
    )
  }
}

export default Player;
