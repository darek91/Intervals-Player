import Axios from "axios";

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
      autoplay
    }});
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
