import { combineReducers } from "redux"

import player from "./playerReducer"
import user from "./userReducer"

export default combineReducers({
  player,
  user,
})
