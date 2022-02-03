import { useState } from "react";
import "./App.css";
import NewComponent from "./components/Expenses/NewComponent";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const DUMMY_ARRAY = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(DUMMY_ARRAY);

  const addNewExpense = (data) => {
    setExpenses((prevValue) => [data, ...prevValue]);
  };

  return (
    <div>
      <div>
        <NewExpense expenses={expenses} onAddNewExpense={addNewExpense} />
        <NewComponent expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
