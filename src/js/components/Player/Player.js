import React from 'react';
import { connect } from "react-redux"

// Components
import ActionInfo from 'material-ui/svg-icons/action/info';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from "material-ui/FontIcon";
import Sound from 'react-sound';
import Slider from 'material-ui/Slider';
import UpNext from "./UpNext";

// Actions
import { loadTrack, playSong, songPlaying, changePosition } from '../../actions/playerActions';
import { trackPlayed } from "../../actions/upNextActions";

@connect((store) => {
  return {
    upnext: store.upnext,
    player: store.player
  };
})
class Player extends React.Component {

  componentWillMount() {
    this.props.dispatch(loadTrack());
  }

  handleSongPlaying (audio) {
    this.props.dispatch(songPlaying(audio));
  }

  togglePlay(){
    // Check current playing state
    this.props.dispatch(playSong(this.props.player.status !== Sound.status.PLAYING, this.props.player.elapsed / this.props.player.total));
  }

  handleSongFinished () {
    this.props.dispatch(loadTrack(this.props.upnext[0], true));
    this.props.dispatch(trackPlayed(this.props.upnext[0]));
  }

  handleSlider (e, value) {
    this.props.dispatch(changePosition(value));
  }

  formatMilliseconds(milliseconds) {
     var hours = Math.floor(milliseconds / 3600000);
     milliseconds = milliseconds % 3600000;
     var minutes = Math.floor(milliseconds / 60000);
     milliseconds = milliseconds % 60000;
     var seconds = Math.floor(milliseconds / 1000);
     milliseconds = Math.floor(milliseconds % 1000);

     return (minutes < 10 ? '0' : '') + minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds;
  }

  render () {
    const track = this.props.player;
    const fullSubTitle = this.formatMilliseconds(track.elapsed) + ' / ' + this.formatMilliseconds(track.total) + " ------ " + track.artistName;

    const playButtonIcon = this.props.player.status === Sound.status.PLAYING ? 'fa-pause' : 'fa-play';

    const Style = {
      slider: {
        marginTop: '-10px',
        marginBottom: 0
      }
    };

    return (
      <Card>
        <CardMedia overlay={<CardTitle title={track.trackName} subtitle={ fullSubTitle } />}>
          <img src={track.cover} />
        </CardMedia>
        <Slider
          sliderStyle={Style.slider}
          min={0}
          max={track.total}
          step={0.01}
          defaultValue={0}
          value={track.elapsed}
          onChange={this.handleSlider.bind(this)}
        />
        <CardActions>
          <FlatButton label={<FontIcon className="fa fa-step-backward" />} />
          <FlatButton onClick={this.togglePlay.bind(this)} label={<FontIcon className={"fa " + playButtonIcon} />} />
          <FlatButton label={<FontIcon className="fa fa-stop" />} />
          <FlatButton label={<FontIcon className="fa fa-step-forward" />} />
        </CardActions>

        <CardText style={{padding: '0', marginTop: '-20px'}}>
          <UpNext hideTitle={true} />
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
