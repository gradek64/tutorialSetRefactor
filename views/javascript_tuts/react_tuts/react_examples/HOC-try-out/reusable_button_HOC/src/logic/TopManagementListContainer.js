import React from "react";
import EnhancedList from "../functional/ListComponents/EnhancedList";
import Simplebutton from "../functional/Simplebutton";
import ToogleButton from "../functional/Togglebutton";
import SearchBox from "../functional/SearchBox";

/** *********

    To make all components reusable again, we need to move the logic back to the [.. withTransformProps] HoC.
    To achieve this, we need to figure out how to use the [...withTransformProps]
    and [...withSimpleState] HoCs with the [...base component] at the same time and
    allow the [...renderDisplayList] to only be responsible for the presentation again.
    We can achieve this behavior using &&&& composition $$$$$.


************ */

/*
  *@this component is responsible for logic only
  *@it has state functionality pass down to Base Component
*/
const withSimpleState = EnhancedListComp => {
  {
    /* the class below is needed for table logic as search, filters etc... */
  }
  return class TableStates extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        sortBy: "sortASC",
        action: "sortBy",
        searchValue: "",
        filter: ""
      };
      this.searchText = this.searchText.bind(this);
      this.filterSide = this.filterSide.bind(this);
      this.sortBy = this.sortBy.bind(this);
    }
    searchText(searchValue) {
      this.setState(
        state => ({
          ...state,
          action: "search",
          searchValue: searchValue.toLowerCase()
        }),
        () => {
          console.log("this.state", this.state);
        }
      );
    }
    filterSide(filterby) {
      this.setState(state => ({
        filter: filterby,
        ...state,
        action: "filter"
      }));
    }
    sortBy(sortValue) {
      this.setState(state => ({
        sortBy: sortValue,
        ...state,
        action: "sortBy"
      }));
    }
    render() {
      return (
        <React.Fragment>
          <div className="tableHeader">
            <SearchBox placeholder="filter" eventHandler={this.searchText} />
            <Simplebutton
              action={this.filterSide}
              value="dark"
              label="filter DARK side"
            />
            <Simplebutton
              action={this.filterSide}
              value="light"
              label="filter LIGHT side"
            />
            <ToogleButton
              action={this.sortBy}
              label="toggle"
              stateLabels={["in", "out"]}
            />
          </div>
          <div>
            <EnhancedListComp
              {...this.props}
              letterSearch={this.state.searchValue}
              sortBy={this.state.sortBy}
              filter={this.state.filter}
              action={this.state.action}
            />
          </div>
        </React.Fragment>
      );
    }
  };
};

const FilteredListSearch = withSimpleState(EnhancedList);

export default FilteredListSearch;
