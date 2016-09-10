import Axios from 'axios';

export function getAll() {
  return function(dispatch) {
    Axios.all([
      Axios.get('/api/getLibrary'),
      Axios.get('/api/playlists')
    ]).then(Axios.spread(function (library, playlists) {
      dispatch({type: "LOAD_ALL_LIBRARY", payload: {
        tracks: library.data,
        playlists: playlists.data
      }});
    }));
  };
}
