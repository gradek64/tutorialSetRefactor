const sortASC = array =>
  array.sort((a, b) => {
    const x = a.toString().toUpperCase();
    const y = b.toString().toUpperCase();

    if (x > y) {
      return 1; // y will be before x;
    }
    if (x < y) {
      return -1; // x will be before y;
    }

    // default x = y ;
    return 0;
  });

const sortDESC = array =>
  array.sort((a, b) => {
    const x = a.toString().toUpperCase();
    const y = b.toString().toUpperCase();

    if (x > y) {
      return -1; // x will be before x;
    }
    if (x < y) {
      return 1; // y will be before x;
    }

    // default x = y ;
    return 0;
  });

export { sortASC, sortDESC };
