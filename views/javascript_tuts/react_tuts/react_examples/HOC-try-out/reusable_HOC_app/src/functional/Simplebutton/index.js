import React from 'react';
import PropTypes from 'prop-types';

const style = {
  color: 'green',
  borderColor: 'green',
};
const SimpleButton = ({ label, eventHandler, value }) => (
  <button
    onClick={() => {
      eventHandler(value);
    }}
    style={style}
  >
    {label}
  </button>
);

SimpleButton.propTypes = {
  label: PropTypes.string.isRequired,
  eventHandler: PropTypes.instanceOf(Function).isRequired,
  value: PropTypes.string,
};
SimpleButton.defaultProps = {
  value: '',
};
export default SimpleButton;
