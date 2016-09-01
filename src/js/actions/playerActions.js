import Axios from "axios";
import DB from '../data/DB';

const client_id = "3c56d20ccfabaa5f003c458ee78dffb7";

export function loadTrack(track, autoplay) {
  return function(dispatch) {
    let track_id;

    if(!track){
      autoplay = false;
    }

    if (track && track.track_id) {
      Promise.resolve(track.track_id).then(res => {
        return loadSoundcloud(dispatch, res)
      });
    } else if (track && track.type === "GoogleDrive") {
      loadGoogleDrive(dispatch, track)
    } else {
      DB.history.orderBy("played").reverse().limit(1).toArray()
        .then(response => response[0].track_id ).then(res => {
          return loadSoundcloud(dispatch, res)
        });
    }

    function loadGoogleDrive (dispatch, track) {
      console.log(track);
        dispatch({type: "LOAD_TRACK", payload: {
          ...track,
          autoplay
        }});
    }

    function loadSoundcloud (dispatch, id) {
      return Axios.get(`https://api.soundcloud.com/tracks/${id || 236844909}?client_id=${client_id}`)
        .then(function (response) {
          const data  = {...response.data, autoplay };

          document.title = `${data.title} - ${data.user.username} | Intervals`;

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
