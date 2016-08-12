import React from "react"
import { connect } from "react-redux"

// Import Components
import Menu from "./Menu/Menu"
import Paper from 'material-ui/Paper'
import Player from "./Player/Player"
import SurroundAppBar from "./AppBar"

const styles = {
  div:{
    display: 'flex',
    flexDirection: 'row wrap',
    width: '100%'
  },
  paperLeft:{
    flex: 1,
    height: '100%',
    textAlign: 'left',
  },
  paperRight:{
    flex: 4,
    textAlign: 'left',
  },
  player: {
    flex: 10,
    maxWidth: '400px'
  }
};

export default class Layout extends React.Component {

  componentWillMount() {}

  render() {
    return <div>
      <SurroundAppBar />
      <div style={styles.div}>
        <Paper zDepth={0} style={styles.paperLeft}>
          <Menu />
        </Paper>
        <Paper zDepth={0} style={styles.paperRight}>
          {this.props.children}
        </Paper>
        <Paper zDepth={0} style={styles.player}>
          <Player />
        </Paper>
      </div>
    </div>
  }
}
