/*
  *@this is our logic for filtering function 
  *@as name implies it will filter our data based on state
  *@ from its wrapper it needs list, state, and click event Handler
*/

/****
 FilteredList FUNCTION number in stack: 2
 list and state Value given i\n props;
***/
const filteringFn = ({ list, stateValue }) => {
  return {
    list: list.filter(char =>
      char.name
        .concat(char.side)
        .toLowerCase()
        .includes(stateValue)
    )
  };
};

export { filteringFn };
