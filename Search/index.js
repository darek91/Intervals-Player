import React from 'react'
import { connect } from 'react-redux'

// Import Components
import AutoComplete from 'material-ui/AutoComplete'
import TracksList from "../TrackList"

// Import actions
import { search } from  "./actions"

@connect((store) => {
  return {
    search: store.search
  };
})
class Search extends React.Component {

  handleInputChange(e) {
    this.props.dispatch(search(e));
  }

  render() {
    return (
      <div>
        <AutoComplete
          hintText=""
          dataSource={[]}
          onUpdateInput={this.handleInputChange.bind(this)}
          floatingLabelText="Track or Artist Name"
          fullWidth={true}
        />
        <TracksList featured={[]} tracks={this.props.search} title={'Search Results:'} />
      </div>
    )
  }
}

export default Search;
