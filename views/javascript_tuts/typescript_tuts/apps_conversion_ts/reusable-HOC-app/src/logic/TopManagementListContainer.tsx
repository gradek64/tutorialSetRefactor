import React from 'react';
//import PropTypes from 'prop-types'; no need for those anymore since we check types
import EnhancedList from '../functional/ListComponents/EnhancedList';
import Simplebutton from '../functional/Simplebutton/index';
import ToogleButton from '../functional/Togglebutton/index';
import DropDown from '../functional/DropDown/index';
import SearchBox from '../functional/SearchBox/index';

/** *********

    This component is like a wrapper it holds all partials componenets as searchBox etc (functionality components)
    the only reason is a class component cause it needs logic for setting filtering, searching etc
    U need to specify handlers here for SearchCompoennt, Sorting, filtering basically anything dynamic user changes to
    the table, If user wasnt interacing with it then it should be functional component not a class.

************ */
const styles = {
  list: {
    listStyleType: 'none',
    backgroundColor: 'white',
    margin: 0,
    padding: 0,
  },
};
interface IProps {
  // list: {}[]; //same as 
  list: Array<{name:string,side:string}>; 
}
interface IState {
  sortBy: string;
  action: string;
  searchValue: string;
  filter: string;
}
interface IPropsList extends IProps{
  letterSearch:string;
  sortBy:string;
  filter:string;
  actionType:string;
}

//this is component interface the same as: (prop:IPropsList) => JSX.Element
interface EnhancedListCompInterface {
  (prop:IPropsList): JSX.Element
}

const withSimpleState = (classes:any) => (EnhancedListComp:EnhancedListCompInterface)=> {
  {
    /* the class below is needed for table logic as search, filters etc... */
  }

  // the clock's state has one field: The current time, based upon the
// React class interface



//TableStates class interface
//class itself
interface ITableStates {
  searchText:(searchValue:string)=>void;
  filterSide:(filterby:string)=>void;
  sortBy:(sortValue:string)=>void;
}

  class TableStates extends React.Component<IProps,IState> implements ITableStates {
    /* 
      no need for that anymore:
    
    constructor(props: IProps) {
      super(props);
      this.state = {
        sortBy: 'sortASC',
        action: 'sortBy',
        searchValue: '',
        filter: '',
    } 
      this.searchText = this.searchText.bind(this);
      this.filterSide = this.filterSide.bind(this);
      this.sortBy = this.sortBy.bind(this); 
    */
      greg:string;
      state:Readonly<IState> = {
        sortBy: 'sortASC',
        action: 'sortBy',
        searchValue: '',
        filter: '',
    }
    //searchText = (searchValue:string) => {
    public searchText = (searchValue:string) => {
      this.setState(state => ({
        ...state,
        action: 'search',
        searchValue: searchValue.toLowerCase(),
      }));
    }
    //filterSide = (filterby:string) => {
    public filterSide = (filterby:string) => {
      this.setState(state => ({
        ...state,
        filter: filterby,
        action: 'filter',
      }));
    }
    //sortBy = (sortValue:string) => {
    public sortBy = (sortValue:string) => {
      this.setState(state => ({
        ...state,
        sortBy: sortValue,
        action: 'sortBy',
      }));
    }
    render() {
      return (
        <div>
          <div className="tableHeader">
            <h1>active filter: {this.state.filter === '' ? 'none' : this.state.filter}</h1>
            <h1>active sortBy: {this.state.sortBy}</h1>
            <SearchBox placeholder="filter" eventHandler={this.searchText} />
            <Simplebutton
              eventHandler={this.filterSide}
              value="dark"
              label="filter DARK side"
            />
            <Simplebutton
              eventHandler={this.filterSide}
              value="light"
              label="filter LIGHT side"
            />
            <ToogleButton
              action={this.sortBy}
              label="sort"
              toggleLabels={['ASC', 'DESC']}
              values={['sortASC', 'sortDESC']}
            />
            <div
              style={{
                width: '10%',
                display: 'inline-block',
                backgroundColor: 'white',
              }}
            >
              {/* DropDown is composed with Togglebutton that
                requires eventHandler so U need to specify an empty method */}
              <DropDown label="DropDown">
                <ul style={classes.list}>
                  <li>
                    <Simplebutton
                      eventHandler={this.sortBy}
                      value="sortDESC"
                      label="sortDESC"
                    />
                  </li>
                  <li>
                    {' '}
                    <Simplebutton
                      eventHandler={this.sortBy}
                      value="sortASC"
                      label="sortASC"
                    />
                  </li>
                </ul>
              </DropDown>
            </div>
          </div>
          <div>
            <EnhancedListComp
              {...this.props}
              letterSearch={this.state.searchValue}
              sortBy={this.state.sortBy}
              filter={this.state.filter}
              actionType={this.state.action}
            />
          </div>
        </div>
      );
    }
  }

  /* TableStates.propTypes = {
    list: PropTypes.instanceOf(Array).isRequired,
  }; */
  return TableStates;
};

const FilteredListSearch = withSimpleState(styles)(EnhancedList);

export default FilteredListSearch;
