import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TracksList from '../TrackList';

const PlaylistCard = ({ playlist }) => (
  <div className="it-playlist-card">
    <div className="it-cover">
      <img src={playlist.artwork_url} />
      <div className="it-overlay">
        <div className="it-title">{playlist.name}</div>
        <div className="it-subtitle">{playlist.tracks.length + ' Tracks'}</div>
      </div>
    </div>
    <div className="it-playlist-card-tracks">
      <TracksList title={playlist.name} tracks={playlist.tracks.slice(0, 4)}/>
    </div>
  </div>
);

export default PlaylistCard;
