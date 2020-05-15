import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// custom imports;
import customEvent from '../../../customEvents/dispatchEvent';
import './modal.scss';

const Modal = (props) => {
  //open state is an invisible function that only task is to manage open state!
  //call it everwhere is needed;
  const [open, openState] = useState(false);

  //------- internal open and close method ----
  const openModal = () => {
    const delaySelector = setTimeout(() => {
      clearTimeout(delaySelector);
      document.querySelector('[tabIndex="-1"]').focus();
    }, 100);
    openState(true);
  };
  const closeModal = (e) => {
    if (e && e.target !== e.currentTarget) return;
    if (e.type === 'keydown' && e.key !== 'Escape') return;
    openState(false);
  };
  //------- ------- ----------

  useEffect(() => {
    const { eventOn } = props;

    if (!eventOn) {
      console.warn('your custom event is not specified');
      return;
    }
    customEvent.on(eventOn, openModal);
    customEvent.on(`CLOSE_${eventOn}`, closeModal);
  }, []); // array of conditions is empty so run only once is mounted

  return (
    <React.Fragment>
      <div
        style={open ? { display: 'flex' } : { display: 'none' }}
        tabIndex={open ? -1 : 0}
        role="presentation"
        className="modal"
        //this is currentTarget
        onClick={closeModal}
        onKeyDown={closeModal}
      >
        <div className="modal-content">{props.children}</div>
      </div>
    </React.Fragment>
  );
};

Modal.propTypes = {
  eventOn: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
export default Modal;
