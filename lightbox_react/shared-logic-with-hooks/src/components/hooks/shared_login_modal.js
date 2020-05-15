/* import React, { useState, useEffect } from 'react';

const showCloseModal = (openState) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    /* function handleStatusChange(status) {
      setIsOpen(status.isOpen);
    } */

//setIsOpen(openState);
//console.log('isOpen', isOpen);
// ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
// return () => {
// ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
// };
//}, [isOpen, openState]);

//curent isOpen state exposed
// return isOpen;//
//};

//export { showCloseModal }; */

import { useState, useEffect } from 'react';

let listeners = [];
let state = { counter: 0 };

const setState = (newState) => {
  state = { ...state, ...newState };
  listeners.forEach((listener) => {
    listener(state);
  });
};

const useCustom = () => {
  const newListener = useState()[1];
  useEffect(() => {
    listeners.push(newListener);
  }, []);
  return [state, setState];
};

export default useCustom;
