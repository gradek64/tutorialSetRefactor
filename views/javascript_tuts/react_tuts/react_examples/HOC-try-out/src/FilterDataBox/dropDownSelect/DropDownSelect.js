import React from "react";
const DropDownSelect = ({ eventHandler }) => (
  <select
    onChange={e => {
      eventHandler(e.target.value);
    }}
  >
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </select>
);

export default DropDownSelect;
