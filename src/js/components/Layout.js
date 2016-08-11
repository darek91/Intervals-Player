import React from "react"
import { connect } from "react-redux"

// Import Components
import Menu from "./Menu/Menu"
import Paper from 'material-ui/Paper'
import Player from "./Player/Player"
import SurroundAppBar from "./AppBar"

// Import Actions
import { fetchUser } from "../actions/userActions"
import { loadTrack } from "../actions/playerActions"

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

@connect((store) => {
  return {
    player: store.player
  };
})
export default class Layout extends React.Component {

  componentWillMount() {
    // TODO - get last track from the history
    this.props.dispatch(loadTrack());
  }

  render() {
    const { player } = this.props;

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
          <Player contents={player} />
        </Paper>
      </div>
    </div>
  }
}
