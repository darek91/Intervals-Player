import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

const UpNext = () => (
  <div>
    <Divider />
    <List>
      <ListItem primaryText="Now Playing" leftIcon={<ContentInbox />} />
    </List>
    <Divider />
    <List>
      <ListItem primaryText="Next Song" rightIcon={<ActionInfo />} />
      <ListItem primaryText="Next Song 2" rightIcon={<ActionInfo />} />
      <ListItem primaryText="Next Song 3" rightIcon={<ActionInfo />} />
      <ListItem primaryText="Next Song 4" rightIcon={<ActionInfo />} />
      <ListItem primaryText="Next Song 5" rightIcon={<ActionInfo />} />
      <ListItem primaryText="Next Song 6" rightIcon={<ActionInfo />} />
      <ListItem primaryText="Next Song 7" rightIcon={<ActionInfo />} />
    </List>
  </div>
);

export default UpNext;
