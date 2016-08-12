import React from 'react';
import { connect } from "react-redux"

import TracksList from './TracksList';

import { loadHistory } from '../../actions/historyActions'

@connect((store) => {
  return {
    history: store.history
  };
})
class History extends React.Component {

  componentWillMount() {
    this.props.dispatch(loadHistory());
  }

  render() {
    return <TracksList title="History" featured={[]} tracks={this.props.history}/>
  }
}

export default History;
