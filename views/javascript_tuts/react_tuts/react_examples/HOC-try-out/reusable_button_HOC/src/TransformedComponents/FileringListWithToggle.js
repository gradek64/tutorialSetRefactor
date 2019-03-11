import React from "react";

import PureList from "../functional/DisplayList";
import { filteredSide } from "../logic/filterHelpers";

const filterList = Component => ({ list, stateValue }) => {
  const filterListSide = filteredSide({ list, side: stateValue });
  return <Component {...filterListSide} />;
};
const FilterListTransform = filterList(PureList);
// export default FilterListTransform;

/*
  *@this component is responsible for logic only
  *@it has state functionality pass down to Base Component
*/
const withSimpleState = defaultState => BaseComponent =>
  class WithSimpleStateClass extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: defaultState };
      this.updateState = this.updateState.bind(this);
    }
    updateState(updateValue) {
      const value = updateValue ? "light" : "dark";
      this.setState({ value });
    }
    render() {
      return (
        <BaseComponent
          {...this.props}
          stateValue={this.state.value}
          stateHandler={this.updateState}
        />
      );
    }
  };

export default withSimpleState("dark")(FilterListTransform);
