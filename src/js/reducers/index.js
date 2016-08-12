import { combineReducers } from "redux"

import history from "./historyReducer"
import player from "./playerReducer"
import search from "./searchReducer"
import upnext from "./upNextReducer"

export default combineReducers({
  player,
  history,
  search,
  upnext
})
