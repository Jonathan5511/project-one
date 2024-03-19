import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';
import React,{useState} from 'react';

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);
  const [price, setPrice] = useState(props.price);

  const onclickHandler = ()=>{
    setTitle('updated!');
    console.log(title);
  }
  const priceHandler = ()=>{
    setPrice('100');
  }

  return (
    <Card className="expense-item" id="item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${price}</div>
        <button type="button" onClick={onclickHandler}>change title</button>
        <button type="button" on onClick={priceHandler}>change price</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
