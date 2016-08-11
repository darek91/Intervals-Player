import Sound from 'react-sound';

const client_id = "3c56d20ccfabaa5f003c458ee78dffb7";

export default function reducer(state={
    status: Sound.status.STOPPED,
    position: 0,
    elapsed: 0,
    total: 0,
    cover: '',
    loaded: false,
    trackName: '',
    artistName: '',
    albumName: '',
    stream_url: ''
  }, action) {

    switch (action.type) {
      case "LOAD_TRACK": {
        const track = action.payload;

        return {
          ...state,
          loaded: true,
          total: track.duration,
          stream_url: track.stream_url + `?client_id=${client_id}`,
          cover: track.artwork_url ? track.artwork_url : "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=15799216",
          trackName: track.title,
          artistName: track.user.username ? track.user.username : "Unknown",
          albumName: ''
        }
      }

      case "TRACK_PLAYING": {
        const track = action.payload;

        return {
          ...state,
          total: track.duration,
          elapsed: track.elapsed,
          position: track.position
        }
      }

      case "PLAY_SONG": {
        console.log('called');
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
          status: Sound.status.STOPPED
        }
      }
    }

    return state
}
