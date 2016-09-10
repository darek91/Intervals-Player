import React from 'react';
import { connect } from "react-redux"

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class Upload extends React.Component {

  state = {
    open: false,
    files: []
  };

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.handleOpen();
  };

  handleChange (event) {
    console.log("Handle change", event);
    var tgt = event.target || window.event.srcElement;

    this.setState({...this.state, files: Object.keys(tgt.files).map(function (key) {return tgt.files[key]}) });
  };

  handleOpen = () => {
    this.setState({...this.state, open: true});
  };

  handleClose = () => {
    this.setState({...this.state, open: false});
  };

  render () {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="Upload"
        />
        <form>
          <Dialog
            title="Upload Music To Google Drive"
            actions={actions}
            modal={true}
            open={this.state.open}
          >
          <h1>TODO</h1>
          <input type="file" id="upload_files" multiple="multiple" onChange={this.handleChange.bind(this)}/>
          {
            this.state.files && this.state.files.map((file, i) => {
              return <div key={i}>{file.name}</div>
            })
          }
          </Dialog>
        </form>
      </div>
    )
  }
}

export default Upload;
