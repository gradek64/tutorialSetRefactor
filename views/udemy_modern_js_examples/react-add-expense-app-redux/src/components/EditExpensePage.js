import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";

const EditExpensePage = props => {
  const { currentExpense } = props;
  return (
    <div>
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
          //props.dispatch(addExpense(formObj));
        }}
        savedExpense={currentExpense}
      />
    </div>
  );
};

const mapStatetoProps = (state, props) => {
  return {
    currentExpense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

export default connect(mapStatetoProps)(EditExpensePage);
