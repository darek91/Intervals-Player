import React from 'react';
import { connect } from "react-redux"

import TracksList from './TracksList';

import { getMostPlayed } from '../../actions/historyActions'

@connect((store) => {
  return {
    history: store.history
  };
})
class MostPlayed extends React.Component {

  componentWillMount() {
    this.props.dispatch(getMostPlayed());
  }

  render() {
    return <TracksList title="Most Played" featured={[]} tracks={this.props.history}/>
  }
}

export default MostPlayed;
