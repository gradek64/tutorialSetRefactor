import React from 'react';
import User from './User';
import FriendStatus from './FriendStatus';
import { useFriendStatus } from './sharedLogic_hook';


const friendList = [
  { name: 'Phoebe' },
  { name: 'Greg' },
  { name: 'Ross' },
];


const CustomHook = () => {
  const changeUser = (name) => {
    useFriendStatus(name);
  };

  return (
    <div>
    status:
      <FriendStatus />
      {friendList.map(({ name }, i) => <User name={name} key={`CustomHook${i}`} />)}
      <button type="button" onClick={changeUser}>change user</button>
    </div>
  );
};

export default CustomHook;
