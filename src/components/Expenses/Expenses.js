import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpenseFilter";

const Expenses = (props) => {
  const [filter, setFilter] = useState("2020");
  const onFilterChangedHandler = (dataFromChild) => {
    setFilter(dataFromChild);
    console.log(dataFromChild);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filter}
          onFilterChange={onFilterChangedHandler}
        />
        {/* we use map to render data dynamically. */}
        {props.items.map((item) => (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
