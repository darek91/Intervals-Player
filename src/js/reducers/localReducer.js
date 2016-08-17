export default function reducer(state={
  path: '/',
  tracks: [],
  message: "",
  isError: false
}, action) {

    switch (action.type) {
      case "LOAD_LOCAL_FILES_FAILED": {
        return {
          path: action.payload.path,
          tracks: [],
          message: action.payload.message,
          isError: true
        }
      }

      case "LOAD_LOCAL_FILES": {
        return {
          ...state,
          ...action.payload,
          isError: false
        }
      }
    }

    return state
}
