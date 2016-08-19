import React from "react"
import { connect } from "react-redux"

// Import Components
import Drawer from "material-ui/Drawer"
import Menu from "./Menu/Menu"
import Paper from 'material-ui/Paper'
import Player from "./Player/Player"
import SurroundAppBar from "./AppBar"

const styles = {
  root: {
    height: '100%'
  },
  container:{
    marginTop: '-64px',
    paddingTop: '64px',
    display: 'flex',
    flex: '1 1 100%;',
    flexDirection: 'row wrap',
    width: '100%',
    height: '100%'
  },
  content:{
    paddingLeft: "271px",
    paddingRight: "15px",
    flex: '1 1 100%;',
    flexDirection: 'column',
    maxHeight: "100%",
    textAlign: 'left',
  },
  player: {
    flex: '1 1 100%;',
    flexDirection: 'column',
    maxWidth: '400px',
    height: "100%",
  }
};

export default class Layout extends React.Component {

  componentWillMount() {}

  render() {
    return <div style={styles.root}>
      <SurroundAppBar />
      <div style={styles.container}>
        <Drawer open={true}>
          <SurroundAppBar />
          <Menu />
        </Drawer>
        <Paper zDepth={0} style={styles.content}>
          {this.props.children}
        </Paper>
        <Paper zDepth={0} style={styles.player}>
          <Player />
        </Paper>
      </div>
    </div>
  }
}
