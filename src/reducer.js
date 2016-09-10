import { combineReducers } from "redux"

import history from "./History/reducer"
import player from "./Player/reducer"
import search from "./Search/reducer"
import upnext from "./UpNext/reducer"
import user from "./User/reducer"
import library from "./Library/reducer"

export default combineReducers({
  player,
  history,
  search,
  upnext,
  user,
  library
})
