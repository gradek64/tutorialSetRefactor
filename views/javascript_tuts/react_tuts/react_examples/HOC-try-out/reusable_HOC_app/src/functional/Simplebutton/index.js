import React from 'react';
import PropTypes from 'prop-types';

const style = {
  color: 'green',
  borderColor: 'green',
};
const SimpleButton = ({ label, action, value }) => (
  <button
    onClick={() => {
      action(value);
    }}
    style={style}
  >
    {label}
  </button>
);

SimpleButton.propTypes = {
  label: PropTypes.string.isRequired,
  action: PropTypes.instanceOf(Function).isRequired,
  value: PropTypes.string,
};
SimpleButton.defaultProps = {
  value: '',
};
export default SimpleButton;
