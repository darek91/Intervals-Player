import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router, Route, IndexRoute, hashHistory } from "react-router"
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// Import Components
import About from "./components/Static/About"
import Donate from "./components/Static/Donate"
import History from "./components/TracksList/History"
import MostPlayed from "./components/TracksList/MostPlayed"
import Layout from "./components/Layout"
import LocalBrowser from "./components/TracksList/LocalBrowser"
import Search from "./components/Search/Search"
import Settings from "./components/Settings/Settings"
import TracksList from "./components/TracksList/TracksList"
import UpNext from "./components/Player/UpNext"

// Import theme
import playerTheme from "./theme";

import store from "./store"

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider muiTheme={playerTheme}>
    <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={MostPlayed}/>
        <Route path="starred" component={TracksList}/>
        <Route path="history" component={History}/>
        <Route path="upNext" component={UpNext}/>
        <Route path="local" component={LocalBrowser}/>
        <Route path="discover" component={TracksList}/>
        <Route path="search" component={Search}/>

        <Route path="about" component={About} />
        <Route path="settings" component={Settings} />
        <Route path="donate" component={About} />
      </Route>
    </Router>
    </Provider>
  </MuiThemeProvider>
, document.body);
