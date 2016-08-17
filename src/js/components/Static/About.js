import React from 'react';

class About extends React.Component {

  componentWillMount() {

  }

  render() {
    let styles = {padding: "20px", fontSize: "16px"};
    return <div style={styles}>
      <h1>About Surround Music Player.</h1>

        <p><strong>Surround Music Player</strong> is an opensource project to create the most comprehensive desktop/mobile/web music player.</p>

        <p>Main goals of the project:</p>

        <ul>
          <li>Free for everyone (no ads, no premium plan)</li>
          <li>Compose your own library in the cloud (Use either Google Drive/Dropbox/Other cloud service) - coming soon</li>
          <li>Get access from anywhere</li>
          <li>Get access to large library of music (SoundCloud, YouTube - coming soon)</li>
        </ul>

        <p>Developement stage: alpha.
        Live demo: <a href="https://kkalamarski.github.io/Surround-Music-Player/src/">HERE</a></p>

        <h3>Contribution</h3>

        <p>Please see current <a href="https://github.com/kkalamarski/Surround-Music-Player/issues">Issues</a> to contribute or suggest change by creating new one. Reffer to <a href="https://github.com/kkalamarski/Surround-Music-Player/wiki">Wiki</a> for information about stack/libraries/conventions we use. If youre adding new features please make sure to document it well in the <a href="https://github.com/kkalamarski/Surround-Music-Player/wiki">Wiki</a> section.</p>
        <p>Please remember to add yourself to the contributors list once your PR is merged.</p>


        <h3>Contributors list:</h3>

        <ul>
          <li>Krzysztof Kałamarski</li>
        </ul>
    </div>
  }
}

export default About;
