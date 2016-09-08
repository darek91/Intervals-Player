import Axios from 'axios';

export function getAll() {
  return function(dispatch) {
    Axios.get('/api/getLibrary').then(function (response) {
      dispatch({type: "LOAD_ALL_LIBRARY", payload: response.data});
    });
  };
}
