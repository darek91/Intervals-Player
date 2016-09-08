import Axios from "axios";
import DB from '../data/DB';

const client_id = "3c56d20ccfabaa5f003c458ee78dffb7";

const GOOGLE_DRIVE = 1;
const SOUNDCLOUD = 2;

export function loadTrack(track, autoplay) {
  return function(dispatch) {
    let track_id, title;

    if(!track){
      return;
    }

    title = track.trackName || track.fileName;

    document.title = `${title} | Intervals`;

    dispatch({type: "LOAD_TRACK", payload: {
      ...track,
      artwork_url: track.artwork_url ? track.artwork_url : 'https://universe-beauty.com/albums/userpics/1/5/Sci-Fi---Space-Art-1920x1200_355.jpg',
      autoplay
    }});

    function loadSoundcloud (dispatch, id) {
      return Axios.get(`https://api.soundcloud.com/tracks/${id || 236844909}?client_id=${client_id}`)
        .then(function (response) {
          const data  = {...response.data, autoplay };

          dispatch({type: "LOAD_TRACK", payload: data});
        });
    }
  }
}

export function songPlaying(audio) {
  return function (dispatch) {
    dispatch({
      type: 'TRACK_PLAYING',
      payload: {
        elapsed: audio.position,
        total: audio.duration
      }
    });
  }
}

export function changePosition (position) {
  return function (dispatch) {
    dispatch({
      type: 'CHANGE_POSITION',
      payload: position
    });
  }
}

export function playSong (play, position) {
  return function (dispatch) {
    if(play) {
      dispatch({
        type: 'PLAY_SONG',
        payload: { play, position }
      });
    } else {
      dispatch({
        type: 'PAUSE_SONG',
        payload: { play, position }
      });
    }
  }
}
