import React from 'react';
import Calendar from 'react-calendar';
import { Header, Menu } from 'semantic-ui-react';
import { observer } from "mobx-react-lite";
import { useStore } from "app/stores/store";

const ActivityFilters = () => {
  const { activityStore: { predicate, setPredicate } } = useStore();
  return (
    <>
      <Menu vertical size="large" style={{ width: '100%', marginTop: 25 }}>
        <Header icon="filter" attached color="teal" content="Filters"/>
        <Menu.Item
          content="All Activities"
          active={predicate.has('all')}
          onClick={() => setPredicate('all', 'true')}
        />
        <Menu.Item
          content="I'm going"
          active={predicate.has('isGoing')}
          onClick={() => setPredicate('isGoing', 'true')}
        />
        <Menu.Item
          content="I'm hosting"
          active={predicate.has('isHost')}
          onClick={() => setPredicate('isHost', 'true')}
        />
      </Menu>
      <Header/>
      <Calendar
        value={
        predicate.get('startDate') as Date || new Date()}
        onChange={(date: Date) => setPredicate('startDate', date)}
      />
    </>
  );
};

export default observer(ActivityFilters);