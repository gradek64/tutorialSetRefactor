import React from 'react';
import PropTypes from 'prop-types';


const SearchBox = React.forwardRef((props, searchBoxRef) => (
  <input
    type="text"
    id={props.id}
    ref={searchBoxRef}
    onInput={props.onInputHandler}
    onKeyDown={(e) => { e.key === 'Enter' ? props.eventHandler() : false; }}
  />
));
export default SearchBox;

SearchBox.propTypes = {
  eventHandler: PropTypes.func.isRequired,
  onInputHandler: PropTypes.func.isRequired,
};
