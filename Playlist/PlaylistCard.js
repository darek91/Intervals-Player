import React from 'react';

const PlaylistCard = ({ playlist }) => (
  <div className="it-playlist-card">
    <div className="it-cover">
      <img src={playlist.artwork_url} />
    </div>
    <div className="it-data">
      <div className="it-title">{playlist.name}</div>
      <div className="it-subtitle">{playlist.tracks.length + ' Tracks'}</div>
    </div>
  </div>
);

export default PlaylistCard;
