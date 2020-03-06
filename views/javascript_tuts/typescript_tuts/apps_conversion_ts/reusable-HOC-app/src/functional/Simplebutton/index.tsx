import * as React from 'react';
import './simpleButton.scss';

interface IProps {
  label:string;
  eventHandler:(value:string)=>void;
  value?:string;
}

const SimpleButton:React.FC<IProps> = ({ label, eventHandler, value = ''}) => (
  <button
    className="simple-button"
    onClick={() => {
      eventHandler(value);
    }}
  >
    {label}
  </button>
);

/* SimpleButton.propTypes = {
  label: PropTypes.string.isRequired,
  eventHandler: PropTypes.instanceOf(Function).isRequired,
  value: PropTypes.string,
};
SimpleButton.defaultProps = {
  value: '',
}; */
export default SimpleButton;
