import React from 'react';
import { connect } from "react-redux"

import TracksList from './TracksList';

import { loadPath } from '../../actions/localBrowserActions'

@connect((store) => {
  return {
    local: store.local
  };
})
class LocalBrowser extends React.Component {

  componentWillMount() {
      this.props.dispatch(loadPath('/'));
  }

  render() {
    let files = this.props.local.tracks.map(i => <div>{i}</div>);

    if(this.props.local.isError) {
      // TODO create error message component
      files = <div>
          <h2>Aww, snap! Something went wrong.</h2>
          <h5>{this.props.local.message}</h5>
        </div>
    }

    return <div>{files}</div>;
  }
}

export default LocalBrowser;
