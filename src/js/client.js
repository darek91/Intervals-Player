import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router, Route, IndexRoute, hashHistory } from "react-router"

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from "./components/Layout"
import TracksList from "./components/TracksList/TracksList"
import store from "./store"

const app = document.getElementById('app')

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={TracksList}/>
        <Route path="starred" component={TracksList}/>
        <Route path="history" component={TracksList}/>
        <Route path="upNext" component={TracksList}/>
        <Route path="local" component={TracksList}/>
        <Route path="discover" component={TracksList}/>

        <Route path="about" />
        <Route path="settings" />
        <Route path="donate" />
      </Route>
    </Router>
    </Provider>
  </MuiThemeProvider>
, app);
