import React from 'react'
import { connect } from "react-redux"

import {List} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'
import Track from './Track'

@connect((store) => {
  return {
    history: store.history,
    library: store.library
  };
})
class Playlists extends React.Component {
  render() {
    return (
      <div style={{ padding: '0 15px' }}>
        <h2>Playlists <Divider style={{ marginTop: '10px' }} /> </h2>

      </div>
    )
  }
}

export default Playlists;
