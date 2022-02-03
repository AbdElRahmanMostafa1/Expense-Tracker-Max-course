import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const expenseDataHandler = (data) => props.onAddNewExpense(data);

  const changeEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <div className="new-expense__actions">
          <button type="button" onClick={changeEditingHandler}>
            Add New Expense
          </button>
        </div>
      )}
      {isEditing && (
        <ExpenseForm
          expenses={props.expenses}
          onAddExpense={expenseDataHandler}
          stopEditingHandler={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
