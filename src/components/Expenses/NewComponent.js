import { useState } from "react";

import "./NewComponent.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const NewComponent = (props) => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const onSelectYear = (date) => {
    setSelectedYear(date);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={selectedYear} onSelectYear={onSelectYear} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList filteredExpenses={filteredExpenses} />
    </Card>
  );
};

export default NewComponent;
