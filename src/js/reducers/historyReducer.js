export default function reducer(state={}, action) {

    switch (action.type) {
      case "LOAD_HISTORY_FULFILLED": {
        return [
          ...action.payload
        ]
      }

      case "GET_MOST_PLAYED_FULFILLED": {
        return [
          ...action.payload
        ]
      }

      case "UPDATE_HISTORY": {
        return {
          ...state
        }
      }
    }

    return state
}
