/*
  *@this is a not a component it is a mehtod that retruns a list object
  that later is used as props for BaseList component and is initialisez by transforming default props to
  once needed by action passed to this function;
*/

import * as fnHelpers from '../../utilityMethods/sorting';

/* eslint-disable-next-line object-curly-newline */
interface ArgumentsTypes {
  list:Array<{side:string,name:string}>;
  letterSearch:string;
  sortBy:string;
  filter:string;
  actionType:string;
}
let updatedList:ArgumentsTypes['list'];

const manipulateListFns = ({
  list,
  letterSearch,
  sortBy,
  filter: filterSide,
  actionType,
}:ArgumentsTypes)
  //return a list of below structure
  :{
    list:Array<{side:string,name:string }>
    } => {

  switch (actionType) {
  case 'sortBy':
    if (updatedList) {
      // exception you do want to muttate data that gets in;
      /* eslint-disable-next-line no-param-reassign */
      list = updatedList;
    }
    updatedList = list;
    return {
      list: fnHelpers[sortBy](list, 'name'),
    };
  case 'filter':
    updatedList = list.filter(({ side }) => side === filterSide);
    return {
      list: updatedList,
    };
  case 'search':
    updatedList = list.filter(char =>
      char.name
        .concat(char.side)
        .toLowerCase()
        .includes(letterSearch));
    return {
      list: updatedList,
    };
  default:
    return {
      list,
    };
  }
};

export { manipulateListFns };