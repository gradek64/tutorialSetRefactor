import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datePicker.css';

/*
    *@for the date we are going to use small library
    *@moment much more convinient;
  */

const currentDate = moment().format('MMM Do, YYYY');
console.log(currentDate);

export default class ExpenseForm extends React.Component {
    /*
    *@you need local state to collect all the values 
    *@from the form and then send them in submit
  */
    constructor(props) {
        super(props);
        this.state = {
            description: props.savedExpense ? props.savedExpense.description : '',
            note: props.savedExpense ? props.savedExpense.note : '',
            amount: props.savedExpense
                ? (props.savedExpense.amount / 100).toString()
                : '',
            createdAt: props.savedExpense
                ? moment(props.savedExpense.createdAt)
                : moment(),
            calendarFocused: false
        };
        this.props = props;
        this.onFocusChange = this.onFocusChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    const onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }
    onNoteChange(e) {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }
    onAmountChange(e) {
        const amount = e.target.value;
        /*
      *@allow delete key active by !amount
      *@
    */
        if (!amount || amount.match(/^\d{1,6}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }

    onSubmit(e) {
        e.preventDefault();
        const { onSubmitForm } = this.props;

        console.log('onSubmitForm', onSubmitForm);
        /*
      *@quick soluton for hightling empty fields
      *@by using document.forms object to get the fields;
    */
        console.log('this.state.note', !this.state.note);
        Array.from(document.forms[0]).forEach((formEl, i) => {
            if (!formEl.value && i < Array.from(document.forms[0]).length - 1) {
                formEl.style.border = '1px solid red';
            } else {
                formEl.style.border = 'none';
            }
        });
        /*
      *@the rest of the form needs to be handled in redux store 
      *@so dispatch
      */
        onSubmitForm(this.state);
    }

    /*
    *@SingleDate picker is create calender library
    *@and its dependency is moment so moment has to be installed

  */
    onDateChange(createdAt) {
    //change only if date is provide so no Delete key
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    }
    onFocusChange({ focused }) {
        this.setState(() => ({ calendarFocused: focused }));
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    />
                    <button>Add Expense</button>
                </form>
            </div>
        );
    }
}
