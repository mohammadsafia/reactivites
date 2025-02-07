import React from 'react';
import { Image, Item, Label, List, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Activity } from "types";

type ActivityDetailedSidebarProps = {
  activity: Activity
}
const ActivityDetailedSidebar: React.FC<ActivityDetailedSidebarProps> = ({ activity }) => {
  const { attendees, host } = activity;
  if (!attendees) return null;
  
  return (
    <>
      <Segment
        textAlign="center"
        style={{ border: 'none' }}
        attached="top"
        secondary
        inverted
        color="teal"
      >
        {attendees.length} {attendees.length === 1 ? 'Person' : 'People'} Going
      </Segment>
      <Segment attached>
        <List relaxed divided>
          {attendees.map((attendee) => (
            <Item key={attendee.username} style={{ position: 'relative' }}>
              {attendee.username === host!.username && (
                <Label style={{ position: 'absolute' }} color="orange" ribbon="right">
                  Host
                </Label>
              )}
              <Image size="tiny" src={attendee.image || '/assets/user.png'}/>
              <Item.Content verticalAlign="middle">
                <Item.Header as="h3">
                  <Link to={`/profiles/${attendee.username}`}>{attendee.displayName}</Link>
                </Item.Header>
                {attendee.following && (
                  <Item.Extra style={{ color: 'orange' }}>Following</Item.Extra>
                )}
              </Item.Content>
            </Item>
          ))}
        </List>
      </Segment>
    </>
  
  );
};

export default observer(ActivityDetailedSidebar);