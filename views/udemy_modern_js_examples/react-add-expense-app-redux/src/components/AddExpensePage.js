import React from "react";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";

const AddExpensePage = props => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmitForm={formObj => {
        /*
              expected format:
                {
                  description: String,
                  note: String,
                  amount: Float,
                  createdAt:moment(),
                  calendarFocused:false,
                };

            */
        console.log("formObj", formObj);
        //props.dispatch(addExpense(formObj));
      }}
    />
  </div>
);

export default connect()(AddExpensePage);
