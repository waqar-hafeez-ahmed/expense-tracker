import React, { useState } from "react";
import "./Expenses.css";

import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filter, setFilter] = useState("2020");
  const onFilterChangedHandler = (dataFromChild) => {
    setFilter(dataFromChild);
  };
  // It will give us a new array with year equal to our selected year in filter component.
  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear().toString() === filter
  );

  // let expenseContent = <p>No Data Found</p>;

  // if (filteredExpenses.length > 0) {
  //   expenseContent = filteredExpenses.map((item) => (
  //     // {/* we use map to render data dynamically. */}
  //     // {/* // We only display items where year matches filter value */}
  //     <ExpenseItem
  //       key={item.id}
  //       title={item.title}
  //       amount={item.amount}
  //       date={item.date}
  //     />
  //   ));
  // }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filter}
          onFilterChange={onFilterChangedHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList item={filteredExpenses} />
        {/* We render expense content conditionally. Thought we could have used ternary operator or && also.

        {expenseContent} */}
      </Card>
    </div>
  );
};

export default Expenses;
