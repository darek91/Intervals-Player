export default function reducer(state={}, action) {

    switch (action.type) {
      case "OPEN_TRACK_CONTEXT_MENU": {
        return action.payload;
      }

      case "CLOSE_TRACK_CONTEXT_MENU": {
        return action.payload;
      }
    }

    return state
}
