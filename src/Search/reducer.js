const client_id = "3c56d20ccfabaa5f003c458ee78dffb7";

const defaultState = [];

export default function reducer(state = defaultState, action) {

  switch (action.type) {
    case "SEARCH_CHANGE_FULFILLED": {
      return [...action.payload]
    }
  }

  return state
}
