import { combineReducers } from "redux"

import history from "./historyReducer"
import player from "./playerReducer"
import search from "./searchReducer"
import upnext from "./upNextReducer"
import contextMenu from "./contextMenuReducer"
import local from "./localReducer"
import user from "./googleReducer"

export default combineReducers({
  player,
  history,
  search,
  upnext,
  contextMenu,
  local,
  user
})
