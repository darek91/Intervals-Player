export default function reducer(state={
  logged: false,
  avatar: '',
  name: '',
  session: null,
  googleTracks: []
}, action) {

    switch (action.type) {
      case "AUTH_USER": {
        let res = action.payload;

        return {
          ...state,
          ...res
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
