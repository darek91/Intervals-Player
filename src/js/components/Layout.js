import React from "react"
import { connect } from "react-redux"

// Import Components
import Drawer from "material-ui/Drawer"
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
  paperRight:{
    paddingLeft: "271px",
    paddingRight: "15px",
    flex: 4,
    maxHeight: "100%",
    textAlign: 'left',
  },
  player: {
    flex: 10,
    maxWidth: '400px',
    height: "100%",
  }
};

export default class Layout extends React.Component {

  componentWillMount() {}

  render() {
    return <div>
      <SurroundAppBar />
      <div style={styles.div}>
        <Drawer open={true}>
          <SurroundAppBar />
          <Menu />
        </Drawer>
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
