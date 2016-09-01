export default function reducer(state={
  logged: false,
  avatar: '',
  name: '',
  session: null,
  googleTracks: []
}, action) {

    switch (action.type) {
      case "AUTH_USER": {
        let res = action.payload.user;

        return {
          ...state,
          logged: true,
          avatar: res.w3.Qaa,
          name: res.w3.ig,
          session: res.Zi
        }
      }

      case "LOADED_GOOGLE_DRIVE": {
        let res = action.payload;

        return {
          ...state,
          googleTracks: res
        }
      }
    }

    return state
}
