export default function reducer(state={}, action) {

    switch (action.type) {
      case "LOAD_ALL_LIBRARY": {
        return action.payload;
      }
    }

    return state
}
