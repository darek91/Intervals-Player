export default function reducer(state=[], action) {

    switch (action.type) {
      case "FILL_NEXT_UP": {
        return action.payload
      }

      case "CLEAR_NEXT_UP": {
        return []
      }

      case "TRACK_PLAYED": {
        let remove_track = action.payload;
        return [...state].filter(track => track.id !== remove_track.id);
      }
    }

    return state
}
