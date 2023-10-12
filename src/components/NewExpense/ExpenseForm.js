import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  //   // when we read value from event, it will be a string, so we will set initial value as string.
  const [enteredAmount, setEnteredAmont] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //   we can use single useState rather than separate states.
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  // incase of single state update, we have to keep the all states up to date so we don't lose them on the update of anyone of the update.

  //  const titleHandler = (event) => {
  //    setUserInput((prevState)=>{
  //     return {
  //         ...prevState, enteredTitle: event.target.value
  //     }
  //    });
  //  };
  //   we can also create a single change handler with {identifier and value for all the changehandlers.}

  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountHandler = (event) => {
    setEnteredAmont(event.target.value);
  };
  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    // to prevent page reload.
    event.preventDefault();

    const expenseDate = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    // we added value attribute in input for the two way binding, it will reset the form once we have submit the from.
    setEnteredTitle("");
    setEnteredAmont("");
    setEnteredDate("");
    console.log(expenseDate);
  };

  //   browser give a default event when the submit button is click, it submits the form.
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name=""
            id="title"
            value={enteredTitle}
            onChange={titleHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
