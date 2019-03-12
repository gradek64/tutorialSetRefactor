import React from "react";
import PropTypes from "prop-types";

class ToggleState extends React.Component {
  state = {
    toggle: false
  };
  toggle = toggle => {
    this.setState({ toggle: !toggle });
  };

  render() {
    const { toggle } = this.state;
    return (
      <React.Fragment>{this.props.render(this.toggle, toggle)}</React.Fragment>
    );
  }
}

ToggleState.propTypes = {
  render: PropTypes.func.isRequired
};

export default ToggleState;
