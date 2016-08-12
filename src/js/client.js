import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router, Route, IndexRoute, hashHistory } from "react-router"

// Import Components
import History from './components/TracksList/History'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MostPlayed from './components/TracksList/MostPlayed'
import Layout from "./components/Layout"
import TracksList from "./components/TracksList/TracksList"
import Search from "./components/Search/Search"
import UpNext from "./components/Player/UpNext"

import store from "./store"

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
        <Route path="local" component={TracksList}/>
        <Route path="discover" component={TracksList}/>
        <Route path="search" component={Search}/>

        <Route path="about" />
        <Route path="settings" />
        <Route path="donate" />
      </Route>
    </Router>
    </Provider>
  </MuiThemeProvider>
, app);
