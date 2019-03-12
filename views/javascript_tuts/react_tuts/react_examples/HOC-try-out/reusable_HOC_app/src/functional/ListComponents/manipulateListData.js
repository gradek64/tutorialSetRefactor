/*
  *@this is our logic for filtering function
  *@as name implies it will filter our data based on state
  *@ from its wrapper it needs list, state, and click event Handler
*/

/** **
 FilteredList FUNCTION number in stack: 2
 list and state Value given i\n props;
** */

import * as fnHelpers from "../../utilityMethods/sorting";

let updatedList;
/* eslint-disable-next-line object-curly-newline */
const manipulateListFns = ({
  list,
  letterSearch,
  sortBy,
  filter: filterSide,
  action
}) => {
  /* console.log('action', action);
  console.log('sortBy', sortBy);
  console.log('filter', filterSide);
  console.log('letterSearch', letterSearch); */
  switch (action) {
    case "sortBy":
      if (updatedList) {
        list = updatedList;
      }
      return {
        list: fnHelpers[sortBy](list, "name")
      };
    case "filter":
      updatedList = list.filter(({ side }) => side === filterSide);
      return {
        list: updatedList
      };
    case "search":
      updatedList = list.filter(char =>
        char.name
          .concat(char.side)
          .toLowerCase()
          .includes(letterSearch)
      );
      return {
        list: updatedList
      };
    default:
      return {
        list: updatedList
      };
  }
};

export { manipulateListFns };
