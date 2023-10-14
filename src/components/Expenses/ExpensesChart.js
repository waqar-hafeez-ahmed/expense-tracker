import React from "react";
import Chart from "../UI/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 }, //Jan=>0
    { label: "Feb", value: 0 }, //Feb=>1
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    //We will get the month of the expense.
    const expenseMonth = expense.date.getMonth(); //=> starting at 0 =>Jan=>0
    //We will increase the value corresponding to that month on our array.
    // We are using expenseMonth as an index, because expenseMonth will give us the index and it will be equal to index of chartDataPoint months.
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  return (
    <div>
      <Chart dataPoints={chartDataPoints} />
    </div>
  );
};

export default ExpensesChart;
