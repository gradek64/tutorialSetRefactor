import React from "react";
import SearchBox from "./SearchBox/SearchBoxComponent";
import DropDownSelect from "./DropDownSelect/DropDownSelect";
import { ListWithFilters } from "./ListComponent/BaseList";

/***********

    To make all components reusable again, we need to move the logic back to the [.. withTransformProps] HoC. 
    To achieve this, we need to figure out how to use the [...withTransformProps]
    and [...withSimpleState] HoCs with the [...base component] at the same time and 
    allow the [...renderDisplayList] to only be responsible for the presentation again.
    We can achieve this behavior using &&&& composition $$$$$.


*************/

/*
  *@this component is responsible for logic only 
  *@it has state functionality pass down to Base Component
*/
const withSimpleState = BaseComponent => {
  return class WithSimpleState extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: "" };
      this.updateState = this.updateState.bind(this);
    }
    updateState(valueSet) {
      console.log(valueSet);
      this.setState({ value: valueSet.toLowerCase() });
    }
    render() {
      return (
        <div>
          <SearchBox eventHandler={this.updateState} />
          <DropDownSelect eventHandler={this.updateState} />
          <BaseComponent {...this.props} stateValue={this.state.value} />
        </div>
      );
    }
  };
};

/****
 TOP HOC component that holds logic for state ,  number in stack: 1
 U need to export it to top HOC , this component will take our FILTERED COMPONEMT and it get exported for rendering
***/

/*
  *@Our state component needs our Base compoenent to be passed with the filters applied to it\
  *@
*/
const FilteredListSearch = withSimpleState(ListWithFilters);

export default FilteredListSearch;
