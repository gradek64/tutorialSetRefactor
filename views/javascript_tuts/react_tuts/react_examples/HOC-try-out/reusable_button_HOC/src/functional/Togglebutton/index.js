import React from "react";
import PropTypes from "prop-types";
import SimpleButton from "../Simplebutton/index";
import ToggleState from "../../logic/ToggleState";

/*
  *@ToggleState is class componet that holds only logic and uses
  *@props.render method to exposed its renderMethod and toglle state
  *@SimpleButton is extending ToggleState (using its logic) and then whole thing (ToggleState and Simple button)
  *@is wrapped in ToggleSimpleButton functional component that is expoerted outside and takes props for SingleButton
*/
const ToggleSimpleButton = props => {
  {
    /* toggleMethod is exposed from ToggleState class and allows to as well as toggle state
true or false , that could be used in other componenst as Simple button */
  }
  return (
    <ToggleState
      render={(toggleMethod, toggle) => (
        <SimpleButton
          label={`${props.label} ${
            toggle ? props.stateLabels[0] : props.stateLabels[1]
          }`}
          action={() => {
            toggleMethod(toggle);
            props.action(toggle);
          }}
          value="value"
        />
      )}
    />
  );
};

ToggleSimpleButton.propTypes = {
  label: PropTypes.string.isRequired,
  stateLabels: PropTypes.instanceOf(Array).isRequired,
  action: PropTypes.instanceOf(Function).isRequired
};

export default ToggleSimpleButton;
