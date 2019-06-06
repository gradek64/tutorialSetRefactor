import React, { useContext } from 'react';
// custom
import { SectionContext } from './index';

const ListHookedToLocalRedux = () => {
  const { list } = useContext(SectionContext);
  return `curtent number of items: ${list.items.length}`;
};

export default ListHookedToLocalRedux;
