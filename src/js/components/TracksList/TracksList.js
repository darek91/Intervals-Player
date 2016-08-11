import React from 'react';

import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {pinkA200, transparent} from 'material-ui/styles/colors';

class TracksList extends React.Component {
  render() {
    const { path } = this.props.route;
    const link = "https://yt3.ggpht.com/-Pr2108j6qKs/AAAAAAAAAAI/AAAAAAAAAAA/-cia2SakDYA/s900-c-k-no-mo-rj-c0xffffff/photo.jpg";

    return (
      <div>
        <h2>{path? path : "All Tracks"}</h2>
        <List>
          <ListItem
            primaryText="Chelsea Otakan"
            leftIcon={<ActionGrade color={pinkA200} />}
            rightAvatar={<Avatar src={link} />}
          />
          <ListItem
            primaryText="Eric Hoffman"
            insetChildren={true}
            rightAvatar={<Avatar src={link} />}
          />
          <ListItem
            primaryText="James Anderson"
            insetChildren={true}
            rightAvatar={<Avatar src={link} />}
          />
          <ListItem
            primaryText="Kerem Suer"
            insetChildren={true}
            rightAvatar={<Avatar src={link} />}
          />
        </List>
        <Divider inset={true} />
        <List>
          <ListItem
            primaryText="Adelle Charles"
            leftAvatar={
              <Avatar
                color={pinkA200} backgroundColor={transparent}
                style={{left: 8}}
              >
                A
              </Avatar>
            }
            rightAvatar={<Avatar src={link} />}
          />
          <ListItem
            primaryText="Adham Dannaway"
            insetChildren={true}
            rightAvatar={<Avatar src={link} />}
          />
          <ListItem
            primaryText="Allison Grayce"
            insetChildren={true}
            rightAvatar={<Avatar src={link}/>}
          />
          <ListItem
            primaryText="Angel Ceballos"
            insetChildren={true}
            rightAvatar={<Avatar src={link} />}
          />
        </List>
      </div>
    )
  }
}

export default TracksList;
