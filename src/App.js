
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpenses/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  { id: "1", date: new Date(2021, 7, 15), title: "Insurance", price: 100 },
  { id: "2", date: new Date(2020, 3, 25), title: "Book", price: 10 },
  { id: "3", date: new Date(2022, 10, 11), title: "Pen", price: 1 },
  { id: "4", date: new Date(2022, 1, 14), title: "Laptop", price: 200 },
];

const App =() => {
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) =>{
    setExpenses((prevExpenses)=>{
      return ([expense, ...prevExpenses]);
    });
  }

  return (
    <div>
      <h1>Let's get Started</h1>
      <NewExpense  onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}></Expenses>
      
    </div>
  );
}

export default App;