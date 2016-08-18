import React from 'react'
import { connect } from 'react-redux'

@connect((store) => {
  return {
    settings: store.settings
  };
})
class Settings extends React.Component {
  render() {
    return (
      <div>Settings</div>
    )
  }
}

export default Settings;
