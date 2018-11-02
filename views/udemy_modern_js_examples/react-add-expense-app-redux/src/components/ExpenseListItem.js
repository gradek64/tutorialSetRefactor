import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeExpense } from "../actions/expenses";

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>
      {amount} - {createdAt}
    </p>
    <button
      onClick={() => {
        dispatch(removeExpense({ id }));
      }}
    >
      Remove
    </button>

    <Link to={`edit/${id}`}>
      <button>Edit</button>
    </Link>
  </div>
);

export default connect(() => {
  console.warn("this function should be here just for learning purposes");
  console.log("any change in store triggers this ExpenseListItem.js connect");

  return {};
})(ExpenseListItem);
