import React from 'react';
import { render } from 'react-dom';

// custom

import Modal from './components/logic/Modal/Modal_hook';
import customEvent from './customEvents/dispatchEvent';
import { showCloseModal } from './components/hooks/shared_login_modal';

const TestComponent = () => (
  <div>
    <h1>this is header</h1>
    <h2>this is smaller header</h2>
    <h4>this is the smallest header</h4>
  </div>
);

const Index = () => (
  <React.Fragment>
    <button
      onClick={() => {
        showCloseModal(true);
      }}
    >
      modal 1
    </button>
    <button
      onClick={() => {
        showCloseModal(false);
      }}
    >
      modal 2
    </button>

    <Modal eventOn="OPEN_MODAL_1">
      <p>this is modal test</p>
    </Modal>
    <Modal eventOn="OPEN_MODAL_2">
      <TestComponent />
    </Modal>
  </React.Fragment>
);

export default Index;

render(<Index />, document.getElementById('root'));
