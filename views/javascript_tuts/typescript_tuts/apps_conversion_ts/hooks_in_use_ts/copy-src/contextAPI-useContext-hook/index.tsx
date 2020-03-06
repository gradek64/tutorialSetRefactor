import React, { useReducer, useContext } from 'react';
import List from './ListHookedToLocalRedux';
import { listReducer } from './listReducer';
import Info from './Info';


/*
      Context provides a way to pass data through the component tree

      without having to pass props down manually at every level

      --React quatation

      1. create context
      2. <Context>...</Context> wrappet text a value as prop with initial object to be shared
      2a. It is common use to give initial context value from useReducer() hook

*/

const initialList = {
  items: [
    { title: 'title1' },
    { title: 'title2' },
    { title: 'title3' },
    { title: 'title4' },
  ],
};

// create context that would wrap all children components ang give access to context value
// it needs to be exported since other component have to have acccess to it by importing it

export interface AppContextInterface {
  list:[],
  dispatch:any,
}
export const SectionContext = React.createContext<Partial<AppContextInterface>>({});


const AppLocalRedux = () => {
  const [list, dispatch] = useReducer(listReducer, initialList);

  return (
    <React.Fragment>
      {/* we have wrapper that provides state distribution in a value prop */}
      <SectionContext.Provider value={{ list, dispatch }}>
        <Info />
        <List />
      </SectionContext.Provider>
    </React.Fragment>
  );
};

export default AppLocalRedux;
