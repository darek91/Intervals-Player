import Axios from "axios";

const client_id = "3c56d20ccfabaa5f003c458ee78dffb7";

export function loadTrack() {
  return function(dispatch) {
    Axios.get(`http://api.soundcloud.com/tracks/236844909?client_id=${client_id}`)
    .then(function (response) {
      dispatch({type: "LOAD_TRACK", payload: response.data})
    });
  }
}

export function songPlaying(audio) {
  return function (dispatch) {
    dispatch({
      type: 'SONG_PLAYING',
      payload: {
        elapsed: audio.position,
        total: audio.duration,
        position: audio.position / audio.duration
      }
    });
  }
}

export function playSong (play) {
  console.log('called');
  return function (dispatch) {
    console.log('here too');
    if(play) {
      dispatch({
        type: 'PLAY_SONG',
        payload: play
      });
    } else {
      dispatch({
        type: 'PAUSE_SONG',
        payload: play
      });
    }
  }
}
