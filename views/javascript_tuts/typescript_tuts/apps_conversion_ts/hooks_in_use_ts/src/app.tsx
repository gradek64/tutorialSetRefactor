import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// custom
import ComponendDidMountAndUpdate from './ComponendDidMount_useEffect_hook/index';
/* import SimpleClickUpdate from './SimpleClickUpdate_useState_hook/index';
import ComponentDidUnmountHookSubstitute from './ComponentDidUnmount_useEffect_hook/index';
import AppLocalRedux from './localRedux_useReducer_hook/index';
import ContextAPI from './contextAPI-useContext-hook/index';
import CustomHook from './custom_Hooks_shared_logic/index'; */

// shared logic hook;
//import { useFriendStatus } from './custom_Hooks_shared_logic/sharedLogic_hook';

const comps = [
  { title: 'set' },
  { title: 'set2' },
  { title: 'set3' },
  { title: 'set4' },
];

/* const ChecStatusHere = () => {
  const isOnline = useFriendStatus();

  if (isOnline === null) {
    return 'Loading...';
  }
  return <span style={{ color: 'green' }}>{isOnline}</span> || 'Offline';
}; */


const Index = () => {
  // hook for managing comps array display;
  const [components, setComponent] = useState(comps);
  const removeComponent = (which) => {
    const order = components.findIndex(({ title }) => title === which);
    components.splice(order, 1);
    setComponent([...components]);
  };

  return (
    <div className="helloworld">
      {/* <SimpleClickUpdate /> */}
      <ComponendDidMountAndUpdate />
      {/* <h2>substitue to componentWillUnmount() class method</h2>
      { components.map(({ title }, i) => (
        <ComponentDidUnmountHookSubstitute
          key={`key${i}`}
          title={title}
          eventHandler={removeComponent}
        />
      ))}
      <h2>local reducer with useReducer() hook </h2>
      <AppLocalRedux />
      <h2>context API as the way to simulate redux store</h2>
      <ContextAPI />
      <h2>custom Hooks shared logic</h2>
      <CustomHook />
      <p>Awesome ! react allows you to share state without REDUX by exposing and then importing custom hook logic/state</p> */}
      {'status outside main composition:'}
      {/* <ChecStatusHere /> */}
    </div>
  );
};

ReactDOM.render(<Index />, document.querySelector('#root'));
