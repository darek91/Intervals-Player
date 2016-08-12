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
      track_id = Promise.resolve(track.track_id);
    } else {
      track_id = DB.history.orderBy("played").reverse().limit(1).toArray()
        .then(response => response[0].track_id );
    }

    track_id.then(id => {
      console.info("ID:", id);
      return Axios.get(`https://api.soundcloud.com/tracks/${id || 1}?client_id=${client_id}`)
        .then(function (response) {
          const data  = {...response.data, autoplay };

          dispatch({type: "LOAD_TRACK", payload: data});
        });
    });
  }
}

export function songPlaying(audio) {
  return function (dispatch) {
    dispatch({
      type: 'TRACK_PLAYING',
      payload: {
        elapsed: audio.position,
        total: audio.duration,
        // position: audio.position / audio.duration
      }
    });
  }
}

export function playSong (play) {
  return function (dispatch) {
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
