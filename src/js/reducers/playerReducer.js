import Sound from 'react-sound';
import DB from '../data/DB';

const client_id = "3c56d20ccfabaa5f003c458ee78dffb7";

const defaultState = {
  status: Sound.status.PAUSED,
  position: 0,
  elapsed: 0,
  total: 0,
  cover: '',
  loaded: false,
  trackName: '',
  artistName: '',
  albumName: '',
  stream_url: ''
};

export default function reducer(state = defaultState, action) {

  switch (action.type) {
    case "LOAD_TRACK": {
      const track = action.payload;
      const cover = track.artwork_url ? track.artwork_url.replace(/large/, 't500x500') : track.user.avatar_url;
      const artistName = track.user.username ? track.user.username : "Unknown";
      const stream_url = track.stream_url + `?client_id=${client_id}`;

      DB.history.add({
        played: Date.now(),
        track_id: track.id,
        trackName: track.title,
        total: track.duration,
        cover,
        artistName,
        albumName: '',
        stream_url
      });

      return {
        ...state,
        loaded: true,
        total: track.duration,
        stream_url,
        cover,
        trackName: track.title,
        artistName,
        albumName: '',
        status: track.autoplay ? Sound.status.PLAYING : Sound.status.PAUSED
      }
    }

    case "TRACK_PLAYING": {
      const track = action.payload;

      return {
        ...state,
        total: track.total,
        elapsed: track.elapsed
      }
    }

    case "CHANGE_POSITION": {
      return {
        ...state,
        position: action.payload,
        elapsed: action.payload
      }
    }

    case "PLAY_SONG": {
      return {
        ...state,
        status: Sound.status.PLAYING
      }
    }

    case "PAUSE_SONG": {
      return {
        ...state,
        status: Sound.status.PAUSED
      }
    }

    case "STOP_SONG": {
      return {
        ...state,
        status: Sound.status.PAUSED
      }
    }
  }

  return state
}
