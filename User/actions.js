import Axios from 'axios';

export function authUser(user) {
  return function (dispatch) {
    Axios.get('/api/getUserInfo').then(response => {
      console.log(response);
      dispatch({
        type: "AUTH_USER",
        payload: {
          ...response.data
        }
      });
    });
  };
}

export function loadGoogleDrive() {
  let library = JSON.parse(window.localStorage.getItem("GoogleDrive"));

  if(library){
    return {type: "LOADED_GOOGLE_DRIVE", payload: library};
  } else {
    return refreshLibrary;
  }
}

function refreshLibrary (dispatch) {
  dispatch({type: "LOADING_LIBRARY_FAILED"});
  dispatch({type: "REFRESHING_LIBRARY_STARTED"});
  try {
    return window.gapi.client.load('drive', 'v2', function() {
      return window.gapi.client.drive.files.list({
            'maxResults': 1000,
            'q': "mimeType='audio/mpeg'"
          }).execute(function(resp) {
            dispatch({type: "REFRESHING_LIBRARY_PENDING"});

            let tracks = resp.items.map(track => {
              // TODO get tags
              return {
                id: track.id,
                stream_url: track.webContentLink,
                type: 'GoogleDrive',
                trackName: track.title, //FIXME
                artistName: 'GoogleDrive', // FIXME
                albumName: '',
                duration: 0,
                fileName: track.title,
                artwork_url: 'https://lh6.ggpht.com/k7Z4J1IIXXJnC2NRnFfJNlkn7kZge4Zx-Yv5uqYf4222tx74wXDzW24OvOxlcpw0KcQ=w300' // FIXME
              }
            });

            Promise.resolve(tracks).then(res => {
              window.localStorage.setItem('GoogleDrive', JSON.stringify(res));
              dispatch({type: "REFRESHING_LIBRARY_FINISHED"});

              return res;
            }).then(res => {
              dispatch({type: "LOADED_GOOGLE_DRIVE", payload: res});
            });
          });
    });
  } catch (e) {
    dispatch({type: "LOADED_GOOGLE_DRIVE_FAILED", payload: e});
  }
}
