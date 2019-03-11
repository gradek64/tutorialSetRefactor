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
const manipulateListFns = ({ list }) => {
  return { list };

  switch (action) {
    case "sort":
      if (updatedList) {
        list = updatedList;
      }
      return {
        list: fnHelpers[sortBy](list, "name")
      };
    case "filterDark":
    case "filterLight":
      updatedList = list.filter(term => fnHelpers.filter(term));
      return {
        list: updatedList
      };
    case "search":
      console.log("....letterSearch", letterSearch);
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
