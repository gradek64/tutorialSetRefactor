import React from 'react';

const ListHookedToLocalRedux = ({ list, dispatch }) => (

  <div>
    {list.map(({ title }, i) => (
      <div key={`keys${i}`}>
        <span>title</span>
        <button type="button" onClick={() => (dispatch({ type: 'REMOVE_ITEM', title }))}>remove</button>
      </div>
    ))}
  </div>
);


export default ListHookedToLocalRedux;
