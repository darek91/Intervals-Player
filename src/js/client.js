import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router, Route, IndexRoute, hashHistory } from "react-router"
import injectTapEventPlugin from 'react-tap-event-plugin'

// Import Components
import About from "./components/Static/About"
import History from './components/TracksList/History'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MostPlayed from './components/TracksList/MostPlayed'
import Layout from "./components/Layout"
import TracksList from "./components/TracksList/TracksList"
import Search from "./components/Search/Search"
import UpNext from "./components/Player/UpNext"
import LocalBrowser from "./components/TracksList/LocalBrowser"

import store from "./store"

injectTapEventPlugin();
const app = document.getElementById('app')

ReactDOM.render(
  <MuiThemeProvider>
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
        <Route path="settings" />
        <Route path="donate" />
      </Route>
    </Router>
    </Provider>
  </MuiThemeProvider>
, app);
