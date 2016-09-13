import React from 'react';
import PlaylistCard from './PlaylistCard';

const Playlists = ({ playlists, title }) => (
  <div className="it-playlists">
    <h2>{ title }</h2>
    { playlists.map(playlist => <PlaylistCard playlist={playlist} />) }
  </div>
);

require('./component.scss');

export default Playlists;
