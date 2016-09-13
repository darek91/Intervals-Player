import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router, Route, IndexRoute, hashHistory } from "react-router"
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// Import Components
import About from "./Static/About"
import Donate from "./Static/Donate"
import History from "./History"
import Layout from "./Layout"
import Library from "./Library"
import Search from "./Search"
import Settings from "./Settings"
import TracksList from "./TrackList"
import UpNext from "./UpNext"

// Import theme
import playerTheme from "./theme";

import store from "./store"

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider muiTheme={playerTheme}>
    <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Library}/>
        <Route path="starred" component={TracksList}/>
        <Route path="history" component={History}/>
        <Route path="upNext" component={UpNext}/>
        <Route path="discover" component={TracksList}/>
        <Route path="search" component={Search}/>

        <Route path="about" component={About} />
        <Route path="settings" component={Settings} />
        <Route path="donate" component={About} />
      </Route>
    </Router>
    </Provider>
  </MuiThemeProvider>
, document.getElementById('intervals'));
