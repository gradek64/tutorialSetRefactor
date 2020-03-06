import React, {} from 'react';
//import PropTypes from 'prop-types';

interface Iprops {
  eventHandler(eventTargetValue:string):void;
  placeholder:string;
}

const SearchBox:React.FC<Iprops> = ({ eventHandler, placeholder }) => (
  <input
    placeholder={placeholder}
    className="search-box"
    type="text"
    onInput={(e:React.FormEvent<HTMLInputElement>):void => eventHandler((e.target as HTMLInputElement).value)}
  />
);
/* SearchBox.propTypes = {
  eventHandler: PropTypes.instanceOf(Function).isRequired,
  placeholder: PropTypes.string,
};
SearchBox.defaultProps = {
  placeholder: '',
}; */

export default SearchBox;
