import React from "react"
import { connect } from "react-redux"

// Import Components
import Drawer from "material-ui/Drawer"
import Menu from "../Menu/Menu"
import Paper from 'material-ui/Paper'
import Player from "../Player"
import AppBar from "../AppBar"

const styles = {
  root: {
    height: '100%'
  },
  container:{
    marginTop: '-64px',
    paddingTop: '64px',
    display: 'flex',
    flex: '1 1 100%',
    flexDirection: 'row wrap',
    width: '100%',
    height: '100%',
    position: "relative",
    overflow: 'hidden'
  },
  content:{
    paddingLeft: "271px",
    paddingRight: "415px",
    width: "100%",
    height: window.innerHeight - 64 + "px",
    flex: '1 1 100%',
    flexDirection: 'column',
    maxHeight: "100%",
    overflowY: 'auto',
    textAlign: 'left'
  },
  player: {
    top: "64px"
  }
};

export default class Layout extends React.Component {

  componentWillMount() {

  }

  handleDrag (e) {
    e.preventDefault();
    e.stopPropagation();
  }

  handleDrop (e) {
    e.preventDefault();
    e.stopPropagation();
  }

  render() {
    return <div style={styles.root} onDragEnter={this.handleDrag.bind(this)} onDragOver={this.handleDrag.bind(this)} onDrop={this.handleDrop.bind(this)}>
      <AppBar showUser={true}/>
        <Drawer open={true}>
          <AppBar />
          <Menu />
        </Drawer>
        <div style={styles.container}>
          <Paper zDepth={0} style={styles.content}>
            {this.props.children}
          </Paper>
        </div>
        <Drawer width={400} open={true} openSecondary={true} containerStyle={styles.player}>
          <Player />
        </Drawer>
    </div>
  }
}
