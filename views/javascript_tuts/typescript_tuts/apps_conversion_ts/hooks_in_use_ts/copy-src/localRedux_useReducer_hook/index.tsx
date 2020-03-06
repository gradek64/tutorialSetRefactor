import React, { useReducer } from 'react';
import List from './ListHookedToLocalRedux';
import { listReducer } from './listReducer';
import Info from './Info';

/* interface Motorbikes {
  make:string,
  type:string,
}

const shoppingList:Record<string,Motorbikes> = {
  owner1:{
    make:'Honda',
    type:'sport',
  },
  owner2:{
    make:'Yamaha',
    type:'sport',
  },
} */
const initialList:Record<string,[{ title:string },{ title:string },{ title:string },{ title:string }]> = {
  items:[
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
