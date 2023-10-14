import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [visible, setVisible] = useState(false);

  const onHandleVisible = () => {
    setVisible(false);
  };
  const onSaveExpenseDataHandler = (dataFromChild) => {
    const expenseData = {
      ...dataFromChild,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setVisible(false);
  };
  return (
    <div className="new-expense">
      {!visible && (
        <button onClick={() => setVisible(true)}>Add Expense</button>
      )}
      {/* To get data from child component we will create a function and a pointer, we will execute the function in the child component and pass the data as an argument */}

      {visible && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={onHandleVisible}
        />
      )}
    </div>
  );
};

export default NewExpense;
