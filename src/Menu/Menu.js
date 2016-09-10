import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import { Link } from 'react-router';

class Menu extends React.Component {

  render() {
    return (
      <div>
        <List>
          <ListItem containerElement={<Link to="/" />} primaryText="My Library" leftIcon={<ContentInbox />} />
          <ListItem containerElement={<Link to="/starred" />} primaryText="Starred" leftIcon={<ActionGrade />} />
          <ListItem containerElement={<Link to="/upnext" />} primaryText="Up Next" leftIcon={<ContentSend />} />
          <ListItem containerElement={<Link to="/history" />} primaryText="History" leftIcon={<ContentDrafts />} />
          <ListItem containerElement={<Link to="/discover" />} primaryText="Discover" leftIcon={<ContentDrafts />} />
          <ListItem containerElement={<Link to="/search" />} primaryText="Search" leftIcon={<ContentInbox />} />
        </List>
        <Divider />
        <List>
          <ListItem containerElement={<Link to="/profile" />} primaryText="Profile" rightIcon={<ActionInfo />} />
          <ListItem containerElement={<Link to="/settings" />} primaryText="Settings" rightIcon={<ActionInfo />} />
          <ListItem containerElement={<Link to="/donate" />} primaryText="Donate" rightIcon={<ActionInfo />} />
          <ListItem containerElement={<Link to="/about" />} primaryText="About" rightIcon={<ActionInfo />} />
        </List>
      </div>
    )
  }
}

export default Menu;
