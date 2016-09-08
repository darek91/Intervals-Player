import React from 'react';
import { connect } from "react-redux"

import TracksList from './TracksList';

import { getMostPlayed } from '../../actions/historyActions'
import { getAll } from '../../actions/libraryActions'

@connect((store) => {
  return {
    history: store.history,
    library: store.library
  };
})
class Library extends React.Component {

  componentWillMount() {
    this.props.dispatch(getAll());
  }

  render() {
    return <TracksList title="Library" featured={[]} tracks={this.props.library}/>
  }
}

export default Library;
