import React, { useReducer } from 'react';
import List from './ListHookedToLocalRedux';
import { listReducer } from './listReducer';
import Info from './Info';

const initialList = {
  items: [
    { title: 'title1' },
    { title: 'title2' },
    { title: 'title3' },
    { title: 'title4' },
  ],
};

const AppLocalRedux = () => {
  const [list, dispatch] = useReducer(listReducer, initialList);

  return (
    <div>
      <Info items={list.items.length} />
      <List list={list.items} dispatch={dispatch} />
    </div>
  );
};

export default AppLocalRedux;
